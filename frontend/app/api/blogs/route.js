import mongoose from 'mongoose';
import { Blog } from '../../../models/Blog'; // Make sure to create this model


  await mongoose.connect(process.env.MONGO_URI);


export async function GET(req) {
  const url = new URL(req.url);
  const _id = url.searchParams.get('id');
  if(_id){
    const blog = await Blog.findById(_id);
    return new Response(JSON.stringify(blog), { status: 200 });
  }
  const blogs = await Blog.find({});
  return new Response(JSON.stringify(blogs), { status: 200 });
}

export async function POST(req) {
 
  const data = await req.json();
  const newBlog = await Blog.create(data);
  return new Response(JSON.stringify(newBlog), { status: 201 });
}

export async function PUT(req) {

    const url = new URL(req.url);
    const _id = url.searchParams.get('_id');
  
  const data = await req.json();
  const updatedBlog = await Blog.findByIdAndUpdate(_id, data, { new: true });
  return new Response(JSON.stringify(updatedBlog), { status: 200 });
}

export async function DELETE(req) {
  
    const url = new URL(req.url);
    const _id = url.searchParams.get('_id');
  await Blog.findByIdAndDelete(_id);
  return new Response(null, { status: 204 });
}
