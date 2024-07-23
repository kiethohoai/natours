const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// config .env
dotenv.config({ path: './config.env' });

// Connect to DB
const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connection successfully'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
