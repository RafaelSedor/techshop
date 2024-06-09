const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const productRoutes = require('./routes/product');
const promClient = require('prom-client');

const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://techshop.com.br:3001',
  optionsSuccessStatus: 200
};

const register = new promClient.Registry();
promClient.collectDefaultMetrics({ register });

const httpRequestDurationMicroseconds = new promClient.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'route', 'code'],
  buckets: [50, 100, 200, 300, 400, 500, 1000]
});

register.registerMetric(httpRequestDurationMicroseconds);

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the CRUD API');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

db.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => {
  console.log('Error: ', err);
});
