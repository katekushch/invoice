import { InvoiceItemInterface } from './invoice-items/invoice-item.interface';

export interface InvoiceInterface {
  _id: number;
  customer_id: number;
  discount: number;
  total: number;
  items?: InvoiceItemInterface[];
}
