import { Schema, model } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    rank: { type: Number, required: true, unique: true },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    totalMinutes: { type: Number, required: true },
    totalCalories: { type: Number, required: true },
  },
  { collection: 'leaderboard', timestamps: true },
);

export const LeaderboardEntry = model('LeaderboardEntry', leaderboardSchema);