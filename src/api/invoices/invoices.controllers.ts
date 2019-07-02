import {
  addInvoiceToDB,
  deleteInvoiceFromDB,
  getInvoicesFromBD,
  updateInvoiceInDB
} from './invoicecs.service';
import { InvoiceInterface } from './invoice.interface';

export function getInvoices(req, res, next) {
  getInvoicesFromBD()
  .then((invoices) => res.json(invoices))
  .catch(next)
}

export function postInvoices(req, res, next) {
  const newInvoice: InvoiceInterface = req.body;
  addInvoiceToDB(newInvoice)
  .then((response) => res.status(201).send(response))
  .catch(next)
}

export function getInvoice(req, res, next) {
  res.send(req.entity);
}

export function putInvoice(req, res, next) {
  const updatedOptions: Partial<InvoiceInterface> = req.body;
  updateInvoiceInDB(req.params.id, updatedOptions)
  .then((invoice) => res.json(invoice))
  .catch(next)
}

export function deleteInvoice(req, res, next) {
  deleteInvoiceFromDB(req.params.id)
  .then((response) => res.send(response))
  .catch(next)
}

