import {Router} from 'express';

import { isEntityExists } from '../../../utils/isEntityExists';

import {
  deleteInvoiceItem,
  getInvoiceItem,
  getInvoiceItems,
  postInvoiceItem,
  putInvoiceItem
} from './invoice-items.controllers';
import { invoiceItems } from './invoice-items.mock';

const invoiceItemsRouts = Router({mergeParams: true});

invoiceItemsRouts.route('/')
.get(getInvoiceItems)
.post(postInvoiceItem);

invoiceItemsRouts.use('/:id', isEntityExists(invoiceItems, 'id'));
invoiceItemsRouts.route('/:id')
.get(getInvoiceItem)
.put(putInvoiceItem)
.delete(deleteInvoiceItem);

export default invoiceItemsRouts;
