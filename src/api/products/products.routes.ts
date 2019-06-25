import {Router} from 'express';
import { deleteProduct, getProduct, getProducts, postProduct, putProduct } from './products.controllers';

const productsRouts = Router();

productsRouts.get('/', getProducts);
productsRouts.post('/', postProduct);
productsRouts.get('/:id', getProduct);
productsRouts.put('/:id', putProduct);
productsRouts.delete('/:id', deleteProduct);

export default productsRouts;
