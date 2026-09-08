import { Router } from 'express';

import { Activity } from '../models/activity.js';
import { LeaderboardEntry } from '../models/leaderboard.js';
import { Team } from '../models/team.js';
import { User } from '../models/user.js';
import { Workout } from '../models/workout.js';

export const apiRouter = Router();

apiRouter.get('/users', async (_request, response, next) => {
  try {
    const users = await User.find().sort({ name: 1 }).lean();
    response.json({ users });
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/teams', async (_request, response, next) => {
  try {
    const teams = await Team.find().sort({ name: 1 }).lean();
    response.json({ teams });
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/activities', async (_request, response, next) => {
  try {
    const activities = await Activity.find().sort({ activityDate: -1 }).lean();
    response.json({ activities });
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/leaderboard', async (_request, response, next) => {
  try {
    const leaderboard = await LeaderboardEntry.find().sort({ rank: 1 }).lean();
    response.json({ leaderboard });
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/workouts', async (_request, response, next) => {
  try {
    const workouts = await Workout.find().sort({ title: 1 }).lean();
    response.json({ workouts });
  } catch (error) {
    next(error);
  }
});