const express = require('express');
const app = express();
const port = 5173;

app.get('/', (req, res) => {
  res
    .status(404)
    .json({ message: 'Hello From The Server Side!', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.send('You can post to this endpoint...');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
