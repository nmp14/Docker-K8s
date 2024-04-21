import express from 'express';
import connectToDatabase from './helpers.js';

const app = express();
const port = 44631;

app.get('/', (req, res) => {
  res.send('<h2>Hi there!</h2>')
});

connectToDatabase().then(() => {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}).catch(err => console.error(err));