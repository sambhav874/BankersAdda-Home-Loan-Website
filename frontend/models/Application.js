import mongoose from 'mongoose'
import { Schema , models ,model } from 'mongoose';

const applicationSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String, // URL to the uploaded image
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: Number,
    required: true,
    trim: true
  }
  ,
  streetAddress: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  pincode: {
    type: Number,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  loanType: {
    type: String,
    required: true,
    trim: true
  },
  identityProofType: {
    type: String,
    required: true,
    enum: ['aadhar', 'pan', 'ration', 'passport', 'voter', 'others'], // Ensure value is one of these
    trim: true
  },
  identityProofFile: {
    type: String, // URL to the uploaded PDF
    required: true,
    trim: true
  },
}, {
  timestamps: true
});


export const Application = models?.Application || model('Application', applicationSchema);