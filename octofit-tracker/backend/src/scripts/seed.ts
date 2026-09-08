import { connectDatabase } from '../config/database.js';
import { Activity } from '../models/activity.js';
import { LeaderboardEntry } from '../models/leaderboard.js';
import { Team } from '../models/team.js';
import { User } from '../models/user.js';
import { Workout } from '../models/workout.js';

const users = [
  {
    name: 'Maya Chen',
    email: 'maya.chen@example.com',
    age: 31,
    fitnessLevel: 'advanced',
    teamName: 'Circuit Breakers',
    joinedAt: new Date('2026-01-12'),
  },
  {
    name: 'Jordan Ellis',
    email: 'jordan.ellis@example.com',
    age: 27,
    fitnessLevel: 'intermediate',
    teamName: 'Sprint Squad',
    joinedAt: new Date('2026-02-04'),
  },
  {
    name: 'Priya Shah',
    email: 'priya.shah@example.com',
    age: 36,
    fitnessLevel: 'beginner',
    teamName: 'Trail Mix',
    joinedAt: new Date('2026-03-18'),
  },
];

const teams = [
  {
    name: 'Circuit Breakers',
    captainEmail: 'maya.chen@example.com',
    memberEmails: ['maya.chen@example.com'],
    weeklyGoalMinutes: 900,
  },
  {
    name: 'Sprint Squad',
    captainEmail: 'jordan.ellis@example.com',
    memberEmails: ['jordan.ellis@example.com'],
    weeklyGoalMinutes: 750,
  },
  {
    name: 'Trail Mix',
    captainEmail: 'priya.shah@example.com',
    memberEmails: ['priya.shah@example.com'],
    weeklyGoalMinutes: 600,
  },
];

const activities = [
  {
    userEmail: 'maya.chen@example.com',
    type: 'Cycling',
    durationMinutes: 72,
    distanceMiles: 18.4,
    caloriesBurned: 640,
    activityDate: new Date('2026-09-05'),
  },
  {
    userEmail: 'jordan.ellis@example.com',
    type: 'Running',
    durationMinutes: 44,
    distanceMiles: 5.8,
    caloriesBurned: 510,
    activityDate: new Date('2026-09-06'),
  },
  {
    userEmail: 'priya.shah@example.com',
    type: 'Strength Training',
    durationMinutes: 38,
    distanceMiles: 0,
    caloriesBurned: 290,
    activityDate: new Date('2026-09-07'),
  },
];

const leaderboard = [
  {
    rank: 1,
    userName: 'Maya Chen',
    userEmail: 'maya.chen@example.com',
    totalMinutes: 312,
    totalCalories: 2410,
  },
  {
    rank: 2,
    userName: 'Jordan Ellis',
    userEmail: 'jordan.ellis@example.com',
    totalMinutes: 284,
    totalCalories: 2180,
  },
  {
    rank: 3,
    userName: 'Priya Shah',
    userEmail: 'priya.shah@example.com',
    totalMinutes: 196,
    totalCalories: 1320,
  },
];

const workouts = [
  {
    title: 'Desk-to-5K Primer',
    category: 'Cardio',
    difficulty: 'beginner',
    durationMinutes: 30,
    description: 'A gentle interval run plan for building aerobic consistency.',
    exercises: ['5 minute warm-up walk', '8 rounds of 1 minute jog and 90 second walk', '5 minute cool-down'],
  },
  {
    title: 'Core Stability Circuit',
    category: 'Strength',
    difficulty: 'intermediate',
    durationMinutes: 40,
    description: 'A balanced core and mobility session for cross-training days.',
    exercises: ['Dead bugs', 'Side planks', 'Glute bridges', 'Bird dogs', 'Hip mobility flow'],
  },
  {
    title: 'Climb Power Ride',
    category: 'Cycling',
    difficulty: 'advanced',
    durationMinutes: 55,
    description: 'Structured hill intervals to improve sustained cycling power.',
    exercises: ['10 minute spin-up', '6 seated climbs', '3 standing surges', '10 minute recovery spin'],
  },
];

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await connectDatabase();

    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await Promise.all([
      User.insertMany(users),
      Team.insertMany(teams),
      Activity.insertMany(activities),
      LeaderboardEntry.insertMany(leaderboard),
      Workout.insertMany(workouts),
    ]);

    console.log('Database seeding complete');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
