// index.js
import express from 'express';
import cron from 'node-cron';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors'; // Import CORS middleware
import { fetchAndStoreCryptoData } from './cryptoJob.js';
import { connectToDatabase } from './database.js';
import routes from './routes/routes.js'; // Import the routes


const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for localhost:3001
app.use(cors({
  origin: 'http://localhost:3001', // Allow only this origin
}));

// Connect to the database
connectToDatabase();

// Schedule the background job to run every 2 hours
cron.schedule('0 */2 * * *', async () => {
  console.log('Running background job to fetch crypto data');
  await fetchAndStoreCryptoData();
});

// Use routes from routes.js
app.use('/api', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
