import { Schema, model } from 'mongoose';

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
    durationMinutes: { type: Number, required: true },
    description: { type: String, required: true },
    exercises: [{ type: String, required: true }],
  },
  { timestamps: true },
);

export const Workout = model('Workout', workoutSchema);