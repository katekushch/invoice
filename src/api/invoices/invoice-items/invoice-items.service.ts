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

export function getInvoiceItemFromDB(invoiceItemIndex) {
  return Promise.resolve(invoiceItems[invoiceItemIndex]);
}

export function updateInvoiceItemInDB(invoiceItemIndex, updatedOptions) {
  const updatedInvoiceItem = new InvoiceItems({...invoiceItems[invoiceItemIndex], ...updatedOptions});
  invoiceItems[invoiceItemIndex] = updatedInvoiceItem;
  return Promise.resolve(updatedInvoiceItem);
}

export function deleteInvoiceItemFromDB(invoiceItemIndex) {
  invoiceItems.splice(invoiceItemIndex, 1);
  return Promise.resolve('Invoice item removed');
}
