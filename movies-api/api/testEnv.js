import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Print the MongoDB URI to check if it's being loaded correctly
console.log(`MongoDB URI: ${process.env.MONGO_DB}`);
