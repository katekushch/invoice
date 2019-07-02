import {
  addCustomerToDB,
  deleteCustomerFromDB,
  getCustomersFromBD,
  updateCustomerInDB
} from './customers.service';
import { CustomerInterface } from './customer.interface';

export function getCustomers(req, res, next) {
  getCustomersFromBD()
  .then((customers) => res.json(customers))
  .catch(next)
}

export function postCustomers(req, res, next) {
  const newCustomer: CustomerInterface = req.body;
  addCustomerToDB(newCustomer)
  .then((response) => res.status(201).send(response))
  .catch(next)
}

export function getCustomer(req, res, next) {
  res.send(req.entity);
}

export function putCustomer(req, res, next) {
  const updatedOptions: Partial<CustomerInterface> = req.body;
  updateCustomerInDB(req.params.id, updatedOptions)
  .then((customer) => res.json(customer))
  .catch(next)
}

export function deleteCustomer(req, res, next) {
  deleteCustomerFromDB(req.params.id)
  .then((response) => res.send(response))
  .catch(next)
}

