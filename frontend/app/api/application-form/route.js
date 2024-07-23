import mongoose from "mongoose";
import { Application } from "../../../models/Application";
import { isAdmin } from "../auth/[...nextauth]/utils/isAdmin";

export async function POST(req) {
  await mongoose.connect(process.env.MONGO_URI);

  const data = await req.json();
  console.log("Data:" + data);

  const applicationDoc = await Application.create(data);

  console.log(applicationDoc);

  return Response.json(data);
}

export async function GET() {
  await mongoose.connect(process.env.MONGO_URI);
  if (isAdmin) {
    const applications = await Application.find({});
    return Response.json(applications);
  }
}

export async function PATCH(req) {
  await mongoose.connect(process.env.MONGO_URI);

  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');
  const { status } = await req.json();

  const application = await Application.findByIdAndUpdate(_id, { status }, { new: true });

  return Response.json(application);
}
