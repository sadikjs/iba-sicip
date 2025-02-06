//external package
import mongoose, { Schema } from "mongoose";
import Serial from "./serial-model";
import Roll from "./roll-model";
const registerSchema = new Schema({
  serialNo: {
    type: Number,
  },
  roll: {
    type: Number,
  },
  role: {
    type: String,
    default: "student",
  },
  studentCategory: {
    type: String,
  },
  name: {
    type: String,
  },
  fatherName: {
    type: String,
  },
  motherName: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  nationality: {
    type: String,
  },
  religion: {
    type: String,
  },
  gender: {
    type: String,
  },
  nid: {
    type: String,
  },
  marrital: {
    type: String,
  },
  bloodGroup: {
    type: String,
  },
  mobileNo: {
    type: String,
    unique: true,
  },
  homeMobileNo: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  physicalChallenged: {
    type: String,
  },
  ethonicGroup: {
    type: String,
  },
  presentVillage: {
    type: String,
  },
  presentDistrict: {
    type: String,
  },
  presentUpazila: {
    type: String,
  },
  presentPostOffice: {
    type: String,
  },
  presentPostCode: {
    type: String,
  },
  permanentVillage: {
    type: String,
  },
  permanentDistrict: {
    type: String,
  },
  permanentUpazila: {
    type: String,
  },
  permanentPostOffice: {
    type: String,
  },
  permanentPostCode: {
    type: String,
  },
  homeVillage: {
    type: String,
  },
  homeDistrict: {
    type: String,
  },
  homeUpazila: {
    type: String,
  },
  homePostOffice: {
    type: String,
  },
  homePostCode: {
    type: String,
  },
  sscExamName: {
    type: String,
  },
  sscBoard: {
    type: String,
  },
  sscRoll: {
    type: String,
  },
  sscInstitute: {
    type: String,
  },
  sscResult: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  sscGroup: {
    type: String,
  },
  sscPassingYear: {
    type: String,
  },
  hseExamName: {
    type: String,
  },
  hscBoard: {
    type: String,
  },
  hscRoll: {
    type: String,
  },
  hscInstitute: {
    type: String,
  },
  hscResult: {
    type: mongoose.Schema.Types.Mixed,
  },
  hscGroup: {
    type: String,
  },
  hscPassingYear: {
    type: String,
  },
  graduationName: {
    type: String,
  },
  graduationSubject: {
    type: String,
  },
  graduationVersity: {
    type: String,
  },
  graduationResult: {
    type: mongoose.Schema.Types.Mixed,
  },
  graduationPassingYear: {
    type: String,
  },
  graduationCourseDuration: {
    type: String,
  },
  masterName: {
    type: String,
  },
  masterSubject: {
    type: String,
  },
  masterUniversity: {
    type: String,
  },
  masterResult: {
    type: mongoose.Schema.Types.Mixed,
  },
  masterPassingYear: {
    type: String,
  },
  masterCourseDuration: {
    type: String,
  },
  otherCourseName: {
    type: String,
  },
  otherCourseSubject: {
    type: String,
  },
  otherCourseUniversity: {
    type: String,
  },
  otherCourseResult: {
    type: mongoose.Schema.Types.Mixed,
  },
  otherPassingYear: {
    type: String,
  },
  otherCourseDuration: {
    type: String,
  },

  experiedOrganizationOne: {
    type: String,
  },
  experiedDesignationOne: {
    type: String,
  },
  experiedOrganizationAddressOne: {
    type: String,
  },
  experiedStartDateOne: {
    type: Date,
  },
  experiedEndDateOne: {
    type: Date,
  },
  oneExperienceTotalDays: {
    type: String,
  },
  experiedDescriptionOne: {
    type: String,
  },
  experiedOrganizationTwo: {
    type: String,
  },
  experiedDesignationTwo: {
    type: String,
  },
  experiedOrganizationAddressTwo: {
    type: String,
  },
  experiedStartDateTwo: {
    type: Date,
  },
  experiedEndDateTwo: {
    type: Date,
  },
  twoExperienceTotalDays: {
    type: String,
  },

  experiedDescriptionTwo: {
    type: String,
  },
  experiedOrganizationThree: {
    type: String,
  },
  experiedDesignationThree: {
    type: String,
  },
  experiedOrganizationAddressThree: {
    type: String,
  },
  experiedStartDateThree: {
    type: Date,
  },
  experiedEndDateThree: {
    type: Date,
  },
  threeExperienceTotalDays: {
    type: String,
  },

  experiedDescriptionThree: {
    type: String,
  },
  experiedOrganizationFour: {
    type: String,
  },
  experiedDesignationFour: {
    type: String,
  },
  experiedOrganizationAddressFour: {
    type: String,
  },
  experiedStartDateFour: {
    type: Date,
  },
  experiedEndDateFour: {
    type: Date,
  },
  fourExperienceTotalDays: {
    type: String,
  },
  experiedDescriptionFour: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
  profilePublicId: {
    type: String,
  },
  signature: {
    type: String,
  },
  signaturePublicId: {
    type: String,
  },
  createdOn: {
    default: Date.now(),
    type: Date,
    required: true,
  },
  modifiedOn: {
    default: Date.now(),
    type: Date,
    required: true,
  },
});

// Custom auto-increment logic
registerSchema.pre("save", async function (next) {
  if (this.isNew) {
    try {
      // Find and update the counter for the "User" model
      const counter = await Serial.findOneAndUpdate(
        { model: "Register" },
        { $inc: { counter: 1 } }, // Increment the count
        { new: true, upsert: true } // Create if not exists
      );
      // Assign the incremented value to the userId field
      this.serialNo = counter.counter;
    } catch (err) {
      next(err); // Pass error to the next middleware
    }
  }
  next();
});

// Custom auto-increment logic
registerSchema.pre("save", async function (next) {
  if (this.isNew) {
    try {
      // Find and update the counter for the "User" model
      const counter = await Roll.findOneAndUpdate(
        { model: "Register" },
        { $inc: { counter: 1 } }, // Increment the count
        { new: true, upsert: true } // Create if not exists
      );
      // Assign the incremented value to the userId field
      this.roll = counter.counter + 1000;
    } catch (err) {
      next(err); // Pass error to the next middleware
    }
  }
  next();
});

const Register =
  mongoose.models.Register || mongoose.model("Register", registerSchema);

export default Register;
