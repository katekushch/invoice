import { InvoiceItemInterface } from './invoice-item.interface';
import { InvoiceItems } from './invoice-items.model';

export const invoiceItems: InvoiceItemInterface[] = [
  new InvoiceItems({
    _id: 1,
    invoice_id: 1,
    product_id: 1,
    quantity: 2,
  })
];
