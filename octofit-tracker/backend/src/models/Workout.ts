import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    focusArea: { type: String, default: 'full-body' },
    durationMinutes: { type: Number, default: 30 },
    difficulty: { type: String, default: 'beginner' },
  },
  { timestamps: true },
);

export default mongoose.model('Workout', workoutSchema);
