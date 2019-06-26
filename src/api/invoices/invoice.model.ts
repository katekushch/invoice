import { InvoiceItemInterface } from './invoice-items/invoice-item.interface';

export class Invoice {
  _id: number = null;
  customer_id: number = null;
  discount: number = null;
  total: number = null;
  //items: InvoiceItemInterface[] = [];

  constructor(obj) {
    for (let key in this) {
      if (typeof obj[key] !== 'undefined') {
        this[key] = obj[key];
      }
    }
  }
}
