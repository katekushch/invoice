import InvoiceItem from './invoice-item.model';

export function getInvoiceItemsFromBD(invoiceId) {
  return InvoiceItem.find({invoice_id: invoiceId});
}

export function addInvoiceItemToDB(invoiceItem) {
  const newEntity = new InvoiceItem(invoiceItem);
  return newEntity.save();
}

export function updateInvoiceItemInDB(invoiceItemId, updatedOptions) {
  return InvoiceItem.findByIdAndUpdate(invoiceItemId, updatedOptions, {new: true});
}

export function deleteInvoiceItemFromDB(invoiceItemId) {
  return InvoiceItem.findByIdAndRemove(invoiceItemId);
}
