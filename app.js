const express = require('express');
const app = express();
const port = 5000;
const fs = require('fs');
app.get('/', (req, res) => {
  res.send('Hello From the server');
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours,
    },
  });
});

app.listen(port, () => {
  console.log(`app is runnning on port ${port}`);
});
