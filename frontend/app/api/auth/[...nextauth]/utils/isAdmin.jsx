import { getServerSession } from "next-auth/next";
import mongoose from 'mongoose';
import UserInfo from '../models/UserInfo';
import { authOptions } from '../pages/api/auth/[...nextauth]'; 

export async function isAdmin() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  
  if (!userEmail) {
    return false;
  }
  console.log(userEmail)
  await mongoose.connect(process.env.MONGO_URI);
  const userInfo = await UserInfo.findOne({ email: userEmail });


  if (!userInfo) {
    return false;
  }

  return userInfo.admin;
}