import {
  addInvoiceItemToDB,
  deleteInvoiceItemFromDB,
  getInvoiceItemFromDB,
  getInvoiceItemsFromBD,
  updateInvoiceItemInDB
} from './invoice-items.service';
import { InvoiceItemInterface } from './invoice-item.interface';

export function getInvoiceItems(req, res, next) {
  const invoiceId = req.params.invoice_id;
  getInvoiceItemsFromBD(invoiceId)
  .then((invoiceItems) => res.json(invoiceItems))
  .catch(next)
}

export function postInvoiceItem(req, res, next) {
  const invoiceId = req.params.invoice_id;
  const newInvoiceItem: InvoiceItemInterface = req.body;
  newInvoiceItem.invoice_id = Number(invoiceId);
  addInvoiceItemToDB(newInvoiceItem)
  .then((response) => res.status(201).send(response))
  .catch(next)
}

export function getInvoiceItem(req, res, next) {
  const invoiceItemId = req.params.id;
  getInvoiceItemFromDB(invoiceItemId)
  .then((invoiceItem) => res.json(invoiceItem))
  .catch(next)
}

export function putInvoiceItem(req, res, next) {
  const updatedOptions: Partial<InvoiceItemInterface> = req.body;
  const invoiceItemId = req.params.id;
  updateInvoiceItemInDB(invoiceItemId, updatedOptions)
  .then((invoiceItem) => res.json(invoiceItem))
  .catch(next)
}

export function deleteInvoiceItem(req, res, next) {
  const invoiceItemId = req.params.id;
  deleteInvoiceItemFromDB(invoiceItemId)
  .then((response) => res.status(204).send(response))
  .catch(next)
}