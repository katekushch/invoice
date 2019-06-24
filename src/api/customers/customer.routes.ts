import {Router} from 'express';
import { getCustomers, postCustomers } from './customer.controllers';

const customersRouts = Router();

customersRouts.get('/', getCustomers);
customersRouts.post('/', postCustomers);

export default customersRouts;
