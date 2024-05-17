import express from 'express';
import { connectMongoDB } from './src/config/mongoConfig';

const app = express();
const PORT = process.env.PORT || 8000;

// connect mongoDB
connectMongoDB();

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is runnig at http://localhost:${PORT}`);
});
