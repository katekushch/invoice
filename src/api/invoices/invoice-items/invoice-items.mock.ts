import { InvoiceItemInterface } from './invoice-item.interface';
import { InvoiceItems } from './invoice-items.model';

export const invoiceItems: InvoiceItemInterface[] = [
  new InvoiceItems({
    _id: 1,
    invoice_id: 1,
    product_id: 1,
    quantity: 2,
  }),
  new InvoiceItems({
    _id: 2,
    invoice_id: 1,
    product_id: 222,
    quantity: 222,
  }),
  new InvoiceItems({
    _id: 3,
    invoice_id: 2,
    product_id: 333,
    quantity: 333,
  })
];
