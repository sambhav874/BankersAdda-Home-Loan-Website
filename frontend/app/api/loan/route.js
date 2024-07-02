import { Loan } from "../../../models/LoanSchema";
import mongoose from "mongoose";

export  async function POST(req) {
  // Connect to MongoDB if necessary
  await mongoose.connect(process.env.MONGO_URI);

  try {
    // Parse the request body as JSON
    const { name, description, photo } = await req.json();

    // Create a new loan document
    const loanDoc = await Loan.create({ name, description, photo });

    // Return a successful response with the created loan document
    return Response.json(loanDoc);
  } catch (error) {
    // Handle errors gracefully, such as validation errors
    console.error("Error creating loan:", error);
    return Response.json({ error: "An error occurred creating the loan" }, { status: 500 });
  }
}

export async function GET() {
    mongoose.connect(process.env.MONGO_URI);
    return Response.json(
      await Loan.find()
    );
  }
