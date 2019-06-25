import { CustomError } from '../../models/custom-error.model';

import {
  addCustomerToDB,
  deleteCustomerFromDB,
  getCustomerFromDB,
  getCustomersFromBD,
  updateCustomerInDB
} from './customer.service';

export function getCustomers(req, res, next) {
  getCustomersFromBD()
  .then((customers) => res.json(customers))
  .catch((err: CustomError) => res.status(err.status).json(err))
}

export function postCustomers(req, res, next) {
  const newCustomer = req.body;
  addCustomerToDB(newCustomer)
  .then((response) => res.send(response))
  .catch((err: CustomError) => res.status(500).json(err))
}

export function getCustomer(req, res, next) {
  const customerId = req.params.id;
  getCustomerFromDB(customerId)
  .then((customer) => res.json(customer))
  .catch((err: CustomError) => res.status(404).json(err))
}

export function putCustomer(req, res, next) {
  const updatedCustomer = req.body;
  const customerId = req.params.id;
  updateCustomerInDB(customerId, updatedCustomer)
  .then((customer) => res.json(customer))
  .catch((err: CustomError) => res.status(404).json(err))
}

export function deleteCustomer(req, res, next) {
  const customerId = req.params.id;
  deleteCustomerFromDB(customerId)
  .then((response) => res.send(response))
  .catch((err: CustomError) => res.status(404).json(err))
}

