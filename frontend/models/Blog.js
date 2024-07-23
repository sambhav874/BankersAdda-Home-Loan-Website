import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  postedBy: { type: String, required: true }, // Added field for author's name
  image: { type: String, required: false }, // Added field for image URL
});

export const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
