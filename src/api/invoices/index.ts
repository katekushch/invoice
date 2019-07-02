import { Router } from 'express';

import { isEntityExistsNew } from '../../utils/isEntityExistsNew';

import { deleteInvoice, getInvoice, getInvoices, postInvoices, putInvoice } from './invoices.controllers';
import invoiceItemsRouts from './invoice-items';
import Invoice from './invoice.model';

const invoicesRouts = Router({mergeParams: true});

invoicesRouts.route('/')
.get(getInvoices)
.post(postInvoices);

invoicesRouts.use('/:id', isEntityExistsNew(Invoice, 'id'));

invoicesRouts.route('/:id')
.get(getInvoice)
.put(putInvoice)
.delete(deleteInvoice);

invoicesRouts.use('/:invoice_id', isEntityExistsNew(Invoice, 'invoice_id'));
invoicesRouts.use('/:invoice_id/items', invoiceItemsRouts);

export default invoicesRouts;
