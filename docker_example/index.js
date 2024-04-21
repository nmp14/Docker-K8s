import express from 'express';
import connectToDatabase from './helpers.js';

const app = express();
const port = 44361;

app.get('/', (req, res) => {
  res.send('<h2 style="color: crimson">Hi there!!</h2>')
});

await connectToDatabase();

app.listen(port, () => console.log(`Listening on port ${port}`));