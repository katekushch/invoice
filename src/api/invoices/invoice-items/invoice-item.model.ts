import mongoose from 'mongoose';

import { InvoiceItemInterface } from './invoice-item.interface';

const Schema = mongoose.Schema;

const invoiceItemSchema = new Schema({
  invoice_id: {
    type: String,
    required: true,
  },
  product_id: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, 'Quantity can`t be less than 0'],
  }
});

const InvoiceItem = mongoose.model<InvoiceItemInterface>('InvoiceItem', invoiceItemSchema);

export default InvoiceItem;
