import mongoose,{Schema} from "mongoose";
import ExamSerial from "./exam-serial";
const examCenterSchema = new Schema({
    serialNumber:{
        type: Number, 
    },
    building:{
        type: String,
        required:true
    },
    floor:{
        type:String,
        required: true
    },
    roomNumber: {
        type: Number, 
        required: true
    },
    startRoll: {
        type: Number, 
    }, 
    endRoll:{
        type: Number, 
    },
    capacity:{
        type: Number, 
        required: true
    }, 
    students: [{type: mongoose.Schema.Types.ObjectId, ref: "Register"}]
})

// Custom auto-increment logic
examCenterSchema.pre('save', async function (next) {
    if (this.isNew) {
      try {
        // Find and update the counter for the "User" model
        const counter = await ExamSerial.findOneAndUpdate(
          { model: 'ExamSerial' },
          { $inc: { countOne: 1 } }, // Increment the count
          { new: true, upsert: true } // Create if not exists
        );
  
        // Assign the incremented value to the userId field
        this.serialNumber = counter.countOne;
      } catch (err) {
        next(err); // Pass error to the next middleware
      }
    }
    next();
  });


  const ExamCenter = mongoose.models.ExamCenter || mongoose.model("ExamCenter", examCenterSchema)

  export default ExamCenter