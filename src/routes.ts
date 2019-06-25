import { createError } from './utils/createError';
import customersRouts from './api/customers/customers.routes';
import productsRouts from './api/products/products.routes';

export function initRouts(app) {
  app.use('/customers', customersRouts);
  app.use('/products', productsRouts);

  // All undefined routes should return a 404
  app.route('/*').get((req, res) => {
    res.status(404).send(createError(404, 'Page not found'));
  });

  app.use((err, req, res, next) => {
    res.status(500).send(createError(500, 'Server error'))
  })
}

