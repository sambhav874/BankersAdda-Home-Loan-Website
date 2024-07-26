
import { Image } from "../../../models/CarouselImage";
import mongoose from "mongoose";
import { isAdmin } from "../auth/[...nextauth]/utils/isAdmin";

mongoose.connect(process.env.MONGO_URI);



export async function POST(req, res) {
  if (await isAdmin()) {
    try {
      const { imageUrl } = await req.json();
      await mongoose.connect(process.env.MONGO_URI);
      const imageDoc = await Image.create({ imageUrl });
      return Response.json({ image: imageDoc });
    } catch (error) {
      console.error(error);
      return Response.json({ message: "Internal Server Error" });
    }
  } else {
    return Response.json({ message: "Unauthorized" });
  }
}

// GET handler
export async function GET(req, res) {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const images = await Image.find();
    return Response.json({ images });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Internal Server Error" });
  }
}

// DELETE handler
export async function DELETE(req, res) {
  if (await isAdmin()) {
    try {
      await mongoose.connect(process.env.MONGO_URI);
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
  } else {
    return Response.json({ message: "Unauthorized" });
  }
}
