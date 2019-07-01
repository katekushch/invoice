import {
  addInvoiceToDB,
  deleteInvoiceFromDB,
  getInvoiceFromDB,
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
  getInvoiceFromDB(req.entityIndex)
  .then((invoice) => res.json(invoice))
  .catch(next)
}

export function putInvoice(req, res, next) {
  const updatedOptions: Partial<InvoiceInterface> = req.body;
  updateInvoiceInDB(req.entityIndex, updatedOptions)
  .then((invoice) => res.json(invoice))
  .catch(next)
}

export function deleteInvoice(req, res, next) {
  const invoiceId = Number(req.params.id);
  deleteInvoiceFromDB(req.entityIndex, invoiceId)
  .then((response) => res.send(response))
  .catch(next)
}

