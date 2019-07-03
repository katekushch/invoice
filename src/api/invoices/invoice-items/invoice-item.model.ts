import mongoose from 'mongoose';

import Invoice from '../invoice.model';
import { InvoiceItemInterface } from './invoice-item.interface';
import Product from '../../products/product.model';

const Schema = mongoose.Schema;

const invoiceItemSchema = new Schema({
  invoice_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Invoice,
    required: true,
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Product,
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
