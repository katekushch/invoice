import {Router} from 'express';

import {
  deleteInvoiceItem,
  getInvoiceItem,
  getInvoiceItems,
  postInvoiceItem,
  putInvoiceItem
} from './invoice-items.controllers';
import { isEntityExistsNew } from '../../../utils/isEntityExistsNew';
import InvoiceItem from './invoice-item.model';

const invoiceItemsRouts = Router({mergeParams: true});

invoiceItemsRouts.route('/')
.get(getInvoiceItems)
.post(postInvoiceItem);

invoiceItemsRouts.use('/:id', isEntityExistsNew(InvoiceItem, 'id'));
invoiceItemsRouts.route('/:id')
.get(getInvoiceItem)
.put(putInvoiceItem)
.delete(deleteInvoiceItem);

export default invoiceItemsRouts;
