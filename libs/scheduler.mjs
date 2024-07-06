import cron from 'node-cron';
import connectMongoDB from './mongodb.mjs'; // Adjust path as necessary
import mongoose from 'mongoose';
import Event from "../models/eventSchema.mjs"; // Adjust path as necessary
import { ObjectId } from 'mongodb';

// Connect to MongoDB when the scheduler starts
(async () => {
  try {
    await connectMongoDB();
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
})();

// Initialize the scheduler to run every minute
cron.schedule('* * * * *', async () => {
  console.log('Running scheduled task to check for upcoming events');
  try {
    // Implement your existing task logic here, e.g., sendNotifications()
  } catch (error) {
    console.error('Error during scheduled task:', error);
  }
});

// Schedule a task to delete events from previous months (every 2 minutes)
cron.schedule('*/2 * * * *', async () => {
  console.log('Running scheduled task to delete events from previous months');

  try {
    const now = new Date();
    const currentMonth = now.getMonth() + 1; // getMonth() returns 0-based index
    const currentYear = now.getFullYear();

    // Connect to MongoDB if not already connected
    await connectMongoDB();

    // Delete events where month and year are less than current month and year
    const result = await Event.deleteMany({
      $or: [
        { year: { $lt: currentYear } },
        { $and: [
            { year: currentYear },
            { month: { $lt: currentMonth } }
          ]
        }
      ]
    });

    console.log(`Deleted ${result.deletedCount} events from previous months`);

  } catch (error) {
    console.error('Error deleting events from previous months:', error);
  }
});

// Ensure MongoDB connection is closed gracefully on exit
process.on('SIGINT', async () => {
  console.log('SIGINT signal received: closing MongoDB connection');
  await mongoose.connection.close();
  console.log('MongoDB connection closed');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('SIGTERM signal received: closing MongoDB connection');
  await mongoose.connection.close();
  console.log('MongoDB connection closed');
  process.exit(0);
});
