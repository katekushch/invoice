import {Router} from 'express';

import { isEntityExistsNew } from '../../utils/isEntityExistsNew';

import { deleteCustomer, getCustomer, getCustomers, postCustomers, putCustomer } from './customers.controllers';
import Customer from './customer.model';

const customersRouts = Router();

customersRouts.route('/')
.get(getCustomers)
.post(postCustomers);

customersRouts.use('/:id', isEntityExistsNew(Customer, 'id'));

customersRouts.route('/:id')
.get(getCustomer)
.put(putCustomer)
.delete(deleteCustomer);

export default customersRouts;
