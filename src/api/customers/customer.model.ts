import mongoose from 'mongoose';

import { CustomerInterface } from './customer.interface';

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  });

const Customer = mongoose.model<CustomerInterface>('Customer', customerSchema);

export default Customer;
