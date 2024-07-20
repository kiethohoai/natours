const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res
//     .status(404)
//     .json({ message: 'Hello From The Server Side!', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to this endpoint...');
// });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours.json`),
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
