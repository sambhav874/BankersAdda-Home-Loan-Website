import { Loan } from "../../../models/LoanSchema";
import mongoose from "mongoose";

export async function POST(req) {
  await mongoose.connect(process.env.MONGO_URI);

  try {
    const { name, description, photo } = await req.json();
    const loanDoc = await Loan.create({ name, description, photo });

    return Response.json(loanDoc);
  } catch (error) {
    console.error("Error creating loan:", error);
    return Response.json({ error: "An error occurred creating the loan" }, { status: 500 });
  }
}

export async function GET() {
  await mongoose.connect(process.env.MONGO_URI);

  try {
    const loans = await Loan.find();
    return Response.json(loans);
  } catch (error) {
    console.error("Error fetching loans:", error);
    return Response.json({ error: "An error occurred fetching the loans" }, { status: 500 });
  }
}

export async function PUT(req) {
  await mongoose.connect(process.env.MONGO_URI);

  try {
    const { _id, name, description, photo } = await req.json();
    const updatedLoan = await Loan.findByIdAndUpdate(_id, { name, description, photo }, { new: true });

    return Response.json(updatedLoan);
  } catch (error) {
    console.error("Error updating loan:", error);
    return Response.json({ error: "An error occurred updating the loan" }, { status: 500 });
  }
}

export async function DELETE(req) {
  await mongoose.connect(process.env.MONGO_URI);

  try {
    const { _id } = await req.json();
    await Loan.findByIdAndDelete(_id);

    return Response.json({ message: "Loan deleted successfully" });
  } catch (error) {
    console.error("Error deleting loan:", error);
    return Response.json({ error: "An error occurred deleting the loan" }, { status: 500 });
  }
}
