import {
  addInvoiceItemToDB,
  deleteInvoiceItemFromDB,
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
  const newInvoiceItem: InvoiceItemInterface = req.body;
  newInvoiceItem.invoice_id = req.params.invoice_id;
  addInvoiceItemToDB(newInvoiceItem)
  .then((response) => res.status(201).send(response))
  .catch(next)
}

export function getInvoiceItem(req, res, next) {
  res.send(req.entity);
}

export function putInvoiceItem(req, res, next) {
  const updatedOptions: Partial<InvoiceItemInterface> = req.body;
  updateInvoiceItemInDB(req.params.id, updatedOptions)
  .then((invoiceItem) => res.json(invoiceItem))
  .catch(next)
}

export function deleteInvoiceItem(req, res, next) {
  deleteInvoiceItemFromDB(req.params.id)
  .then((response) => res.send(response))
  .catch(next)
}
