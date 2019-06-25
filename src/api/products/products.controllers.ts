import { CustomError } from '../../models/custom-error.model';

import {
  addProductToDB,
  deleteProductFromDB,
  getProductFromDB,
  getProductsFromBD,
  updateProductInDB
} from './products.service';

export function getProducts(req, res, next) {
  getProductsFromBD()
  .then((products) => res.json(products))
  .catch((err: CustomError) => res.status(err.status).json(err))
}

export function postProduct(req, res, next) {
  const newProduct = req.body;
  addProductToDB(newProduct)
  .then((response) => res.send(response))
  .catch((err: CustomError) => res.status(500).json(err))
}

export function getProduct(req, res, next) {
  const productId = req.params.id;
  getProductFromDB(productId)
  .then((product) => res.json(product))
  .catch((err: CustomError) => res.status(404).json(err))
}

export function putProduct(req, res, next) {
  const updatedProduct = req.body;
  const productId = req.params.id;
  updateProductInDB(productId, updatedProduct)
  .then((product) => res.json(product))
  .catch((err: CustomError) => res.status(404).json(err))
}

export function deleteProduct(req, res, next) {
  const productId = req.params.id;
  deleteProductFromDB(productId)
  .then((response) => res.send(response))
  .catch((err: CustomError) => res.status(404).json(err))
}

