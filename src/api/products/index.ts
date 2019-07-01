import { Router } from 'express';

import { isEntityExists } from '../../utils/isEntityExists';

import { products } from './products.mock';
import { deleteProduct, getProduct, getProducts, postProduct, putProduct } from './products.controllers';

const productsRouts = Router();

productsRouts.route('/')
.get(getProducts)
.post(postProduct);

productsRouts.use('/:id', isEntityExists(products, 'id'));

productsRouts.route('/:id')
.get(getProduct)
.put(putProduct)
.delete(deleteProduct);

export default productsRouts;
