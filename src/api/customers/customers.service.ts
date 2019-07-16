import Customer from './customer.model';

export function getCustomersFromBD() {
  return Customer.find();
}

export function addCustomerToDB(customer) {
  const newEntity = new Customer(customer);
  return newEntity.save();
}

export function updateCustomerInDB(customerId, updatedOptions) {
  return Customer.findByIdAndUpdate(customerId, updatedOptions, {new: true, runValidators: true });
}

export function deleteCustomerFromDB(customerId) {
  return Customer.findByIdAndRemove(customerId);
}
