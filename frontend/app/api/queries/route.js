import mongoose from "mongoose";
import nodemailer from "nodemailer";
import { Queries } from "../../../models/Query";
import { isAdmin } from "../auth/[...nextauth]/utils/isAdmin";
import authOptions from "../auth/[...nextauth]/auth";

export async function POST(req) {
  const { email, query } = await req.json();

  await mongoose.connect(process.env.MONGO_URI);

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      debug: true,
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for your query.",
      text: `Dear User,\n\nThank you for reaching out with your query. We have received your message and will get back to you as soon as possible.\n\nQuery details:\n${query}\n\nBest regards,\nLoan Helper.`,
    };

    const newQuery = await Queries.create({ userEmail: email, query, isAnswered: false });

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return new Response(JSON.stringify(newQuery), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
  }
}

export async function GET(req) {
  await mongoose.connect(process.env.MONGO_URI);

  try {
    
    const admin = await isAdmin();

    if (!admin) {
      return new Response(JSON.stringify({ error: 'Unauthorized access' }), { status: 403 });
    }

    const queries = await Queries.find();
    return new Response(JSON.stringify(queries), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error("Error fetching queries:", error);
    return new Response(JSON.stringify({ error: 'An error occurred fetching queries' }), { status: 500 });
  }
}

export async function PUT(req) {
  await mongoose.connect(process.env.MONGO_URI);

  try {
    
    const admin = await isAdmin();

    if (!admin) {
      return new Response(JSON.stringify({ error: 'Unauthorized access' }), { status: 403 });
    }

    const { _id, isAnswered } = await req.json();
    const updatedQuery = await Queries.findByIdAndUpdate(_id, { isAnswered }, { new: true });

    if (updatedQuery) {
      return new Response(JSON.stringify(updatedQuery), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: 'Query not found' }), { status: 404 });
    }
  } catch (error) {
    console.error("Error updating query:", error);
    return new Response(JSON.stringify({ error: 'Error updating query' }), { status: 500 });
  }
}