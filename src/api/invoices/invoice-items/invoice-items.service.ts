import { invoiceItems } from './invoice-items.mock';
import { InvoiceItems } from './invoice-items.model';

export function getInvoiceItemsFromBD(invoiceId) {
  const currentInvoiceItems = invoiceItems.filter((invoiceItem) => invoiceItem.invoice_id === Number(invoiceId));
  return Promise.resolve(currentInvoiceItems);
}

export function addInvoiceItemToDB(invoiceItem) {
  invoiceItem._id = invoiceItems.length ? invoiceItems[invoiceItems.length - 1]._id + 1 : 1;
  const createdItem = new InvoiceItems(invoiceItem);
  invoiceItems.push(createdItem);
  return Promise.resolve(createdItem);
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
  const removedItem = invoiceItems[invoiceItemIndex];
  invoiceItems.splice(invoiceItemIndex, 1);
  return Promise.resolve(removedItem);
}
