//external package
import { z } from "zod";
import { subYears } from "date-fns";
//regex
const specificEmailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|hotmail)\.com$/;
//register form schema
export const editFormSchema = z.object({
  studentCategory: z
    .string()
    .min(2, { message: "Please select student category" }),
  name: z.string().min(4, { message: "please enter valid name" }),
  fatherName: z
    .string()
    .min(2, { message: "Please enter valid Father's name" }),
  motherName: z
    .string()
    .min(2, { message: "Please enter valid Mother's name" }),
  dateOfBirth: z.string().refine(
    (dateString) => {
      try {
        const dob = new Date(dateString);
        if (isNaN(dob.getTime())) {
          return false; // Invalid date format
        }
        const minDate = subYears(new Date(), 50);
        const maxDate = subYears(new Date(), 20);
        return dob >= minDate && dob <= maxDate;
      } catch (error) {
        return false; // Handle potential errors during date parsing
      }
    },
    {
      message: "Must be between 20 and 50 years old",
    }
  ),
  nationality: z.string().min(5, { message: "Please select nationality" }),
  religion: z.string().min(5, { message: "Please select religion" }),
  gender: z.string().min(2, { message: "Please select gender" }),
  nid: z.string().regex(/^\d{10}$|^\d{13}$|^\d{17}$/, {
    message: "Number must be exactly 10, 13, or 17 digits long.",
  }),
  marrital: z
    .string()
    .min(2, { message: "marrital status must be required" })
    .optional(),
  bloodGroup: z.string().min(2, { message: "Please blood group enter here" }),
  mobileNo: z.string().regex(/^01[3-9]\d{8}$/, {
    message:
      "Please enter here a valid Bangladeshi mobile number. Must start with 01 and have 11 digits.",
  }),
  homeMobileNo: z.string().regex(/^01[3-9]\d{8}$/, {
    message:
      "Please enter here a valid Bangladeshi mobile number. Must start with 01 and have 11 digits.",
  }),
  email: z
    .string()
    .regex(specificEmailRegex, { message: "Invalid email address format." })
    .email({ message: "Must be a valid email" }),
  physicalChallenged: z
    .string()
    .min(2, { message: "Please select physical challenged" }),
  ethonicGroup: z.string().min(2, { message: "ethonic group is required" }),
  presentVillage: z
    .string()
    .min(5, { message: "Present Village/Road/House name is required!" }),
  presentDistrict: z
    .string()
    .min(4, { message: "Present District name is required!" }),
  presentUpazila: z
    .string()
    .min(4, { message: "Present Upazila/Thana name is required!" }),
  presentPostOffice: z
    .string()
    .min(4, { message: "Present Post office name is required!" }),
  presentPostCode: z
    .string()
    .min(4, { message: "Present Post code is required!" }),
  permanentVillage: z
    .string()
    .min(5, { message: "Permanent Village/Road/House name is required!" }),
  permanentDistrict: z
    .string()
    .min(4, { message: "Permanent District name is required!" }),
  permanentUpazila: z
    .string()
    .min(4, { message: "Permanent Upazila/Thana name is required!" }),
  permanentPostOffice: z
    .string()
    .min(4, { message: "Permanent Post office name is required!" }),
  permanentPostCode: z
    .string()
    .min(4, { message: "Permanent Post code is required!" }),
  homeVillage: z
    .string()
    .min(5, { message: "Home Village/Road/House name is required!" }),
  homeDistrict: z
    .string()
    .min(5, { message: "Home District name is required!" }),
  homeUpazila: z
    .string()
    .min(5, { message: "Home Upazila/Thana/ name is required" }),
  homePostOffice: z
    .string()
    .min(5, { message: "Home post office is required !" }),
  homePostCode: z.string().min(2, { message: "Home post code is required!" }),
  sscExamName: z.string().min(3, { message: "SSC exam name is required!" }),
  sscBoard: z.string().min(4, { message: "SSC exam board is required!" }),
  sscRoll: z
    .string()
    .min(4, { message: "SSC roll number is required!" })
    .max(15, { message: "SSC roll number above 15 character not allow!" }),
  sscInstitute: z.string(),
  sscResult: z.union([
    z.string().regex(/^[3-5]\.\d{2}$/, "Result must be between 3.00 and 5.00", {
      message: "Value must be between 3 and 5 with a step of 0.01",
    }),
    z.string().regex(/^(firstDivision|secondDivision)$/, {
      message: "Value must be '1st Division' or '2nd Division'",
    }),
  ]),
  sscGroup: z.string().min(3, { message: "SSC Group name is required!" }),
  sscPassingYear: z.string().min(4, { message: "SSC passing year required!" }),
  hseExamName: z
    .string()
    .min(3, { message: "HSSC/Equivalent exam name is required !" }),
  hscBoard: z
    .string()
    .min(3, { message: "HSC/Equivalent exam board is required!" })
    .optional(),
  hscRoll: z.string().min(4, { message: "HSC/ roll is required!" }),
  hscInstitute: z.string(),
  hscResult: z.union([
    z.string().regex(/^[3-5]\.\d{2}$/, "Result must be between 3.00 and 5.00", {
      message: "Value must be between 3 and 5 with a step of 0.01",
    }),
    z.string().regex(/^(firstDivision|secondDivision)$/, {
      message: "Value must be '1st Division' or '2nd Division'",
    }),
  ]),
  hscGroup: z
    .string()
    .min(4, { message: "HSC/Equivalent group is required !" }),
  hscPassingYear: z
    .string()
    .min(4, { message: "HSC/Equivalent passing is required!" }),
  graduationName: z
    .string()
    .min(2, { message: "Graduation/Equivalent name is required !" }),
  graduationSubject: z
    .string()
    .min(2, { message: "Graduation/Equivalent subject is required!" }),
  graduationVersity: z
    .string()
    .min(2, { message: "University/Equivalent name is required!" }),
  graduationResult: z.union([
    z
      .string()
      .regex(
        /^(2\.[5-9][0-9]|3\.\d{2}|4\.00)$/,
        "Result must be between 2.50 and 4.00",
        {
          message: "Value must be between 2.5 and 4 with a step of 0.1",
        }
      ),
    z.string().regex(/^(firstDivision|secondDivision)$/, {
      message: "Value must be '1st Division' or '2nd Division'",
    }),
  ]),
  graduationPassingYear: z
    .string()
    .min(4, { message: "Graduation/Equivalent passing yard is required!" }),
  graduationCourseDuration: z
    .string()
    .min(1, { message: "Course Duration is required!" }),
  masterName: z.string(),
  masterSubject: z.string(),
  masterUniversity: z.string(),
  masterResult: z.string(),
  masterPassingYear: z.string(),
  masterCourseDuration: z.string(),
  otherCourseName: z.string(),
  otherCourseSubject: z.string(),
  otherCourseUniversity: z.string(),
  otherCourseResult: z.string(),
  otherPassingYear: z.string(),
  otherCourseDuration: z.string(),
  experiedOrganizationOne: z.string(),
  experiedDesignationOne: z.string(),
  experiedOrganizationAddressOne: z.string(),
  experiedStartDateOne: z.string(),
  experiedEndDateOne: z.string(),
  experiedDescriptionOne: z.string(),
  experiedOrganizationTwo: z.string(),
  experiedDesignationTwo: z.string(),
  experiedOrganizationAddressTwo: z.string(),
  experiedStartDateTwo: z.string(),
  experiedEndDateTwo: z.string(),
  experiedDescriptionTwo: z.string(),
  experiedOrganizationThree: z.string(),
  experiedDesignationThree: z.string(),
  experiedOrganizationAddressThree: z.string(),
  experiedStartDateThree: z.string(),
  experiedEndDateThree: z.string(),
  experiedDescriptionThree: z.string(),
  experiedOrganizationFour: z.string(),
  experiedDesignationFour: z.string(),
  experiedOrganizationAddressFour: z.string(),
  experiedStartDateFour: z.string(),
  experiedEndDateFour: z.string(),
  experiedDescriptionFour: z.string(),
});
