import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    goal: { type: String, default: 'Stay active' },
    level: { type: String, default: 'beginner' },
  },
  { timestamps: true },
);

export default mongoose.model('User', userSchema);
