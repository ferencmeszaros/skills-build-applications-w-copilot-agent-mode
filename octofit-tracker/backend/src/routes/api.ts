import express from 'express';
import User from '../models/User';
import Team from '../models/Team';
import Activity from '../models/Activity';
import Workout from '../models/Workout';
import Leaderboard from '../models/Leaderboard';

const router = express.Router();

router.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend' });
});

router.get('/users', async (_req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post('/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});

router.get('/teams', async (_req, res) => {
  const teams = await Team.find().populate('members');
  res.json(teams);
});

router.post('/teams', async (req, res) => {
  const team = new Team(req.body);
  await team.save();
  res.status(201).json(team);
});

router.get('/activities', async (_req, res) => {
  const activities = await Activity.find().populate('user');
  res.json(activities);
});

router.post('/activities', async (req, res) => {
  const activity = new Activity(req.body);
  await activity.save();
  res.status(201).json(activity);
});

router.get('/workouts', async (_req, res) => {
  const workouts = await Workout.find();
  res.json(workouts);
});

router.post('/workouts', async (req, res) => {
  const workout = new Workout(req.body);
  await workout.save();
  res.status(201).json(workout);
});

router.get('/leaderboard', async (_req, res) => {
  const leaderboard = await Leaderboard.find().populate('user');
  res.json(leaderboard);
});

router.post('/leaderboard', async (req, res) => {
  const entry = new Leaderboard(req.body);
  await entry.save();
  res.status(201).json(entry);
});

export default router;
