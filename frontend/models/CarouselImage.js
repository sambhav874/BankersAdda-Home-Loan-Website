// models/CarouselImage.js


import { Schema , model , models } from 'mongoose';

const imageSchema = new Schema({
  imageUrl: {
    type: String,
    required: false, // Change to false to make it optional
  },
});


export const Image = models?.Image || model('Image', imageSchema);

