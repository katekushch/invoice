import { addCustomerToDB, getCustomersFromBD } from './customer.service';

export function getCustomers(req, res, next) {
  getCustomersFromBD()
  .then((customers) => res.json(customers))
  .catch((err) => res.status(500).json({message: err.message}))
}

export function postCustomers(req, res, next) {
  addCustomerToDB(req)
  .then((response) => res.send(response))
  .catch((err) => res.status(500).json({message: err.message}))
}
