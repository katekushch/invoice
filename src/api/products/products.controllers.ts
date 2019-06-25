import {
  addProductToDB,
  deleteProductFromDB,
  getProductFromDB,
  getProductsFromBD,
  updateProductInDB
} from './products.service';
import { ProductInterface } from './product.interface';

export function getProducts(req, res, next) {
  getProductsFromBD()
  .then((products) => res.json(products))
  .catch(next)
}

export function postProduct(req, res, next) {
  const newProduct: ProductInterface = req.body;
  addProductToDB(newProduct)
  .then((response) => res.send(response))
  .catch(next)
}

export function getProduct(req, res, next) {
  const productId = req.params.id;
  getProductFromDB(productId)
  .then((product) => res.json(product))
  .catch(next)
}

export function putProduct(req, res, next) {
  const updatedOptions: Partial<ProductInterface> = req.body;
  const productId = req.params.id;
  updateProductInDB(productId, updatedOptions)
  .then((product) => res.json(product))
  .catch(next)
}

export function deleteProduct(req, res, next) {
  const productId = req.params.id;
  deleteProductFromDB(productId)
  .then((response) => res.send(response))
  .catch(next)
}

