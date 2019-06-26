import {Router} from 'express';

import { deleteInvoice, getInvoice, getInvoices, postInvoices, putInvoice } from './invoices.controllers';
import invoiceItemsRouts from './invoice-items/invoice-items.routes';

const invoicesRouts = Router({mergeParams: true});

invoicesRouts.get('/', getInvoices);
invoicesRouts.post('/', postInvoices);
invoicesRouts.get('/:id', getInvoice);
invoicesRouts.put('/:id', putInvoice);
invoicesRouts.delete('/:id', deleteInvoice);
invoicesRouts.use('/:invoice_id/items', invoiceItemsRouts);

export default invoicesRouts;
