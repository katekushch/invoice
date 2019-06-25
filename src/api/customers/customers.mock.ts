import { CustomerInterface } from './customer.interface';
import { Customer } from './customers.model';

export const customers: CustomerInterface[] = [
  new Customer(  {
    _id: 1,
    name: 'Customer 1',
    address: 'Address 1',
    phone: '123456',
  }),
];
