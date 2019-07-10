import { InvoiceItemInterface } from './invoice-items/invoice-item.interface';

export interface InvoiceInterface extends Document {
  customer_id: number;
  discount: number;
  items?: InvoiceItemInterface[];
}
