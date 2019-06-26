import { createError } from '../../utils/createError';

import { invoices } from './invoices.mock';
import { Invoice } from './invoice.model';

export function getInvoicesFromBD() {
  return Promise.resolve(invoices)
}

export function addInvoiceToDB(invoice) {
  invoice._id = invoices.length + 1;
  invoices.push(new Invoice(invoice));
  return Promise.resolve('Success added');
}

export function getInvoiceFromDB(id) {
  const foundedInvoice = invoices.find((invoice) => invoice._id === Number(id));
  if (foundedInvoice) {
    return Promise.resolve(foundedInvoice);
  } else {
    return Promise.reject(createError(404, 'Invoice not found!'));
  }
}

export function updateInvoiceInDB(id, updatedOptions) {
  const invoiceIndex = invoices.findIndex((invoice) => invoice._id === Number(id));
  if (invoiceIndex === -1) {
    return Promise.reject(createError(404, 'Invoice not found!'));
  } else {
    const updatedInvoice = new Invoice({...invoices[invoiceIndex], ...updatedOptions});
    invoices[invoiceIndex] = updatedInvoice;
    return Promise.resolve(updatedInvoice);
  }
}

export function deleteInvoiceFromDB(id) {
  const invoiceIndex = invoices.findIndex((invoice) => invoice._id === Number(id));
  if (invoiceIndex === -1) {
    return Promise.reject(createError(404, 'Invoice not found!'));
  } else {
    invoices.splice(invoiceIndex, 1);
    return Promise.resolve('Invoice removed');
  }
}
