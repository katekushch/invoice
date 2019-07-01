import { createError } from './utils/createError';
import customersRouts from './api/customers';
import productsRouts from './api/products';
import invoicesRouts from './api/invoices/invoices.routes';

export function initRouts(app) {
  app.use('/customers', customersRouts);
  app.use('/products', productsRouts);
  app.use('/invoices', invoicesRouts);

  // All undefined routes should return a 404
  app.route('/*').get((req, res) => {
    res.status(404).send(createError(404, 'Not existed endpoint'));
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500).send(createError(err.status || 500, err.message || 'Server error'))
  });
}

