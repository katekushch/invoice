import {Router} from 'express';
import { getCustomer, getCustomers, postCustomers, putCustomer } from './customer.controllers';

const customersRouts = Router();

customersRouts.get('/', getCustomers);
customersRouts.post('/', postCustomers);
customersRouts.get('/:id', getCustomer);
customersRouts.put('/:id', putCustomer);

export default customersRouts;
