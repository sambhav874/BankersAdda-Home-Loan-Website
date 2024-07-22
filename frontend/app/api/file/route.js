import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import uniqid from 'uniqid';

export async function POST(req) {
  try {
    const data = await req.formData();

    if (data.has('file')) {
      const file = data.get('file');

      const s3Client = new S3Client({
        region: 'ap-south-1',
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
      });

      const ext = file.name.split('.').pop();
      const newFileName = `${uniqid()}.${ext}`;

      const chunks = [];
      for await (const chunk of file.stream()) {
        chunks.push(chunk);
      }
      const buffer = Buffer.concat(chunks);

      const bucket = "home-loan-proj";

      const params = {
        Bucket: bucket,
        Key: newFileName,
        ACL: 'public-read',
        ContentType: file.type,
        Body: buffer,
      };

      await s3Client.send(new PutObjectCommand(params));

      const link = `https://${bucket}.s3.amazonaws.com/${newFileName}`;
      console.log(`Uploaded image: ${link}`);

      return new Response(JSON.stringify({ link }), { status: 200 });
    }

    return new Response(JSON.stringify({ message: 'No file uploaded' }), { status: 400 });
  } catch (error) {
    console.error('Error uploading image:', error);
    return new Response(JSON.stringify({ error: 'Failed to upload image' }), { status: 500 });
  }
}
