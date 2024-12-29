import express from 'express';

const app = express();

console.log('Server is starting');

app.listen(8800, () => {
  console.log('Server is running');
});