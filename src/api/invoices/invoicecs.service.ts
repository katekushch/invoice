import {Promise as BBPromise} from 'bluebird'

import Invoice from './invoice.model';
import InvoiceItem from './invoice-items/invoice-item.model';
import { InvoiceItemInterface } from './invoice-items/invoice-item.interface';

export function getInvoicesFromBD() {
  return Invoice.find();
}

export async function addInvoiceToDB(invoice) {
  const newEntity = new Invoice(invoice);
  await BBPromise.map(invoice.items, (invoiceItem: InvoiceItemInterface) => {
      invoiceItem.invoice_id = newEntity._id;
      const newInvoiceItem = new InvoiceItem(invoiceItem);
      return newInvoiceItem.save();
    });
  return newEntity.save();
}

export function updateInvoiceInDB(invoiceId, updatedOptions) {
  if (updatedOptions.items) {
    updatedOptions.items.map((invoiceItem) => {
      InvoiceItem.findOneAndUpdate({invoice_id: invoiceId}, invoiceItem, {new: true});
    });
  }
  return Invoice.findByIdAndUpdate(invoiceId, updatedOptions, {new: true});
}

export function deleteInvoiceFromDB(invoice) {
  return invoice.remove();
}
