import mongoose from 'mongoose';
import { User } from '../../../../models/User';
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../../libs/mongoConnect";
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

export const authOptions = {
  session :{strategy: 'jwt',},
  secret: process.env.GS_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        const email = credentials.username;
        const password = credentials.password;

        console.log(email , password)

        

        try {
          await mongoose.connect(process.env.MONGO_URI);
          const user = await User.findOne({ email });

          console.log(user)

          if (user && bcrypt.compareSync(password, user.password)) {
            return user;
          } else {
            throw new Error('Invalid credentials');
          }
        } catch (error) {
          console.error('MongoDB connection or user lookup error:', error);
          throw new Error('Authentication failed');
        }
      }
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error'
  },
};

export default authOptions;
