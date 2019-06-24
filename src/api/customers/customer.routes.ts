import {Router} from 'express';
import { getCustomer, getCustomers, postCustomers } from './customer.controllers';

const customersRouts = Router();

customersRouts.get('/', getCustomers);
customersRouts.post('/', postCustomers);
customersRouts.get('/:id', getCustomer);

export default customersRouts;
