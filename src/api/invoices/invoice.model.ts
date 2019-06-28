export class Invoice {
  _id: number = null;
  customer_id: number = null;
  discount: number = null;
  total: number = null;

  constructor(obj) {
    for (let key in this) {
      if (typeof obj[key] !== 'undefined') {
        this[key] = obj[key];
      }
    }
  }
}
