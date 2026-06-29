import mongoose from 'mongoose';
import User from '../models/User';
import Team from '../models/Team';
import Activity from '../models/Activity';
import Workout from '../models/Workout';
import Leaderboard from '../models/Leaderboard';

// Seed the octofit_db database with test data.
async function seed() {
  const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';
  await mongoose.connect(mongoUri);
  console.log('Connected to MongoDB for seeding');

  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    Workout.deleteMany({}),
    Leaderboard.deleteMany({}),
  ]);

  const users = await User.insertMany([
    { name: 'Maya Chen', email: 'maya@example.com', age: 16, goal: 'Run a 5K', level: 'intermediate' },
    { name: 'Jordan Lee', email: 'jordan@example.com', age: 15, goal: 'Build strength', level: 'beginner' },
    { name: 'Sam Patel', email: 'sam@example.com', age: 17, goal: 'Improve endurance', level: 'advanced' },
  ]);

  const teams = await Team.insertMany([
    { name: 'Trail Blazers', sport: 'Running', members: [users[0]._id, users[1]._id] },
    { name: 'Power Squad', sport: 'Strength', members: [users[2]._id] },
  ]);

  const workouts = await Workout.insertMany([
    { name: 'Morning Jog', description: 'A brisk 20-minute run', focusArea: 'cardio', durationMinutes: 20, difficulty: 'beginner' },
    { name: 'Core Circuit', description: 'A quick bodyweight circuit', focusArea: 'core', durationMinutes: 25, difficulty: 'intermediate' },
    { name: 'Upper Body Strength', description: 'Push-ups, rows, and planks', focusArea: 'upper-body', durationMinutes: 35, difficulty: 'advanced' },
  ]);

  await Activity.insertMany([
    { user: users[0]._id, type: 'run', durationMinutes: 30, distanceMiles: 2.5, calories: 240, date: new Date('2026-06-20') },
    { user: users[1]._id, type: 'strength', durationMinutes: 45, distanceMiles: 0, calories: 300, date: new Date('2026-06-21') },
    { user: users[2]._id, type: 'bike', durationMinutes: 40, distanceMiles: 12, calories: 420, date: new Date('2026-06-22') },
  ]);

  await Leaderboard.insertMany([
    { user: users[0]._id, score: 180, rank: 1 },
    { user: users[1]._id, score: 145, rank: 2 },
    { user: users[2]._id, score: 220, rank: 3 },
  ]);

  console.log(`Seeded ${users.length} users, ${teams.length} teams, ${workouts.length} workouts, and leaderboard entries.`);
  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error('Seeding failed', error);
  process.exit(1);
});
