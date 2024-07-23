const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');
// / const { Schema } = mongoose;

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
