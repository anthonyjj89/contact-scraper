import mongoose from 'mongoose';
import 'dotenv/config';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
};

export default connectDB;
