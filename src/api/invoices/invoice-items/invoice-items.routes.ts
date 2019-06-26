import {Router} from 'express';

import {
  deleteInvoiceItem,
  getInvoiceItem,
  getInvoiceItems,
  postInvoiceItem,
  putInvoiceItem
} from './invoice-items.controllers';
import { invoices } from '../invoices.mock';
import { createError } from '../../../utils/createError';

const invoiceItemsRouts = Router({mergeParams: true});

invoiceItemsRouts.use((req, res, next) => {
  const invoiceId = Number(req.params.invoice_id);
  const foundedInvoice = invoices.find((invoice) => invoice._id === invoiceId);
  if (foundedInvoice) {
    next();
  } else {
    return res.status(404).send(createError(404, 'Invoice not found!'));
  }
});


invoiceItemsRouts.get('/', getInvoiceItems);
invoiceItemsRouts.post('/', postInvoiceItem);
invoiceItemsRouts.get('/:id', getInvoiceItem);
invoiceItemsRouts.put('/:id', putInvoiceItem);
invoiceItemsRouts.delete('/:id', deleteInvoiceItem);

export default invoiceItemsRouts;
