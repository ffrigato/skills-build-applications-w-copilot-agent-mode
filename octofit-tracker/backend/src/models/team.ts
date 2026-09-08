import { Schema, model } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    captainEmail: { type: String, required: true },
    memberEmails: [{ type: String, required: true }],
    weeklyGoalMinutes: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Team = model('Team', teamSchema);