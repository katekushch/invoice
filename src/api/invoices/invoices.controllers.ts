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
  const invoiceIndex = req.entityIndex;
  getInvoiceFromDB(invoiceIndex)
  .then((invoice) => res.json(invoice))
  .catch(next)
}

export function putInvoice(req, res, next) {
  const updatedOptions: Partial<InvoiceInterface> = req.body;
  const invoiceIndex = req.entityIndex;
  updateInvoiceInDB(invoiceIndex, updatedOptions)
  .then((invoice) => res.json(invoice))
  .catch(next)
}

export function deleteInvoice(req, res, next) {
  const invoiceIndex = req.entityIndex;
  const invoiceId = Number(req.params.id);
  deleteInvoiceFromDB(invoiceIndex, invoiceId)
  .then((response) => res.status(204).send(response))
  .catch(next)
}

