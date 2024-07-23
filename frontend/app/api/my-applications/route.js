import mongoose from "mongoose";
import {Application} from "./../../../models/Application";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/auth";

export async function GET(req) {
  await mongoose.connect(process.env.MONGO_URI);

  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  if (!userEmail) {
    return new Response("Unauthorized", { status: 401 });
  }

  const applications = await Application.find({ email: userEmail });
  return new Response(JSON.stringify(applications), {
    headers: { "Content-Type": "application/json" },
  });
}
