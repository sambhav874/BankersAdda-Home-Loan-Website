import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { User } from './../../../models/User';

export async function POST(req, res) {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        const body = await req.json();
        const { name, email, password } = body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return Response.json({ message: 'User already exists' });
        }

        // Hash the password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        // Create new user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        return Response.json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Server error:', error);
        return Response.json({ message: 'Server error' });
    }
}
