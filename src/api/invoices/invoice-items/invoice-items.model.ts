export class InvoiceItems {
  _id: number = null;
  invoice_id: number = null;
  product_id: number = null;
  quantity: number = null;

  constructor(obj) {
    for (let key in this) {
      if (typeof obj[key] !== 'undefined') {
        this[key] = obj[key];
      }
    }
  }
}
