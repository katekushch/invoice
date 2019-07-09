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

export async function updateInvoiceInDB(invoiceId, updatedOptions) {
  await BBPromise.filter(await InvoiceItem.find({}), (item: any) => item.invoice_id.equals(invoiceId))
  .map((invoiceItem: any) => {
    const foundedItem = updatedOptions.items.find((item) => invoiceItem._id.equals(item._id));
    if (foundedItem) {
      return InvoiceItem.findByIdAndUpdate(foundedItem._id, foundedItem, {new: true});
    } else {
      return invoiceItem.remove();
    }
  });
  updatedOptions.items.filter((item) => !item._id).map((invoiceItem) => {
    invoiceItem.invoice_id = invoiceId;
    const newInvoiceItem = new InvoiceItem(invoiceItem);
    return newInvoiceItem.save();
  });
  return Invoice.findByIdAndUpdate(invoiceId, updatedOptions, {new: true});
}

export function deleteInvoiceFromDB(invoice) {
  return invoice.remove();
}
