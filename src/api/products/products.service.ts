import { products } from './products.mock';
import { Product } from './products.model';

export function getProductsFromBD() {
  return Promise.resolve(products)
}

export function addProductToDB(product) {
  product._id = products.length + 1;
  const createdProduct = new Product(product);
  products.push(createdProduct);
  return Promise.resolve(createdProduct);
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
  const deletedProduct = products[productIndex];
  products.splice(productIndex, 1);
  return Promise.resolve(deletedProduct);
}
