import { Invoice } from './invoice.model';
import { InvoiceInterface } from './invoice.interface';

export const invoices: InvoiceInterface[] = [
  new Invoice({
    _id: 1,
    customer_id: 1,
    discount: 0,
    total: 2,
  })
];
