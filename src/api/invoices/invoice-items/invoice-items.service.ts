import InvoiceItem from './invoice-item.model';

export async function getInvoiceItemsFromBD(invoiceId) {
  return await InvoiceItem.find({invoice_id: invoiceId}).populate('product_id');
}

export async function getInvoiceItemFromDB(invoiceItemId) {
  return await InvoiceItem.findById(invoiceItemId).populate('product_id');
}

export function addInvoiceItemToDB(invoiceItem) {
  const newEntity = new InvoiceItem(invoiceItem);
  return newEntity.save();
}

export function updateInvoiceItemInDB(invoiceItemId, updatedOptions) {
  return InvoiceItem.findByIdAndUpdate(invoiceItemId, updatedOptions, {new: true, runValidators: true});
}

export function deleteInvoiceItemFromDB(invoiceItemId) {
  return InvoiceItem.findByIdAndRemove(invoiceItemId);
}
