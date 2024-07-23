const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const Tour = require('./../../models/tourModel');

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

// READ JSON FILE
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));

// IMPORT DATA INTO DATABASE
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully loaded!');
  } catch (error) {
    console.log('🚀CHECK  error =', error);
  }
  process.exit();
};

// DELETE ALL DATA FROM COLLECTION (DB)
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data delete successfully!');
  } catch (error) {
    console.log('🚀CHECK  error =', error);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
