import { Router } from 'express';

import { isEntityExistsNew } from '../../utils/isEntityExistsNew';

import { deleteProduct, getProduct, getProducts, postProduct, putProduct } from './products.controllers';
import Product from './product.model';

const productsRouts = Router();

productsRouts.route('/')
.get(getProducts)
.post(postProduct);

productsRouts.use('/:id', isEntityExistsNew(Product, 'id'));

productsRouts.route('/:id')
.get(getProduct)
.put(putProduct)
.delete(deleteProduct);

export default productsRouts;
