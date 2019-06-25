import { createError } from '../../utils/createError';

import { customers } from './customers.mock';
import { Customer } from './customers.model';

export function getCustomersFromBD() {
  return Promise.resolve(customers)
}

export function addCustomerToDB(customer) {
  const foundedCustomer = customers.find((customer) => customer._id === Number(customer._id));
  if (foundedCustomer) {
    return Promise.reject(createError(400, 'Customer already exists'));
  } else {
    customers.push(new Customer(customer));
    return Promise.resolve('Success added');
  }
}

export function getCustomerFromDB(id) {
  const foundedCustomer = customers.find((customer) => customer._id === Number(id));
  if (foundedCustomer) {
    return Promise.resolve(foundedCustomer);
  } else {
    return Promise.reject(createError(404, 'Customer not found!'));
  }
}

export function updateCustomerInDB(id, updatedOptions) {
  const customerIndex = customers.findIndex((customer) => customer._id === Number(id));
  if (customerIndex === -1) {
    return Promise.reject(createError(404, 'Customer not found!'));
  } else {
    const updatedCustomer = new Customer({...customers[customerIndex], ...updatedOptions});
    customers[customerIndex] = updatedCustomer;
    return Promise.resolve(updatedCustomer);
  }
}

export function deleteCustomerFromDB(id) {
  const customerIndex = customers.findIndex((customer) => customer._id === Number(id));
  if (customerIndex === -1) {
    return Promise.reject(createError(404, 'Customer not found!'));
  } else {
    customers.splice(customerIndex, 1);
    return Promise.resolve('Customer removed');
  }
}
