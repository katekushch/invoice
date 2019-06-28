import {Router} from 'express';

import { isEntityExists } from '../../utils/isEntityExists';

import invoicesRouts from '../invoices/invoices.routes';

import { customers } from './customers.mock';
import { deleteCustomer, getCustomer, getCustomers, postCustomers, putCustomer } from './customers.controllers';

const customersRouts = Router();

customersRouts.route('/')
.get(getCustomers)
.post(postCustomers);

invoicesRouts.use('/:id', isEntityExists(customers, 'id'));

customersRouts.route('/:id')
.get(getCustomer)
.put(putCustomer)
.delete(deleteCustomer);

export default customersRouts;
