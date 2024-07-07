// api/isAdmin.js
import mongoose from 'mongoose';
import { UserInfo } from '../../../models/UserInfo';

export async function POST(req) {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const { email } = await req.json(); // Parse email from request body

    if (!email) {
      return new Response('Email is required', { status: 400 });
    }

    const userInfo = await UserInfo.findOne({ email });

    if (userInfo) {
      return new Response(JSON.stringify({ admin: userInfo.admin }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ admin: false }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
