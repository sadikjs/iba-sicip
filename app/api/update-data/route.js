import { NextResponse } from "next/server";
import Register from "@/model/register-model";
import dbConnect from "@/service/dbConnect";
export const POST = async (request) => {
  await dbConnect();
  try {
    const formData = await request.formData();
    const studentCategory = formData.get("studentCategory");
    const name = formData.get("name");
    const fatherName = formData.get("fatherName");
    const motherName = formData.get("motherName");
    const dateOfBirth = formData.get("dateOfBirth");
    const nationality = formData.get("nationality");
    const religion = formData.get("religion");
    const gender = formData.get("gender");
    const nid = formData.get("nid");
    const marrital = formData.get("marrital");
    const bloodGroup = formData.get("bloodGroup");
    const mobileNo = formData.get("mobileNo");
    const homeMobileNo = formData.get("homeMobileNo");
    const email = formData.get("email");
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
    const experiedDescriptionOne = formData.get("experiedDescriptionOne");
    const experiedOrganizationTwo = formData.get("experiedOrganizationTwo");
    const experiedDesignationTwo = formData.get("experiedDesignationTwo");
    const experiedOrganizationAddressTwo = formData.get(
      "experiedOrganizationAddressTwo"
    );
    const experiedStartDateTwo = formData.get("experiedStartDateTwo");
    const experiedEndDateTwo = formData.get("experiedEndDateTwo");
    const experiedDescriptionTwo = formData.get("experiedDescriptionTwo");
    const experiedOrganizationThree = formData.get("experiedOrganizationThree");
    const experiedDesignationThree = formData.get("experiedDesignationThree");
    const experiedOrganizationAddressThree = formData.get(
      "experiedOrganizationAddressThree"
    );
    const experiedStartDateThree = formData.get("experiedStartDateThree");
    const experiedEndDateThree = formData.get("experiedEndDateThree");
    const experiedDescriptionThree = formData.get("experiedDescriptionThree");
    const experiedOrganizationFour = formData.get("experiedOrganizationFour");
    const experiedDesignationFour = formData.get("experiedDesignationFour");
    const experiedOrganizationAddressFour = formData.get(
      "experiedOrganizationAddressFour"
    );
    const experiedStartDateFour = formData.get("experiedStartDateFour");
    const experiedEndDateFour = formData.get("experiedEndDateFour");
    const experiedDescriptionFour = formData.get("experiedDescriptionFour");
    const editId = formData.get("editId");
    // route handler
    console.log(editId);
    const data = await Register.findByIdAndUpdate(
      editId,
      {
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
        experiedDescriptionOne,
        experiedOrganizationTwo,
        experiedDesignationTwo,
        experiedOrganizationAddressTwo,
        experiedStartDateTwo,
        experiedEndDateTwo,
        experiedDescriptionTwo,
        experiedOrganizationThree,
        experiedDesignationThree,
        experiedOrganizationAddressThree,
        experiedStartDateThree,
        experiedEndDateThree,
        experiedDescriptionThree,
        experiedOrganizationFour,
        experiedDesignationFour,
        experiedOrganizationAddressFour,
        experiedStartDateFour,
        experiedEndDateFour,
        experiedDescriptionFour,
      },
      { new: true, runValidators: true }
    );
    return NextResponse.json(
      { message: "Update successful", data },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { mgs: err.message },
      {
        status: 500,
      }
    );
  }
};
