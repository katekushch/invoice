export class Product {
  _id: number = null;
  name: string = null;
  price: number = null;

  constructor(obj) {
    for (let key in this) {
      if (typeof obj[key] !== 'undefined') {
        this[key] = obj[key];
      }
    }
  }
}
