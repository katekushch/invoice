import { customers } from './customer.model';

export function getCustomersFromBD() {
  return Promise.resolve(customers)
}

export function addCustomerToDB(customer) {
  customers.push(customer);
  return Promise.resolve('Success added');
}

export function getCustomerFromDB(id) {
  const foundedCustomer = customers.find((customer) => customer._id === Number(id));
  if (foundedCustomer) {
    return Promise.resolve(foundedCustomer);
  } else {
    return Promise.reject('Customer not found!');
  }
}

export function updateCustomerInDB(id, updatedCustomer) {
  const customerIndex = customers.findIndex((customer) => customer._id === Number(id));
     if (customerIndex === -1) {
       return Promise.reject('Customer not found!');
     } else {
       customers[customerIndex] = updatedCustomer;
       return Promise.resolve(updatedCustomer);
     }
}
