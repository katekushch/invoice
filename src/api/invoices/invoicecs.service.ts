import Invoice from './invoice.model';
import InvoiceItem from './invoice-items/invoice-item.model';

export function getInvoicesFromBD() {
  return Invoice.find();
}

export function addInvoiceToDB(invoice) {
  const newEntity = new Invoice(invoice);
  invoice.items.map((invoiceItem) => {
    invoiceItem.invoice_id = newEntity._id;
    const newInvoiceItem = new InvoiceItem(invoiceItem);
    newInvoiceItem.save();
  });

  return newEntity.save();
}

export function updateInvoiceInDB(invoiceId, updatedOptions) {
  return Invoice.findByIdAndUpdate(invoiceId, updatedOptions, {new: true});
}

export function deleteInvoiceFromDB(invoiceId) {
  return Invoice.findByIdAndRemove(invoiceId);
}
