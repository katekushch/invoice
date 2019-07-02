import mongoose from 'mongoose';

import { InvoiceInterface } from './invoice.interface';

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
  customer_id: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
    min: [0, 'Discount can`t be less than 0'],
  },
  total: {
    type: Number,
    required: true,
    min: [0, 'Total can`t be less than 0'],
  }
});

const Invoice = mongoose.model<InvoiceInterface>('Invoice', invoiceSchema);

export default Invoice;
