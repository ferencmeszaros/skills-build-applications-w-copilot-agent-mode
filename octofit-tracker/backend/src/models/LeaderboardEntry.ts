import mongoose from 'mongoose';

const leaderboardEntrySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  score: { type: Number, required: true, default: 0 },
});

export default mongoose.model('LeaderboardEntry', leaderboardEntrySchema);
