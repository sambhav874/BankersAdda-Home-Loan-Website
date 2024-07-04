// api/profile.js

import mongoose from 'mongoose';
import { UserInfo } from '../../../models/UserInfo';

export async function POST(req) {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const { email } = await req.json(); // Parse request body as JSON

    if (!email) {
      return new Response('Email is required', { status: 400 });
    }

    const userInfo = await UserInfo.findOne({ email });

    if (userInfo) {
      return new Response(JSON.stringify({ isAdmin: userInfo.admin }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ isAdmin: false }), { status: 200 });
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return new Response('Internal Server Error', { status: 500 });
  } 
}
