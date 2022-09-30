require('dotenv').config();

const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const port = process.env.PORT || 5000;

const limiter = rateLimit({
  // maximum: 100 reqs in 10 mins
  windowMs: 10 * 60 * 1000,
  max: 100,
});

app.listen(port, console.log(`Server running on port ${port}...`));

app.use(cors());
app.use(limiter);

app.set('trust proxy', 1);

app.use('/api', require('./routes'));
