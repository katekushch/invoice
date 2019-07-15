import mongoose from 'mongoose';

import { InvoiceInterface } from './invoice.interface';
import Customer from '../customers/customer.model';

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Customer,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
      min: [0, 'Discount can`t be less than 0'],
      max: [100, 'Discount can`t be more than 100'],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  });

invoiceSchema.pre('remove', function (next) {
  this.model('InvoiceItem').deleteMany({invoice_id: this._id}, next);
});

const Invoice = mongoose.model<InvoiceInterface>('Invoice', invoiceSchema);

export default Invoice;
