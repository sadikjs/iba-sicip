//external import
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/service/dbConnect";
import bcrypt from "bcryptjs";

//Internal import
import Register from "@/model/register-model";
import { cloudinaryProfileUpload } from "@/lib/cloudinary-upload";
import { cloudinarySignatureUpload } from "@/lib/cloudinary-upload-signature";

await dbConnect();
//Get request
export const GET = async (req, res) => {
  const images = await Register.find({});
  return NextResponse.json({ image: images, total: images.length }, {
    status: 200
  })
}

//post request
export const POST = async (request) => {
  try {
    const formData = await request.formData();
    const serialNo = formData.get("serialNo");
    const roll = formData.get("roll");
    const role = formData.get("role");
    const studentCategory = formData.get("studentCategory");
    const name = formData.get("name");
    const fatherName = formData.get("fatherName");
    const motherName = formData.get("motherName");
    const dateOfBirthForm = formData.get("dateOfBirth");
    const dateOfBirth = new Date(dateOfBirthForm)

    const nationality = formData.get("nationality");
    const religion = formData.get("religion");
    const gender = formData.get("gender");
    const nid = formData.get("nid");
    const marrital = formData.get("marrital");
    const bloodGroup = formData.get("bloodGroup");
    const mobileNo = formData.get("mobileNo");
    const homeMobileNo = formData.get("homeMobileNo");
    const email = formData.get("email");
    const password = formData.get("password");
    const physicalChallenged = formData.get("physicalChallenged");
    const ethonicGroup = formData.get("ethonicGroup");
    const presentVillage = formData.get("presentVillage");
    const presentDistrict = formData.get("presentDistrict");
    const presentUpazila = formData.get("presentUpazila");
    const presentPostOffice = formData.get("presentPostOffice");
    const presentPostCode = formData.get("presentPostCode");
    const permanentVillage = formData.get("permanentVillage");
    const permanentDistrict = formData.get("permanentDistrict");
    const permanentUpazila = formData.get("permanentUpazila");
    const permanentPostOffice = formData.get("permanentPostOffice");
    const permanentPostCode = formData.get("permanentPostCode");
    const homeVillage = formData.get("homeVillage");
    const homeDistrict = formData.get("homeDistrict");
    const homeUpazila = formData.get("homeUpazila");
    const homePostOffice = formData.get("homePostOffice");
    const homePostCode = formData.get("homePostCode");
    const sscExamName = formData.get("sscExamName");
    const sscBoard = formData.get("sscBoard");
    const sscRoll = formData.get("sscRoll");
    const sscResult = formData.get("sscResult");
    const sscGroup = formData.get("sscGroup");
    const sscPassingYear = formData.get("sscPassingYear");
    const hseExamName = formData.get("hseExamName");
    const hscBoard = formData.get("hscBoard");
    const hscRoll = formData.get("hscRoll");
    const hscResult = formData.get("hscResult");
    const hscGroup = formData.get("hscGroup");
    const hscPassingYear = formData.get("hscPassingYear");
    const graduationName = formData.get("graduationName");
    const graduationSubject = formData.get("graduationSubject");
    const graduationVersity = formData.get("graduationVersity");
    const graduationResult = formData.get("graduationResult");
    const graduationPassingYear = formData.get("graduationPassingYear");
    const graduationCourseDuration = formData.get("graduationCourseDuration");
    const masterName = formData.get("masterName");
    const masterSubject = formData.get("masterSubject");
    const masterUniversity = formData.get("masterUniversity");
    const masterResult = formData.get("masterResult");
    const masterPassingYear = formData.get("masterPassingYear");
    const masterCourseDuration = formData.get("masterCourseDuration");
    const otherCourseName = formData.get("otherCourseName");
    const otherCourseSubject = formData.get("otherCourseSubject");
    const otherCourseUniversity = formData.get("otherCourseUniversity");
    const otherCourseResult = formData.get("otherCourseResult");
    const otherPassingYear = formData.get("otherPassingYear");
    const otherCourseDuration = formData.get("otherCourseDuration");
    const experiedOrganizationOne = formData.get("experiedOrganizationOne");
    const experiedDesignationOne = formData.get("experiedDesignationOne");
    const experiedOrganizationAddressOne = formData.get("experiedOrganizationAddressOne");

    const experiedStartDateOneForm = formData.get("experiedStartDateOne")
    const experiedStartDateOne = new Date(experiedStartDateOneForm)
    const experiedEndDateOneForm = formData.get("experiedEndDateOne")
    const experiedEndDateOne = new Date(experiedEndDateOneForm)
    const oneExperienceDay = formData.get("oneExperienceDay");

    const experiedDescriptionOne = formData.get("experiedDescriptionOne");
    const experiedOrganizationTwo = formData.get("experiedOrganizationTwo");
    const experiedDesignationTwo = formData.get("experiedDesignationTwo");
    const experiedOrganizationAddressTwo = formData.get("experiedOrganizationAddressTwo");

    const experiedStartDateTwoForm = formData.get("experiedStartDateTwo"); 
    const experiedStartDateTwo = new Date(experiedStartDateTwoForm)
    const experiedEndDateTwoForm = formData.get("experiedEndDateTwo");
    const experiedEndDateTwo = new Date(experiedEndDateTwoForm);
    const twoExperienceDay = formData.get("twoExperienceDay");

    const experiedDescriptionTwo = formData.get("experiedDescriptionTwo");
    const experiedOrganizationThree = formData.get("experiedOrganizationThree");
    const experiedDesignationThree = formData.get("experiedDesignationThree");
    const experiedOrganizationAddressThree = formData.get("experiedOrganizationAddressThree");

    const experiedStartDateThreeForm = formData.get("experiedStartDateThree");
    const experiedStartDateThree = new Date(experiedStartDateThreeForm); 
    const experiedEndDateThreeForm = formData.get("experiedEndDateThree");
    const experiedEndDateThree = new Date(experiedEndDateThreeForm)
    const threeExperienceDay = formData.get("threeExperienceDay");
   
    const experiedDescriptionThree = formData.get("experiedDescriptionThree");
    const experiedOrganizationFour = formData.get("experiedOrganizationFour");
    const experiedDesignationFour = formData.get("experiedDesignationFour");
    const experiedOrganizationAddressFour = formData.get("experiedOrganizationAddressFour");
    const experiedStartDateFourForm = formData.get("experiedStartDateFour"); 
    const experiedStartDateFour = new Date(experiedStartDateFourForm);
    const experiedEndDateFourForm = formData.get("experiedEndDateFour");
    const experiedEndDateFour = new Date(experiedEndDateFourForm)
    const fourExperienceDay = formData.get("fourExperienceDay");

    const experiedDescriptionFour = formData.get("experiedDescriptionFour");
    const profilePicture = formData.get("profilePicture");
    const signature = formData.get("signature");
    const dataProfile = await cloudinaryProfileUpload(profilePicture, "iba-sicip");
    const dataSignature = await cloudinarySignatureUpload(signature, "iba-signature")
    const hashPassword = await bcrypt.hash(password, 5)
    console.log(oneExperienceDay);
    const upload = await Register.create({
      serialNo,
      roll,
      role,
      studentCategory,
      name,
      fatherName,
      motherName,
      dateOfBirth,
      nationality,
      religion,
      gender,
      nid,
      marrital,
      bloodGroup,
      mobileNo,
      homeMobileNo,
      email,
      password: hashPassword,
      physicalChallenged,
      ethonicGroup,
      presentVillage,
      presentDistrict,
      presentUpazila,
      presentPostOffice,
      presentPostCode,
      permanentVillage,
      permanentDistrict,
      permanentUpazila,
      permanentPostOffice,
      permanentPostCode,
      homeVillage,
      homeDistrict,
      homeUpazila,
      homePostOffice,
      homePostCode,
      sscExamName,
      sscBoard,
      sscRoll,
      sscResult,
      sscGroup,
      sscPassingYear,
      hseExamName,
      hscBoard,
      hscRoll,
      hscResult,
      hscGroup,
      hscPassingYear,
      graduationName,
      graduationSubject,
      graduationVersity,
      graduationResult,
      graduationPassingYear,
      graduationCourseDuration,
      masterName,
      masterSubject,
      masterUniversity,
      masterResult,
      masterPassingYear,
      masterCourseDuration,
      otherCourseName,
      otherCourseSubject,
      otherCourseUniversity,
      otherCourseResult,
      otherPassingYear,
      otherCourseDuration,
      experiedOrganizationOne,
      experiedDesignationOne,
      experiedOrganizationAddressOne,
      experiedStartDateOne,
      experiedEndDateOne,
      oneExperienceTotalDays: oneExperienceDay,
      experiedDescriptionOne,
      experiedOrganizationTwo,
      experiedDesignationTwo,
      experiedOrganizationAddressTwo,
      experiedStartDateTwo,
      experiedEndDateTwo,
      twoExperienceTotalDays: twoExperienceDay,
      experiedDescriptionTwo,
      experiedOrganizationThree,
      experiedDesignationThree,
      experiedOrganizationAddressThree,
      experiedStartDateThree,
      experiedEndDateThree,
      threeExperienceTotalDays: threeExperienceDay,
      experiedDescriptionThree,
      experiedOrganizationFour,
      experiedDesignationFour,
      experiedOrganizationAddressFour,
      experiedStartDateFour,
      experiedEndDateFour,
      fourExperienceTotalDays: fourExperienceDay,
      experiedDescriptionFour,
      profilePicture: dataProfile?.secure_url,
      profilePublicId: dataProfile?.public_id,
      signature: dataSignature?.secure_url,
      signaturePublicId: dataSignature?.public_id
    })
    return NextResponse.json({ message: "Upload successful", data: upload }, { status: 200 })
  } catch (error) {
    console.error(error);
    return NextResponse.json({ msg: error.message }, { status: 500 })
  }
}
