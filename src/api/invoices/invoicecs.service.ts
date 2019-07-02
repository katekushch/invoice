import Invoice from './invoice.model';

export function getInvoicesFromBD() {
  return Invoice.find();
}

export function addInvoiceToDB(invoice) {
  const newEntity = new Invoice(invoice);
  return newEntity.save();
}

export function updateInvoiceInDB(invoiceId, updatedOptions) {
  return Invoice.findByIdAndUpdate(invoiceId, updatedOptions, {new: true});
}

export function deleteInvoiceFromDB(invoiceId) {
  return Invoice.findByIdAndRemove(invoiceId);
}
