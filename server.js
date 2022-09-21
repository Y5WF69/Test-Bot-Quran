const app = require('express')();

app.get('/', (req, res) => res.send('Suger - He '));

module.exports = () => {
  app.listen(3000);
}