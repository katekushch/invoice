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

export function getProductFromDB(id) {
  const foundedProduct = products.find((product) => product._id === Number(id));
  if (foundedProduct) {
    return Promise.resolve(foundedProduct);
  } else {
    return Promise.reject(createError(404, 'Product not found!'));
  }
}

export function updateProductInDB(id, updatedOptions) {
  const productIndex = products.findIndex((product) => product._id === Number(id));
  if (productIndex === -1) {
    return Promise.reject(createError(404, 'Product not found!'));
  } else {
    const updatedProduct = new Product({...products[productIndex], ...updatedOptions});
    products[productIndex] = updatedProduct;
    return Promise.resolve(updatedProduct);
  }
}

export function deleteProductFromDB(id) {
  const productIndex = products.findIndex((product) => product._id === Number(id));
  if (productIndex === -1) {
    return Promise.reject(createError(404, 'Product not found!'));
  } else {
    products.splice(productIndex, 1);
    return Promise.resolve('Product removed');
  }
}
