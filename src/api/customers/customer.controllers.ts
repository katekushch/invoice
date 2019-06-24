import { addCustomerToDB, getCustomerFromDB, getCustomersFromBD } from './customer.service';

export function getCustomers(req, res, next) {
  getCustomersFromBD()
  .then((customers) => res.json(customers))
  .catch((err) => res.status(500).json({message: err.message}))
}

export function postCustomers(req, res, next) {
  const newCustomer = req.body;
  addCustomerToDB(newCustomer)
  .then((response) => res.send(response))
  .catch((err) => res.status(500).json({message: err.message}))
}

export function getCustomer(req, res, next) {
  const customerId = req.params.id;
  getCustomerFromDB(customerId)
  .then((customer) => res.json(customer))
  .catch((err) => res.status(404).json({message: 'customer not found'}))
}

