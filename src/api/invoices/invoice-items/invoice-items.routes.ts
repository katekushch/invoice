import {Router} from 'express';

import {
  deleteInvoiceItem,
  getInvoiceItem,
  getInvoiceItems,
  postInvoiceItem,
  putInvoiceItem
} from './invoice-items.controllers';

const invoiceItemsRouts = Router({mergeParams: true});

invoiceItemsRouts.get('/', getInvoiceItems);
invoiceItemsRouts.post('/', postInvoiceItem);
invoiceItemsRouts.get('/:id', getInvoiceItem);
invoiceItemsRouts.put('/:id', putInvoiceItem);
invoiceItemsRouts.delete('/:id', deleteInvoiceItem);

export default invoiceItemsRouts;
