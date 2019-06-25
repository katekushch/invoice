import customersRouts from './api/customers/customers.routes';
import { createError } from './utils/createError';

export function initRouts(app) {
  app.use('/customers', customersRouts);

  // All undefined routes should return a 404
  app.route('/*').get((req, res) => {
    res.status(404).send(createError(404, 'Page not found'));
  });

  app.use((err, req, res, next) => {
    res.status(500).send(createError(500, 'Server error'))
  })
}

