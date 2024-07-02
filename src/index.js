const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/foo',(req,res) => {
  res.send('This is page one');
})

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});