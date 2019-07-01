import { Router } from 'express';

import { isEntityExists } from '../../utils/isEntityExists';

import { deleteInvoice, getInvoice, getInvoices, postInvoices, putInvoice } from './invoices.controllers';
import invoiceItemsRouts from './invoice-items/invoice-items.routes';
import { invoices } from './invoices.mock';

const invoicesRouts = Router({mergeParams: true});

invoicesRouts.route('/')
.get(getInvoices)
.post(postInvoices);

invoicesRouts.use('/:id', isEntityExists(invoices, 'id'));

invoicesRouts.route('/:id')
.get(getInvoice)
.put(putInvoice)
.delete(deleteInvoice);

invoicesRouts.use('/:invoice_id', isEntityExists(invoices, 'invoice_id'));
invoicesRouts.use('/:invoice_id/items', invoiceItemsRouts);

export default invoicesRouts;
