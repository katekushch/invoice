const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;

export function initServer(app) {
  app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
}
