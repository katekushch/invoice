import Product from '../../products/product.model';
import InvoiceItem from './invoice-item.model';

export async function getInvoiceItemsFromBD(invoiceId) {
  return await InvoiceItem.find({invoice_id: invoiceId}).populate('product_id');
}

export async function getInvoiceItemFromDB(invoiceItemId) {
  return await InvoiceItem.findById(invoiceItemId).populate('product_id');
}

export async function addInvoiceItemToDB(invoiceItem) {
  const foundedProduct = await Product.findById(invoiceItem.product_id);
  if (foundedProduct) {
    const newEntity = new InvoiceItem(invoiceItem);
    return newEntity.save();
  }
  else {
    throw new Error('Product not found');
  }

}

export function updateInvoiceItemInDB(invoiceItemId, updatedOptions) {
  return InvoiceItem.findByIdAndUpdate(invoiceItemId, updatedOptions, {new: true, runValidators: true});
}

export function deleteInvoiceItemFromDB(invoiceItemId) {
  return InvoiceItem.findByIdAndRemove(invoiceItemId);
}
