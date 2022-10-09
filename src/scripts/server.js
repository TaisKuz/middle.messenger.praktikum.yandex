const express = require('express');
const app = express();
const PORT = 3000;
const DIRPATH = 'static';

app.use(express.static(DIRPATH));

app.get('/', (req, res) => {
  res.send('index');
});

app.listen(PORT, () => {
  console.log(`My App is listening to port ${PORT}!`);
});
