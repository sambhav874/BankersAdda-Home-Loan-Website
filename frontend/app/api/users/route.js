import mongoose from 'mongoose';
import {User} from './../../../models/User'
import { isAdmin } from '../auth/[...nextauth]/utils/isAdmin';


export async function GET(){
    
        mongoose.connect(process.env.MONGO_URI);
        
        if( isAdmin){
          const users = await User.find();
          return Response.json(users);
        }
          else{
            return Response.status(401).json({message: 'Unauthorized'});
          }
          
      
}