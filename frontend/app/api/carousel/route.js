
import { Image } from "../../../models/CarouselImage";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI);

export async function POST(req, res) {
  try {
    const { imageUrl } = await req.json();
    
      const imageDoc = await Image.create({ imageUrl });
      return Response.json({ image: imageDoc });
    
    
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Internal Server Error" });
  }
}

export async function GET(req, res) {
  try {
    const images = await Image.find();
    return Response.json({ images });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Internal Server Error" });
  }
}

export async function DELETE(req, res) {
  try {
    const _id = req.query._id;

    
      if (!_id) {
        return Response.json({ message: "Missing _id parameter" });
      }

      await Image.deleteOne({ _id });
      return Response.json({ success: true });
     
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Internal Server Error" });
  }
}
