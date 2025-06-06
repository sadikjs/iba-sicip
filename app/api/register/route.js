//external import
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/service/dbConnect";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";

//Internal import
import Register from "@/model/register-model";

// Disable default body parsing
export const config = {
  api: { bodyParser: false },
};

//post request
export const POST = async (request) => {
  try {
    await dbConnect();
    const formData = await request.formData();
    const serialNo = formData.get("serialNo");
    const roll = formData.get("roll");
    const role = formData.get("role");
    const studentCategory = formData.get("studentCategory");
    const name = formData.get("name");
    const fatherName = formData.get("fatherName");
    const motherName = formData.get("motherName");
    const dateOfBirthForm = formData.get("dateOfBirth");
    const dateOfBirth = new Date(dateOfBirthForm);
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
    const sscInstitute = formData.get("sscInstitute");
    const sscResult = formData.get("sscResult");
    const sscGroup = formData.get("sscGroup");
    const sscPassingYear = formData.get("sscPassingYear");
    const hseExamName = formData.get("hseExamName");
    const hscBoard = formData.get("hscBoard");
    const hscRoll = formData.get("hscRoll");
    const hscInstitute = formData.get("hscInstitute");
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
    const experiedOrganizationAddressOne = formData.get(
      "experiedOrganizationAddressOne"
    );
    const experiedStartDateOne = formData.get("experiedStartDateOne");
    const experiedEndDateOne = formData.get("experiedEndDateOne");
    const oneExperienceDay = formData.get("oneExperienceDay");
    const experiedDescriptionOne = formData.get("experiedDescriptionOne");
    const experiedOrganizationTwo = formData.get("experiedOrganizationTwo");
    const experiedDesignationTwo = formData.get("experiedDesignationTwo");
    const experiedOrganizationAddressTwo = formData.get(
      "experiedOrganizationAddressTwo"
    );
    const experiedStartDateTwo = formData.get("experiedStartDateTwo");
    const experiedEndDateTwo = formData.get("experiedEndDateTwo");
    const twoExperienceDay = formData.get("twoExperienceDay");
    const experiedDescriptionTwo = formData.get("experiedDescriptionTwo");
    const experiedOrganizationThree = formData.get("experiedOrganizationThree");
    const experiedDesignationThree = formData.get("experiedDesignationThree");
    const experiedOrganizationAddressThree = formData.get(
      "experiedOrganizationAddressThree"
    );
    const experiedStartDateThree = formData.get("experiedStartDateThree");
    const experiedEndDateThree = formData.get("experiedEndDateThree");
    const threeExperienceDay = formData.get("threeExperienceDay");
    const experiedDescriptionThree = formData.get("experiedDescriptionThree");
    const experiedOrganizationFour = formData.get("experiedOrganizationFour");
    const experiedDesignationFour = formData.get("experiedDesignationFour");
    const experiedOrganizationAddressFour = formData.get(
      "experiedOrganizationAddressFour"
    );
    const experiedStartDateFour = formData.get("experiedStartDateFour");
    const experiedEndDateFour = formData.get("experiedEndDateFour");
    const fourExperienceDay = formData.get("fourExperienceDay");
    const experiedDescriptionFour = formData.get("experiedDescriptionFour");
    const profile = formData.get("profilePicture");
    const signature = formData.get("signature");

    const hashPassword = await bcrypt.hash(password, 5);
    //uploader
    const uploadDir = "./public/uploads";
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

    // 📌 Save Profile Picture
    const profileExt = path.extname(profile.name);
    const profilePath = `${uploadDir}/profilePictures/${mobileNo}_profile${profileExt}`;
    fs.writeFileSync(profilePath, Buffer.from(await profile.arrayBuffer()));

    // 📌 Save Signature
    const signatureExt = path.extname(signature.name);
    const signaturePath = `${uploadDir}/signatures/${mobileNo}_signature${signatureExt}`;
    fs.writeFileSync(signaturePath, Buffer.from(await signature.arrayBuffer()));

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
      sscInstitute,
      sscResult,
      sscGroup,
      sscPassingYear,
      hseExamName,
      hscBoard,
      hscRoll,
      hscInstitute,
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
      profilePicture: `/uploads/profilePictures/${mobileNo}_profile${profileExt}`,
      signature: `/uploads/signatures/${mobileNo}_signature${signatureExt}`,
    });
    return NextResponse.json(
      { message: "Upload successful", data: upload },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ msg: error.message }, { status: 500 });
  }
};

//Get request
export const GET = async (req, res) => {
  await dbConnect();
  const images = await Register.find({});
  return NextResponse.json(
    { image: images, total: images.length },
    {
      status: 200,
    }
  );
};
