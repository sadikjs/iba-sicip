// models/Counter.js
import mongoose from "mongoose";
const SerialSchema = new mongoose.Schema({
  model: { type: String }, // The model for which the counter applies
  counter: { type: Number, default: 0 }, // Current counter value
});

const Serial = mongoose.models.Serial || mongoose.model("Serial", SerialSchema);

export default Serial;
