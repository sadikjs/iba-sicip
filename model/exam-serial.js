// models/Counter.js
import mongoose from 'mongoose';
const SerialSchema = new mongoose.Schema({
  model: { type: String}, // The model for which the counter applies
  countOne: { type: Number, default: 0 }, // Current counter value
});

const ExamSerial =  mongoose.models.ExamSerial || mongoose.model('ExamSerial', SerialSchema);

export default ExamSerial
