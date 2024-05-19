import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables from .env file
dotenv.config({ path: './.env' });

// Print the MongoDB URI to check if it's being loaded correctly
console.log(`MongoDB URI: ${process.env.MONGO_DB}`);

const mongoURI = process.env.MONGO_DB;

if (!mongoURI) {
  throw new Error('The MONGO_DB environment variable is not set.');
}

// Connect to database
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error(`Database connection error: ${err}`);
  });

const db = mongoose.connection;

db.on('disconnected', () => {
  console.log('Database disconnected');
});
