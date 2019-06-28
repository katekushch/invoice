import { createError } from '../../utils/createError';

import { products } from './products.mock';
import { Product } from './products.model';

export function getProductsFromBD() {
  return Promise.resolve(products)
}

export function addProductToDB(product) {
  product._id = products.length + 1;
  products.push(new Product(product));
  return Promise.resolve('Success added');
}

export function getProductFromDB(productIndex) {
  return Promise.resolve(products[productIndex]);
}

export function updateProductInDB(productIndex, updatedOptions) {
  const updatedProduct = new Product({...products[productIndex], ...updatedOptions});
  products[productIndex] = updatedProduct;
  return Promise.resolve(updatedProduct);
}

export function deleteProductFromDB(productIndex) {
  products.splice(productIndex, 1);
  return Promise.resolve('Product removed');
}
