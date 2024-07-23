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

// Defined Schema
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'A tour must have a name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    require: [true, 'A tour must have a price'],
  },
});

// Create a modal
const Tour = mongoose.model('Tour', tourSchema);

// Create document
const testTour = new Tour({
  name: 'Hai Van Pass',
  rating: 4.9,
  price: 100,
});

testTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log('ERROR :', err);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
