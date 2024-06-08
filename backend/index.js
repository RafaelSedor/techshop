const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const productRoutes = require('./routes/product');

const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://techshop.com.br:3001',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the CRUD API');
});

db.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => {
  console.log('Error: ', err);
});
