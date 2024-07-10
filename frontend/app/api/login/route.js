import { User } from '../../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

export async function POST(req) {
  await mongoose.connect(process.env.MONGO_URI);

  const { email, password } = await req.json();

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ message: 'Invalid email or password' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ message: 'Invalid email or password' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Return token and user data
    return new Response(JSON.stringify({ message: 'Login successful', token, user }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
