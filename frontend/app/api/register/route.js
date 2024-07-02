
import {User} from './../../../models/User';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';


export async function  POST(req, res) {
  
    mongoose.connect(process.env.MONGO_URI)
    const body = await req.json();
    const name = body.name
    const password = body.password
    const email = body.email

    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return Response.json({ message: 'User already exists' });
      }

      console.log(name , email , password)
      const notHashedPassword = password;

      // Hash the password
      const salt = bcrypt.genSaltSync(10);
      body.password = bcrypt.hashSync(notHashedPassword, salt);

      // Create new user
      const newUser = await User.create(body);
      console.log(newUser);
     return Response.json(newUser);

    } catch (error) {
      return  Response.json({ message: 'Server error' });
    }
  
}
