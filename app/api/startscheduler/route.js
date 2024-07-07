// pages/api/scheduler.js
import initializeScheduler from '@/libs/scheduler.mjs';

export default async function handler(req, res) {
  try {
    await initializeScheduler();
    res.status(200).json({ message: 'Scheduler executed successfully' });
  } catch (error) {
    console.error('Error executing scheduler:', error);
    res.status(500).json({ message: 'Scheduler execution failed' });
  }
}
