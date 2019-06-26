import { createError } from '../../../utils/createError';

import { invoiceItems } from './invoice-items.mock';
import { InvoiceItems } from './invoice-items.model';

export function getInvoiceItemsFromBD(invoiceId) {
  const currentInvoiceItems = invoiceItems.filter((invoiceItem) => invoiceItem.invoice_id === Number(invoiceId));
  return Promise.resolve(currentInvoiceItems);
}

export function addInvoiceItemToDB(invoiceItem) {
  invoiceItem._id = invoiceItems.length + 1;
  invoiceItems.push(new InvoiceItems(invoiceItem));
  return Promise.resolve('Success added');
}

export function getInvoiceItemFromDB(id) {
  const foundedInvoiceItem = invoiceItems.find((invoiceItem) => invoiceItem._id === Number(id));
  if (foundedInvoiceItem) {
    return Promise.resolve(foundedInvoiceItem);
  } else {
    return Promise.reject(createError(404, 'Invoice item not found!'));
  }
}

export function updateInvoiceItemInDB(id, updatedOptions) {
  const invoiceItemIndex = invoiceItems.findIndex((invoiceItem) => invoiceItem._id === Number(id));
  if (invoiceItemIndex === -1) {
    return Promise.reject(createError(404, 'Invoice item not found!'));
  } else {
    const updatedInvoiceItem = new InvoiceItems({...invoiceItems[invoiceItemIndex], ...updatedOptions});
    invoiceItems[invoiceItemIndex] = updatedInvoiceItem;
    return Promise.resolve(updatedInvoiceItem);
  }
}

export function deleteInvoiceItemFromDB(id) {
  const invoiceItemIndex = invoiceItems.findIndex((invoiceItem) => invoiceItem._id === Number(id));
  if (invoiceItemIndex === -1) {
    return Promise.reject(createError(404, 'Invoice item not found!'));
  } else {
    invoiceItems.splice(invoiceItemIndex, 1);
    return Promise.resolve('Invoice item removed');
  }
}
