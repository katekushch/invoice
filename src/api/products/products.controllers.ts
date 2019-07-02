import {
  addProductToDB,
  deleteProductFromDB,
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
  .then((response) => res.status(201).send(response))
  .catch(next)
}

export function getProduct(req, res, next) {
  res.send(req.entity);
}

export function putProduct(req, res, next) {
  const updatedOptions: Partial<ProductInterface> = req.body;
  updateProductInDB(req.params.id, updatedOptions)
  .then((product) => res.json(product))
  .catch(next)
}

export function deleteProduct(req, res, next) {
  deleteProductFromDB(req.params.id)
  .then((response) => res.send(response))
  .catch(next)
}

