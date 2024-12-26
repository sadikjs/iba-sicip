// models/Counter.js
import mongoose from 'mongoose';
const RollSchema = new mongoose.Schema({
  model: { type: String }, // The model for which the counter applies
  count: { type: Number, default: 1000 }, // Current counter value
});

const Roll =  mongoose.models.Roll || mongoose.model('Roll', RollSchema);
export default Roll
