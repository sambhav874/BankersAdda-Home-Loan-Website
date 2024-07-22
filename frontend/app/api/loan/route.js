import mongoose from 'mongoose';
import { getServerSession } from 'next-auth';
import { Loan } from '../../../models/LoanSchema';
import { isAdmin } from '../auth/[...nextauth]/utils/isAdmin';
import { authOptions } from '../auth/[...nextauth]/auth';

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

export async function GET(req) {
  await mongoose.connect(process.env.MONGO_URI);

  try {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;
    const admin = await isAdmin(session?.user);

    const url = new URL(req.url);
    const _id = url.searchParams.get('_id');

    if (_id) {
      const loan = await Loan.findById(_id);
      return Response.json(loan);
    }
    if(!_id){
      const loans = await Loan.find();
      return Response.json(loans);
    }

    if (admin) {
      const loans = await Loan.find();
      return Response.json(loans);
    }

    if (userEmail) {
      const loans = await Loan.find({ userEmail });
      return Response.json(loans);
    }

    return Response.json({ error: "Unauthorized access" }, { status: 403 });
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
