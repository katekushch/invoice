import { createError } from '../../utils/createError';

import { invoices } from './invoices.mock';
import { Invoice } from './invoice.model';
import { invoiceItems } from './invoice-items/invoice-items.mock';
import { InvoiceItems } from './invoice-items/invoice-items.model';

export function getInvoicesFromBD() {
  return Promise.resolve(invoices)
}

export function addInvoiceToDB(invoice) {
  invoice._id = invoices.length + 1;
  invoices.push(new Invoice(invoice));
  if (invoice.items) {
    invoice.items.map((invoiceItem) => {
      invoiceItem.invoice_id = invoice._id;
      invoiceItem._id = invoiceItems.length + 1;
      invoiceItems.push(new InvoiceItems(invoiceItem));
    });
  }
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
    if (updatedOptions.items) {
      updatedOptions.items.map((invoiceItem) => {
        const foundedItem = invoiceItems.findIndex((item) => item._id === invoiceItem._id);
        invoiceItems[foundedItem] = {...invoiceItems[foundedItem], ...invoiceItem}
      });
    }
    invoices[invoiceIndex] = updatedInvoice;
    return Promise.resolve(updatedInvoice);
  }
}

export function deleteInvoiceFromDB(id) {
  const invoiceIndex = invoices.findIndex((invoice) => invoice._id === Number(id));
  if (invoiceIndex === -1) {
    return Promise.reject(createError(404, 'Invoice not found!'));
  } else {
    const filteredItems = invoiceItems.filter((invoiceItem) => invoiceItem.invoice_id === Number(id)) || [];
    filteredItems.map((item) => {
      const index = invoiceItems.findIndex((invoiceItem) => invoiceItem._id === item._id);
      invoiceItems.splice(index, 1);
    });
    invoices.splice(invoiceIndex, 1);
    return Promise.resolve('Invoice removed');
  }
}
