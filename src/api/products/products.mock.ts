import { Product } from './products.model';

export const products = [
  new Product({
    _id: 1,
    name: 'Product 1',
    price: 33.00,
  }),
  new Product({
      _id: 2,
      name: 'Product 2',
      price: 33.56,
    }
  ),
  new Product({
      _id: 3,
      name: 'Product 3',
      price: 2.22,
    }
  )
];
