export class Customer {
  _id: number = null;
  name: string = null;
  address: string = null;
  phone: string = null;

  constructor(obj) {
    for (let key in this) {
      if (typeof obj[key] !== 'undefined') {
        this[key] = obj[key];
      }
    }
  }
}
