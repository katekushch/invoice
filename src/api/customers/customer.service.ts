import { customers } from './customer.model';

export function getCustomersFromBD() {
  return Promise.resolve(customers)
}

export function addCustomerToDB(req) {
  const newCustomer = req.body;
  customers.push(newCustomer);
  return Promise.resolve('Success added');
}
