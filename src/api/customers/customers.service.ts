import { customers } from './customers.mock';
import { Customer } from './customers.model';

export function getCustomersFromBD() {
  return Promise.resolve(customers)
}

export function addCustomerToDB(customer) {
  customer._id = customers.length + 1;
  const createdCustomer = new Customer(customer);
  customers.push(createdCustomer);
  return Promise.resolve(createdCustomer);
}

export function getCustomerFromDB(customerIndex) {
  return Promise.resolve(customers[customerIndex]);
}

export function updateCustomerInDB(customerIndex, updatedOptions) {
  const updatedCustomer = new Customer({...customers[customerIndex], ...updatedOptions});
  customers[customerIndex] = updatedCustomer;
  return Promise.resolve(updatedCustomer);
}

export function deleteCustomerFromDB(customerIndex) {
  const removedCustomer = customers[customerIndex];
  customers.splice(customerIndex, 1);
  return Promise.resolve(removedCustomer);
}
