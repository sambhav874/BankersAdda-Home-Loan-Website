// api/profile.js

import mongoose from "mongoose";
import { User } from "../../../models/User";
import { UserInfo } from "../../../models/UserInfo";

export async function PUT(req) {
  await mongoose.connect(process.env.MONGO_URI);

  const data = await req.json();
  const { email, name, image, ...otherUserInfo } = data;

  let filter = { email };

    const user = await User.findOne(filter);
    if (!user) {
      return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
    }

    await User.updateOne(filter, { name, image });
    await UserInfo.findOneAndUpdate({ email }, otherUserInfo, { upsert: true });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  
}

export async function GET(req) {
    await mongoose.connect(process.env.MONGO_URI);
  
    const url = new URL(req.url);
    const email = url.searchParams.get('email');
    
    if (!email) {
      return new Response(JSON.stringify({}), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  
    try {
      const user = await User.findOne({ email }).lean();
      const userInfo = await UserInfo.findOne({ email: user.email }).lean();
  
      if (user && userInfo) {
        return new Response(JSON.stringify({ ...user, ...userInfo }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      } else {
        return new Response(JSON.stringify({}), {
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }