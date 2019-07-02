import Product from './product.model';

export function getProductsFromBD() {
  return Product.find();
}

export function addProductToDB(product) {
  const newEntity = new Product(product);
  return newEntity.save();
}

export function updateProductInDB(productId, updatedOptions) {
  return Product.findByIdAndUpdate(productId, updatedOptions, {new: true});
}

export function deleteProductFromDB(productId) {
  return Product.findByIdAndRemove(productId);
}
