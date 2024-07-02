// models/loan.js
import {model , models , Schema} from 'mongoose';

const LoanSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
}, {timestamps : true});

export const Loan = models?.Loan || model('Loan', LoanSchema);
