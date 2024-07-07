import mongoose from "mongoose";
import { User } from "../../../models/User";
import { UserInfo } from "../../../models/UserInfo";

export async function PUT(req) {
  await mongoose.connect(process.env.MONGO_URI);

  const data = await req.json();
  
  const { _id, email, name, image, ...otherUserInfo } = data;

  let filter = {};
  if (_id) {
    filter = { _id };
  } else if (email) {
    filter = { email };
  } else {
    return new Response(JSON.stringify({ message: 'Invalid request. Provide _id or email.' }), { status: 400 });
  }

  try {
    const user = await User.findOne(filter);
    if (!user) {
      return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
    }

    // Update user's basic information (name and image)
    await User.updateOne(filter, { name, image });

    // Update or insert user's additional information
    if (Object.keys(otherUserInfo).length > 0) {
      await UserInfo.findOneAndUpdate(filter,email, otherUserInfo, { upsert: true });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error updating user data:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}


export async function GET(req) {
  await mongoose.connect(process.env.MONGO_URI);

  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');
  console.log(_id)

  if (!_id) {
    return new Response(JSON.stringify({}), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const user = await User.findOne({ _id }).lean();
    const userInfo = await UserInfo.findOne({ email: user.email }).lean();
  

    if (user || userInfo) {
      return new Response(JSON.stringify({ ...user, ...userInfo }));
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
