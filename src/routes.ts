import customersRouts from './api/customers/customer.routes';

export function initRouts(app) {
  app.use('/customers', customersRouts);

  // All undefined routes should return a 404
  app.route('/*').get((req, res) => {
    res.status(404).send('Page not found');
  });

  app.use((err, req, res, next) => {
    res.status(500).send('error')
  })
}


// добавить все роуты
