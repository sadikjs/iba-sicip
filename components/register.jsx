"use client";
//external Package
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Roboto_Slab } from "next/font/google";
import { toast } from "sonner";
import axios from "axios";
import { differenceInDays } from "date-fns";

//internal package
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

//font
export const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
  weight: ["400"],
});

//internal library
import { formSchema } from "@/lib/formSchema";

//application form
const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [highClass, setHighClass] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const [signature, setSignature] = useState(null);
  const [studentCategoryOne, setStudentCategoryOne] = useState(false);
  const [studentCategoryTwo, setStudentCategoryTwo] = useState(false);
  const [studentCategoryThree, setStudentCategoryThree] = useState(false);
  const [studentCategoryFour, setStudentCategoryFour] = useState(false);
  const [grade, setGrade] = useState(true);
  const [hscGrade, setHSCGrade] = useState(true);
  const [graduationGrade, setGraduationGrade] = useState(true);
  const [masterGrade, setmasterGrade] = useState(true);
  const [otherGrade, setOtherGrade] = useState(true);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "student",
      studentCategory: "",
      name: "",
      fatherName: "",
      motherName: "",
      dateOfBirth: "",
      nationality: "",
      religion: "",
      gender: "",
      nid: "",
      marrital: "",
      bloodGroup: "",
      mobileNo: "",
      homeMobileNo: "",
      email: "",
      password: "",
      physicalChallenged: "",
      ethonicGroup: "",
      presentVillage: "",
      presentDistrict: "",
      presentUpazila: "",
      presentPostOffice: "",
      presentPostCode: "",
      permanentVillage: "",
      permanentDistrict: "",
      permanentUpazila: "",
      permanentPostOffice: "",
      permanentPostCode: "",
      homeVillage: "",
      homeDistrict: "",
      homeUpazila: "",
      homePostOffice: "",
      homePostCode: "",
      sscExamName: "",
      sscBoard: "",
      sscRoll: "",
      sscInstitute: "",
      sscResult: "",
      sscGroup: "",
      sscPassingYear: "",
      hseExamName: "",
      hscBoard: "",
      hscRoll: "",
      hscInstitute: "",
      hscResult: "",
      hscGroup: "",
      hscPassingYear: "",
      graduationName: "",
      graduationSubject: "",
      graduationVersity: "",
      graduationResult: "",
      graduationPassingYear: "",
      graduationCourseDuration: "",
      masterName: "",
      masterSubject: "",
      masterUniversity: "",
      masterResult: "",
      masterPassingYear: "",
      masterCourseDuration: "",
      otherCourseName: "",
      otherCourseSubject: "",
      otherCourseUniversity: "",
      otherCourseResult: "",
      otherPassingYear: "",
      otherCourseDuration: "",
      experiedOrganizationOne: "",
      experiedDesignationOne: "",
      experiedOrganizationAddressOne: "",
      experiedStartDateOne: "",
      experiedEndDateOne: "",
      experiedDescriptionOne: "",
      experiedOrganizationTwo: "",
      experiedDesignationTwo: "",
      experiedOrganizationAddressTwo: "",
      experiedStartDateTwo: "",
      experiedEndDateTwo: "",
      experiedDescriptionTwo: "",
      experiedOrganizationThree: "",
      experiedDesignationThree: "",
      experiedOrganizationAddressThree: "",
      experiedStartDateThree: "",
      experiedEndDateThree: "",
      experiedDescriptionThree: "",
      experiedOrganizationFour: "",
      experiedDesignationFour: "",
      experiedOrganizationAddressFour: "",
      experiedStartDateFour: "",
      experiedEndDateFour: "",
      experiedDescriptionFour: "",
      profilePicture: "",
      signature: "",
    },
  });

  const profileHandleChange = (e) => {
    if (e.target.files) {
      setProfileImage(e.target.files[0]);
    }
  };

  const signatureHandleChange = (e) => {
    if (e.target.files) {
      setSignature(e.target.files[0]);
    }
  };

  async function allImages() {
    try {
      const {
        data: { image },
      } = await axios.get("/api/register");
      console.log(image);
    } catch (error) {
      console.log(error.message);
    }
  }

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      const oneExperienceDay =
        differenceInDays(
          values.experiedEndDateOne,
          values.experiedStartDateOne
        ) + 1;
      const twoExperienceDay =
        differenceInDays(
          values.experiedEndDateTwo,
          values.experiedStartDateTwo
        ) + 1;
      const threeExperienceDay =
        differenceInDays(
          values.experiedEndDateThree,
          values.experiedStartDateThree
        ) + 1;
      const fourExperienceDay =
        differenceInDays(
          values.experiedEndDateFour,
          values.experiedStartDateFour
        ) + 1;
      formData.append("role", values.role);
      formData.append("studentCategory", values.studentCategory);
      formData.append("name", values.name);
      formData.append("fatherName", values.fatherName);
      formData.append("motherName", values.motherName);
      formData.append("dateOfBirth", values.dateOfBirth);
      formData.append("nationality", values.nationality);
      formData.append("religion", values.religion);
      formData.append("gender", values.gender);
      formData.append("nid", values.nid);
      formData.append("marrital", values.marrital);
      formData.append("bloodGroup", values.bloodGroup);
      formData.append("mobileNo", values.mobileNo);
      formData.append("homeMobileNo", values.homeMobileNo);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("physicalChallenged", values.physicalChallenged);
      formData.append("ethonicGroup", values.ethonicGroup);
      formData.append("presentVillage", values.presentVillage);
      formData.append("presentDistrict", values.presentDistrict);
      formData.append("presentUpazila", values.presentUpazila);
      formData.append("presentPostOffice", values.presentPostOffice);
      formData.append("presentPostCode", values.presentPostCode);
      formData.append("permanentVillage", values.permanentVillage);
      formData.append("permanentDistrict", values.permanentDistrict);
      formData.append("permanentUpazila", values.permanentUpazila);
      formData.append("permanentPostOffice", values.permanentPostOffice);
      formData.append("permanentPostCode", values.permanentPostCode);
      formData.append("homeVillage", values.homeVillage);
      formData.append("homeDistrict", values.homeDistrict);
      formData.append("homeUpazila", values.homeUpazila);
      formData.append("homePostOffice", values.homePostOffice);
      formData.append("homePostCode", values.homePostCode);
      formData.append("sscExamName", values.sscExamName);
      formData.append("sscBoard", values.sscBoard);
      formData.append("sscRoll", values.sscRoll);
      formData.append("sscInstitute", values.sscInstitute);
      formData.append("sscResult", values.sscResult);
      formData.append("sscGroup", values.sscGroup);
      formData.append("sscPassingYear", values.sscPassingYear);
      formData.append("hseExamName", values.hseExamName);
      formData.append("hscBoard", values.hscBoard);
      formData.append("hscRoll", values.hscRoll);
      formData.append("hscInstitute", values.hscInstitute);
      formData.append("hscResult", values.hscResult);
      formData.append("hscGroup", values.hscGroup);
      formData.append("hscPassingYear", values.hscPassingYear);
      formData.append("graduationName", values.graduationName);
      formData.append("graduationSubject", values.graduationSubject);
      formData.append("graduationVersity", values.graduationVersity);
      formData.append("graduationResult", values.graduationResult);
      formData.append("graduationPassingYear", values.graduationPassingYear);
      formData.append(
        "graduationCourseDuration",
        values.graduationCourseDuration
      );
      formData.append("masterName", values.masterName);
      formData.append("masterSubject", values.masterSubject);
      formData.append("masterUniversity", values.masterUniversity);
      formData.append("masterResult", values.masterResult);
      formData.append("masterPassingYear", values.masterPassingYear);
      formData.append("masterCourseDuration", values.masterCourseDuration);
      formData.append("otherCourseName", values.otherCourseName);
      formData.append("otherCourseSubject", values.otherCourseSubject);
      formData.append("otherCourseUniversity", values.otherCourseUniversity);
      formData.append("otherCourseResult", values.otherCourseResult);
      formData.append("otherPassingYear", values.otherPassingYear);
      formData.append("otherCourseDuration", values.otherCourseDuration);
      formData.append(
        "experiedOrganizationOne",
        values.experiedOrganizationOne
      );
      formData.append("experiedDesignationOne", values.experiedDesignationOne);
      formData.append(
        "experiedOrganizationAddressOne",
        values.experiedOrganizationAddressOne
      );
      formData.append("experiedStartDateOne", values.experiedStartDateOne);
      formData.append("experiedEndDateOne", values.experiedEndDateOne);
      formData.append("oneExperienceDay", oneExperienceDay);
      formData.append("experiedDescriptionOne", values.experiedDescriptionOne);
      formData.append(
        "experiedOrganizationTwo",
        values.experiedOrganizationTwo
      );
      formData.append("experiedDesignationTwo", values.experiedDesignationTwo);
      formData.append(
        "experiedOrganizationAddressTwo",
        values.experiedOrganizationAddressTwo
      );
      formData.append("experiedStartDateTwo", values.experiedStartDateTwo);
      formData.append("experiedEndDateTwo", values.experiedEndDateTwo);
      formData.append("twoExperienceDay", twoExperienceDay);
      formData.append("experiedDescriptionTwo", values.experiedDescriptionTwo);
      formData.append(
        "experiedOrganizationThree",
        values.experiedOrganizationThree
      );
      formData.append(
        "experiedDesignationThree",
        values.experiedDesignationThree
      );
      formData.append(
        "experiedOrganizationAddressThree",
        values.experiedOrganizationAddressThree
      );
      formData.append("experiedStartDateThree", values.experiedStartDateThree);
      formData.append("experiedEndDateThree", values.experiedEndDateThree);
      formData.append("threeExperienceDay", threeExperienceDay);
      formData.append(
        "experiedDescriptionThree",
        values.experiedDescriptionThree
      );
      formData.append(
        "experiedOrganizationFour",
        values.experiedOrganizationFour
      );
      formData.append(
        "experiedDesignationFour",
        values.experiedDesignationFour
      );
      formData.append(
        "experiedOrganizationAddressFour",
        values.experiedOrganizationAddressFour
      );
      formData.append("experiedStartDateFour", values.experiedStartDateFour);
      formData.append("experiedEndDateFour", values.experiedEndDateFour);
      formData.append("fourExperienceDay", fourExperienceDay);
      formData.append(
        "experiedDescriptionFour",
        values.experiedDescriptionFour
      );
      formData.append("profilePicture", profileImage);
      formData.append("signature", signature);
      const response = await fetch("/api/register", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        console.log("registration post: ", data);
      }
      toast.success("Registration Successfully!");
      router.push("/login");
    } catch (error) {
      console.log(message.error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div
      className={`bg-[url('./../public/assets/background/body.jpg')]
        w-screen min-h-screen flex flex-col justify-center items-center`}
    >
      <div
        className="w-4/5 bg-white flex flex-col justify-center items-center
            my-10 rounded-sm min-h-screen border border-gray-300 shadow-md"
      >
        <div className="w-11/12 z-0 relative p-8 my-10  flex flex-col justify-center border border-gray-300 rounded-md">
          <div className="w-[96%] z-10 absolute m-auto -top-2 bg-[#84B995] p-1 rounded-lg">
            <p className="text-white text-xs font-bold">Application Form</p>
          </div>
          <Form {...form}>
            <form className="py-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="w-11/12 z-0 relative p-8 m-auto  flex flex-col justify-center border border-gray-300 rounded-md">
                <div className="w-[94%] z-10 absolute m-auto -top-2 bg-[#84B995] p-1 rounded-lg">
                  <p className="text-white text-xs font-bold">
                    Basic Information
                  </p>
                </div>
                <FormField
                  name="role"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} type="hidden" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Applicant&apos;s Name{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fatherName"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Father&apos;s Name{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="motherName"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Mother&apos;s Name{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Date of Birth
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <div className="w-2/3 flex flex-col">
                        <FormControl className="w-2/3">
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormDescription className="text-red-800 text-xs">
                          Applicants age should be minimum 20 years and maximum
                          50 years
                        </FormDescription>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="nationality"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/2 text-right">
                        Nationality{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <Select
                        className="w-1/2"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="bangladeshi">
                            Bangladeshi
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="religion"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/2 text-right">
                        Religion <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <Select
                        className="w-1/2"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="islam">Islam</SelectItem>
                          <SelectItem value="hinduism">Hinduism</SelectItem>
                          <SelectItem value="buddhism">Buddhism</SelectItem>
                          <SelectItem value="christianity">
                            Christianity
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/2 text-right">
                        Gender <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <Select
                        className="w-1/2"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="nid"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        National ID{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="marrital"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/2 text-right">
                        Marrital Status{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <Select
                        className="w-1/2"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="single">Single</SelectItem>
                          <SelectItem value="married">Married</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bloodGroup"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Blood Group{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mobileNo"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Mobile Number{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="homeMobileNo"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Home Mobile Number{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Email <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <div className="flex flex-col w-2/3">
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormDescription className="text-red-800 text-xs">
                          Must be provide valid email address
                        </FormDescription>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Password <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="physicalChallenged"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Physical Challenged{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <RadioGroup
                          className="flex flex-row items-center gap-x-10"
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormItem>
                            <FormControl>
                              <RadioGroupItem value="yes" />
                            </FormControl>
                            <FormLabel className="px-4">Yes</FormLabel>
                          </FormItem>
                          <FormItem>
                            <FormControl>
                              <RadioGroupItem value="no" />
                            </FormControl>
                            <FormLabel className="px-4">No</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ethonicGroup"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Ethonic Group{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <RadioGroup
                          className="flex flex-row items-center gap-x-10"
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormItem>
                            <FormControl>
                              <RadioGroupItem value="yes" />
                            </FormControl>
                            <FormLabel className="px-4">Yes</FormLabel>
                          </FormItem>
                          <FormItem>
                            <FormControl>
                              <RadioGroupItem value="no" />
                            </FormControl>
                            <FormLabel className="px-4">No</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="studentCategory"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Student Category{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <div className="w-2/3 flex flex-col">
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="experienced">
                              Experienced
                            </SelectItem>
                            <SelectItem value="fresher">Fresher</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription className="text-red-800">
                          Experienced Applicant Must be at least 3 years
                          Experience RMG Sector. And describe in experience
                          details form
                        </FormDescription>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-11/12 z-0 relative p-8 my-6 m-auto  flex flex-col justify-center border border-gray-300 rounded-md">
                <div className="w-[94%] z-10 absolute m-auto -top-2 bg-[#84B995] p-1 rounded-lg">
                  <p className="text-white text-xs font-bold">
                    Present Address
                  </p>
                </div>
                <FormField
                  control={form.control}
                  name="presentVillage"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Village/Road/House{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="presentDistrict"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/2 text-right">
                        District <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <Select
                        className="w-1/2"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="bagerhat">Bagerhat</SelectItem>
                          <SelectItem value="bandarban">Bandarban</SelectItem>
                          <SelectItem value="barguna">Barguan</SelectItem>
                          <SelectItem value="barisal">Barisal</SelectItem>
                          <SelectItem value="bhola">Bhola</SelectItem>
                          <SelectItem value="bogura">Bogura</SelectItem>
                          <SelectItem value="brahmanbaria">
                            Brahmanbaria
                          </SelectItem>
                          <SelectItem value="chandpur">Chandpur</SelectItem>
                          <SelectItem value="chapainawabganj">
                            Chapainawabganj
                          </SelectItem>
                          <SelectItem value="chattogram">chattogram</SelectItem>
                          <SelectItem value="chuadanga">Chuadanga</SelectItem>
                          <SelectItem value="coxsbazar">Coxsbazar</SelectItem>
                          <SelectItem value="cumilla">Cumilla</SelectItem>
                          <SelectItem value="dhaka">Dhaka</SelectItem>
                          <SelectItem value="dinajpur">Dinajpur</SelectItem>
                          <SelectItem value="faridpur">Faridpur</SelectItem>
                          <SelectItem value="feni">Feni</SelectItem>
                          <SelectItem value="gaibandha">Gaibandha</SelectItem>
                          <SelectItem value="gazipur">Gazipur</SelectItem>
                          <SelectItem value="gopalganj">Gopalganj</SelectItem>
                          <SelectItem value="habiganj">Habiganj</SelectItem>
                          <SelectItem value="jamalpur">Jamalpur</SelectItem>
                          <SelectItem value="jashore">Jashore</SelectItem>
                          <SelectItem value="jhalakathi">Jhalakathi</SelectItem>
                          <SelectItem value="jhenaidah">Jhenaidah</SelectItem>
                          <SelectItem value="joypurhat">Joypurhat</SelectItem>
                          <SelectItem value="khagrachhari">
                            Khagrachhari
                          </SelectItem>
                          <SelectItem value="khulna">Khulna</SelectItem>
                          <SelectItem value="kishoreganj">
                            Kishoreganj
                          </SelectItem>
                          <SelectItem value="kurigram">Kurigram</SelectItem>
                          <SelectItem value="kushtia">Kushtia</SelectItem>
                          <SelectItem value="lakshmipur">Lakshmipur</SelectItem>
                          <SelectItem value="lalmonirhat">
                            Lalmonirhat
                          </SelectItem>
                          <SelectItem value="madaripur">Madaripur</SelectItem>
                          <SelectItem value="magura">Magura</SelectItem>
                          <SelectItem value="manikganj">Manikganj</SelectItem>
                          <SelectItem value="meherpur">Meherpur</SelectItem>
                          <SelectItem value="moulvibazar">
                            Moulvibazar
                          </SelectItem>
                          <SelectItem value="munshiganj">Munshiganj</SelectItem>
                          <SelectItem value="mymensingh">Mymensingh</SelectItem>
                          <SelectItem value="naogaon">Naogaon</SelectItem>
                          <SelectItem value="narail">Narail</SelectItem>
                          <SelectItem value="narayanganj">
                            Narayanganj
                          </SelectItem>
                          <SelectItem value="narsingdi">Narsingdi</SelectItem>
                          <SelectItem value="natore">Natore</SelectItem>
                          <SelectItem value="netrokona">Netrokona</SelectItem>
                          <SelectItem value="nilphamari">Nilphamari</SelectItem>
                          <SelectItem value="noakhali">Noakhali</SelectItem>
                          <SelectItem value="pabna">Pabna</SelectItem>
                          <SelectItem value="panchagarh">Panchagarh</SelectItem>
                          <SelectItem value="patuakhali">Patuakhali</SelectItem>
                          <SelectItem value="pirojpur">Pirojpur</SelectItem>
                          <SelectItem value="rajbari">Rajbari</SelectItem>
                          <SelectItem value="rajshahi">Rajshahi</SelectItem>
                          <SelectItem value="rangamati">Rangamati</SelectItem>
                          <SelectItem value="rangpur">Rangpur</SelectItem>
                          <SelectItem value="shatkhira">Satkhira</SelectItem>
                          <SelectItem value="shariatpur">Shariatpur</SelectItem>
                          <SelectItem value="sherpur">Sherpur</SelectItem>
                          <SelectItem value="sirajganj">Sirajganj</SelectItem>
                          <SelectItem value="sunamganj">Sunamganj</SelectItem>
                          <SelectItem value="sylhet">Sylhet</SelectItem>
                          <SelectItem value="tangail">Tangail</SelectItem>
                          <SelectItem value="thakurgaon">Thakurgaon</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="presentUpazila"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Upazila/Thana{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="presentPostOffice"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Post Office{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="presentPostCode"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Post Code{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-11/12 z-0 relative p-8 my-6 m-auto  flex flex-col justify-center border border-gray-300 rounded-md">
                <div className="w-[94%] z-10 absolute m-auto -top-2 bg-[#84B995] p-1 rounded-lg">
                  <p className="text-white text-xs font-bold">
                    Permanent Address
                  </p>
                </div>
                <FormField
                  name="permanentVillage"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Village/Road/House{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="permanentDistrict"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/2 text-right">
                        District <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <Select
                        className="w-1/2"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="bagerhat">Bagerhat</SelectItem>
                          <SelectItem value="bandarban">Bandarban</SelectItem>
                          <SelectItem value="barguna">Barguan</SelectItem>
                          <SelectItem value="barisal">Barisal</SelectItem>
                          <SelectItem value="bhola">Bhola</SelectItem>
                          <SelectItem value="bogura">Bogura</SelectItem>
                          <SelectItem value="brahmanbaria">
                            Brahmanbaria
                          </SelectItem>
                          <SelectItem value="chandpur">Chandpur</SelectItem>
                          <SelectItem value="chapainawabganj">
                            Chapainawabganj
                          </SelectItem>
                          <SelectItem value="chattogram">Chattogram</SelectItem>
                          <SelectItem value="chuadanga">Chuadanga</SelectItem>
                          <SelectItem value="coxsbazar">Coxsbazar</SelectItem>
                          <SelectItem value="cumilla">Cumilla</SelectItem>
                          <SelectItem value="dhaka">Dhaka</SelectItem>
                          <SelectItem value="dinajpur">Dinajpur</SelectItem>
                          <SelectItem value="faridpur">Faridpur</SelectItem>
                          <SelectItem value="feni">Feni</SelectItem>
                          <SelectItem value="gaibandha">Gaibandha</SelectItem>
                          <SelectItem value="gazipur">Gazipur</SelectItem>
                          <SelectItem value="gopalganj">Gopalganj</SelectItem>
                          <SelectItem value="habiganj">Habiganj</SelectItem>
                          <SelectItem value="jamalpur">Jamalpur</SelectItem>
                          <SelectItem value="jashore">Jashore</SelectItem>
                          <SelectItem value="jhalakathi">Jhalakathi</SelectItem>
                          <SelectItem value="jhenaidah">Jhenaidah</SelectItem>
                          <SelectItem value="joypurhat">Joypurhat</SelectItem>
                          <SelectItem value="khagrachhari">
                            Khagrachhari
                          </SelectItem>
                          <SelectItem value="khulna">Khulna</SelectItem>
                          <SelectItem value="kishoreganj">
                            Kishoreganj
                          </SelectItem>
                          <SelectItem value="kurigram">Kurigram</SelectItem>
                          <SelectItem value="kushtia">Kushtia</SelectItem>
                          <SelectItem value="lakshmipur">Lakshmipur</SelectItem>
                          <SelectItem value="lalmonirhat">
                            Lalmonirhat
                          </SelectItem>
                          <SelectItem value="madaripur">Madaripur</SelectItem>
                          <SelectItem value="magura">Magura</SelectItem>
                          <SelectItem value="manikganj">Manikganj</SelectItem>
                          <SelectItem value="meherpur">Meherpur</SelectItem>
                          <SelectItem value="moulvibazar">
                            Moulvibazar
                          </SelectItem>
                          <SelectItem value="munshiganj">Munshiganj</SelectItem>
                          <SelectItem value="mymensingh">Mymensingh</SelectItem>
                          <SelectItem value="naogaon">Naogaon</SelectItem>
                          <SelectItem value="narail">Narail</SelectItem>
                          <SelectItem value="narayanganj">
                            Narayanganj
                          </SelectItem>
                          <SelectItem value="narsingdi">Narsingdi</SelectItem>
                          <SelectItem value="natore">Natore</SelectItem>
                          <SelectItem value="netrokona">Netrokona</SelectItem>
                          <SelectItem value="nilphamari">Nilphamari</SelectItem>
                          <SelectItem value="noakhali">Noakhali</SelectItem>
                          <SelectItem value="pabna">Pabna</SelectItem>
                          <SelectItem value="panchagarh">Panchagarh</SelectItem>
                          <SelectItem value="patuakhali">Patuakhali</SelectItem>
                          <SelectItem value="pirojpur">Pirojpur</SelectItem>
                          <SelectItem value="rajbari">Rajbari</SelectItem>
                          <SelectItem value="rajshahi">Rajshahi</SelectItem>
                          <SelectItem value="rangamati">Rangamati</SelectItem>
                          <SelectItem value="rangpur">Rangpur</SelectItem>
                          <SelectItem value="satkhira">Satkhira</SelectItem>
                          <SelectItem value="shariatpur">Shariatpur</SelectItem>
                          <SelectItem value="sherpur">Sherpur</SelectItem>
                          <SelectItem value="sirajganj">Sirajganj</SelectItem>
                          <SelectItem value="sunamganj">Sunamganj</SelectItem>
                          <SelectItem value="sylhet">Sylhet</SelectItem>
                          <SelectItem value="tangail">Tangail</SelectItem>
                          <SelectItem value="thakurgaon">Thakurgaon</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="permanentUpazila"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Upazila/Thana{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="permanentPostOffice"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Post Office{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="permanentPostCode"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Post Code{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-11/12 z-0 relative p-8 my-6 m-auto  flex flex-col justify-center border border-gray-300 rounded-md">
                <div className="w-[94%] z-10 absolute m-auto -top-2 bg-[#84B995] p-1 rounded-lg">
                  <p className="text-white text-xs font-bold">Home Address</p>
                </div>
                <FormField
                  name="homeVillage"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Village/Road/House{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="homeDistrict"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/2 text-right">
                        District <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <Select
                        className="w-1/2"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="bagerhat">Bagerhat</SelectItem>
                          <SelectItem value="bandarban">Bandarban</SelectItem>
                          <SelectItem value="barguna">Barguan</SelectItem>
                          <SelectItem value="barisal">Barisal</SelectItem>
                          <SelectItem value="bhola">Bhola</SelectItem>
                          <SelectItem value="bogura">Bogura</SelectItem>
                          <SelectItem value="brahmanbaria">
                            Brahmanbaria
                          </SelectItem>
                          <SelectItem value="chandpur">Chandpur</SelectItem>
                          <SelectItem value="chapainawabganj">
                            Chapainawabganj
                          </SelectItem>
                          <SelectItem value="chattogram">chattogram</SelectItem>
                          <SelectItem value="chuadanga">Chuadanga</SelectItem>
                          <SelectItem value="coxsbazar">Coxsbazar</SelectItem>
                          <SelectItem value="cumilla">Cumilla</SelectItem>
                          <SelectItem value="dhaka">Dhaka</SelectItem>
                          <SelectItem value="dinajpur">Dinajpur</SelectItem>
                          <SelectItem value="faridpur">Faridpur</SelectItem>
                          <SelectItem value="feni">Feni</SelectItem>
                          <SelectItem value="gaibandha">Gaibandha</SelectItem>
                          <SelectItem value="gazipur">Gazipur</SelectItem>
                          <SelectItem value="gopalganj">Gopalganj</SelectItem>
                          <SelectItem value="habiganj">Habiganj</SelectItem>
                          <SelectItem value="jamalpur">Jamalpur</SelectItem>
                          <SelectItem value="jashore">Jashore</SelectItem>
                          <SelectItem value="jhalakathi">Jhalakathi</SelectItem>
                          <SelectItem value="jhenaidah">Jhenaidah</SelectItem>
                          <SelectItem value="joypurhat">Joypurhat</SelectItem>
                          <SelectItem value="khagrachhari">
                            Khagrachhari
                          </SelectItem>
                          <SelectItem value="khulna">Khulna</SelectItem>
                          <SelectItem value="kishoreganj">
                            Kishoreganj
                          </SelectItem>
                          <SelectItem value="kurigram">Kurigram</SelectItem>
                          <SelectItem value="kushtia">Kushtia</SelectItem>
                          <SelectItem value="lakshmipur">Lakshmipur</SelectItem>
                          <SelectItem value="lalmonirhat">
                            Lalmonirhat
                          </SelectItem>
                          <SelectItem value="madaripur">Madaripur</SelectItem>
                          <SelectItem value="magura">Magura</SelectItem>
                          <SelectItem value="manikganj">Manikganj</SelectItem>
                          <SelectItem value="meherpur">Meherpur</SelectItem>
                          <SelectItem value="moulvibazar">
                            Moulvibazar
                          </SelectItem>
                          <SelectItem value="munshiganj">Munshiganj</SelectItem>
                          <SelectItem value="mymensingh">Mymensingh</SelectItem>
                          <SelectItem value="naogaon">Naogaon</SelectItem>
                          <SelectItem value="narail">Narail</SelectItem>
                          <SelectItem value="narayanganj">
                            Narayanganj
                          </SelectItem>
                          <SelectItem value="narsingdi">Narsingdi</SelectItem>
                          <SelectItem value="natore">Natore</SelectItem>
                          <SelectItem value="netrokona">Netrokona</SelectItem>
                          <SelectItem value="nilphamari">Nilphamari</SelectItem>
                          <SelectItem value="noakhali">Noakhali</SelectItem>
                          <SelectItem value="pabna">Pabna</SelectItem>
                          <SelectItem value="panchagarh">Panchagarh</SelectItem>
                          <SelectItem value="patuakhali">Patuakhali</SelectItem>
                          <SelectItem value="pirojpur">Pirojpur</SelectItem>
                          <SelectItem value="rajbari">Rajbari</SelectItem>
                          <SelectItem value="rajshahi">Rajshahi</SelectItem>
                          <SelectItem value="rangamati">Rangamati</SelectItem>
                          <SelectItem value="rangpur">Rangpur</SelectItem>
                          <SelectItem value="satkhira">Satkhira</SelectItem>
                          <SelectItem value="shariatpur">Shariatpur</SelectItem>
                          <SelectItem value="sherpur">Sherpur</SelectItem>
                          <SelectItem value="sirajganj">Sirajganj</SelectItem>
                          <SelectItem value="sunamganj">Sunamganj</SelectItem>
                          <SelectItem value="sylhet">Sylhet</SelectItem>
                          <SelectItem value="tangail">Tangail</SelectItem>
                          <SelectItem value="thakurgaon">Thakurgaon</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="homeUpazila"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Upazila/Thana{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="homePostOffice"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Post Office{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="homePostCode"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Post Code{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-11/12 z-0 relative p-8 my-6 m-auto  flex flex-col justify-center border border-gray-300 rounded-md">
                <div className="w-[94%] z-10 absolute m-auto -top-2 bg-[#84B995] p-1 rounded-lg">
                  <p className="text-white text-xs font-bold">
                    SSC/Equivalent Level
                  </p>
                </div>
                <FormField
                  name="sscExamName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/2 text-right">
                        Examination{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <Select
                        className="w-1/2"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ssc">S.S.C</SelectItem>
                          <SelectItem value="dakhil">Dakhil</SelectItem>
                          <SelectItem value="vocational">Vocational</SelectItem>
                          <SelectItem value="equivalent">
                            S.S.C Equivalent
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="sscBoard"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/2 text-right">
                        Board <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <Select
                        className="w-1/2"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="barishal">Barishal</SelectItem>
                          <SelectItem value="chittagong">Chittagong</SelectItem>
                          <SelectItem value="cumilla">Cumilla</SelectItem>
                          <SelectItem value="dinajpur">Dinajpur</SelectItem>
                          <SelectItem value="jashore">Jashore</SelectItem>
                          <SelectItem value="madrasah">Madrasah</SelectItem>
                          <SelectItem value="rajshahi">Rajshahi</SelectItem>
                          <SelectItem value="sylhet">Sylhet</SelectItem>
                          <SelectItem value="open">Open University</SelectItem>
                          <SelectItem value="bteb">
                            Bangladesh Technical Education Board
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sscRoll"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Roll No <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sscInstitute"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        School/Institute{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sscResult"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        SSC Result{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <div className="w-2/3 flex flex-col justify-start">
                        {" "}
                        {/* Container for input and select */}
                        {grade ? (
                          <FormControl>
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="Enter CGPA"
                              {...field}
                            />
                          </FormControl>
                        ) : (
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select Grade" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="firstDivision">
                                  1st Division
                                </SelectItem>
                                <SelectItem value="secondDivision">
                                  2nd Division
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                        )}
                        <Button
                          className="w-32 mt-0.5 border border-box border-gray-400"
                          type="button"
                          variant="outline"
                          onClick={() => setGrade(!grade)}
                        >
                          Switch to {grade ? "Division" : "CGPA"}
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sscGroup"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/2 text-right">
                        Group/Subject{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <Select
                        className="w-1/2"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="business">
                            Business Studies
                          </SelectItem>
                          <SelectItem value="general">General</SelectItem>
                          <SelectItem value="humanities">Humanities</SelectItem>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sscPassingYear"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/2 text-right">
                        Passing Year{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <Select
                        className="w-1/2"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1995">1995</SelectItem>
                          <SelectItem value="1996">1996</SelectItem>
                          <SelectItem value="1997">1997</SelectItem>
                          <SelectItem value="1998">1998</SelectItem>
                          <SelectItem value="1999">1999</SelectItem>
                          <SelectItem value="2000">2000</SelectItem>
                          <SelectItem value="2001">2001</SelectItem>
                          <SelectItem value="2002">2002</SelectItem>
                          <SelectItem value="2003">2003</SelectItem>
                          <SelectItem value="2004">2004</SelectItem>
                          <SelectItem value="2005">2005</SelectItem>
                          <SelectItem value="2006">2006</SelectItem>
                          <SelectItem value="2007">2007</SelectItem>
                          <SelectItem value="2008">2008</SelectItem>
                          <SelectItem value="2009">2009</SelectItem>
                          <SelectItem value="2010">2010</SelectItem>
                          <SelectItem value="2012">2012</SelectItem>
                          <SelectItem value="2013">2013</SelectItem>
                          <SelectItem value="2014">2014</SelectItem>
                          <SelectItem value="2015">2015</SelectItem>
                          <SelectItem value="2016">2016</SelectItem>
                          <SelectItem value="2017">2017</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-11/12 z-0 relative p-8 my-6 m-auto  flex flex-col justify-center border border-gray-300 rounded-md">
                <div className="w-[94%] z-10 absolute m-auto -top-2 bg-[#84B995] p-1 rounded-lg">
                  <p className="text-white text-xs font-bold">
                    HSC/Equivalent Level
                  </p>
                </div>
                <FormField
                  control={form.control}
                  name="hseExamName"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/2 text-right">
                        Examination{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <Select
                        className="w-1/2"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="hsc">H.S.C</SelectItem>
                          <SelectItem value="diploma">Diploma</SelectItem>
                          <SelectItem value="equivalent">
                            {" "}
                            Equivalent
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="hscBoard"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/2 text-right">
                        Board <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <Select
                        className="w-1/2"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="barishal">Barishal</SelectItem>
                          <SelectItem value="chittagong">Chittagong</SelectItem>
                          <SelectItem value="cumilla">Cumilla</SelectItem>
                          <SelectItem value="dinajpur">Dinajpur</SelectItem>
                          <SelectItem value="jashore">Jashore</SelectItem>
                          <SelectItem value="madrasah">Madrasah</SelectItem>
                          <SelectItem value="rajshahi">Rajshahi</SelectItem>
                          <SelectItem value="sylhet">Sylhet</SelectItem>
                          <SelectItem value="open">Open University</SelectItem>
                          <SelectItem value="bteb">
                            Bangladesh Technical Education Board
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="hscRoll"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Roll No <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="hscInstitute"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        College/Institute{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="hscResult"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        HSC Result{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <div className="w-2/3 flex flex-col justify-start">
                        {" "}
                        {/* Container for input and select */}
                        {hscGrade ? (
                          <FormControl>
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="Enter CGPA"
                              {...field}
                            />
                          </FormControl>
                        ) : (
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select Grade" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="firstDivision">
                                  1st Division
                                </SelectItem>
                                <SelectItem value="secondDivision">
                                  2nd Division
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                        )}
                        <Button
                          className="w-32 mt-0.5 border border-box border-gray-400"
                          type="button"
                          variant="outline"
                          onClick={() => setHSCGrade(!hscGrade)}
                        >
                          Switch to {hscGrade ? "Division" : "CGPA"}
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="hscGroup"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/2 text-right">
                        Group/Subject{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <Select
                        className="w-1/2"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="business">
                            Business Studies
                          </SelectItem>
                          <SelectItem value="general">General</SelectItem>
                          <SelectItem value="humanities">Humanities</SelectItem>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="civil">Civil</SelectItem>
                          <SelectItem value="computer">Computer</SelectItem>
                          <SelectItem value="electrical">Electrical</SelectItem>
                          <SelectItem value="mechanical">Mechanical</SelectItem>
                          <SelectItem value="textile">Textile</SelectItem>
                          <SelectItem value="power">Power</SelectItem>
                          <SelectItem value="machatronics">
                            Machatronics
                          </SelectItem>
                          <SelectItem value="marine">Marine</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="hscPassingYear"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/2 text-right">
                        Passing Year{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <Select
                        className="w-1/2"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1995">1995</SelectItem>
                          <SelectItem value="1996">1996</SelectItem>
                          <SelectItem value="1997">1997</SelectItem>
                          <SelectItem value="1998">1998</SelectItem>
                          <SelectItem value="1999">1999</SelectItem>
                          <SelectItem value="2000">2000</SelectItem>
                          <SelectItem value="2001">2001</SelectItem>
                          <SelectItem value="2002">2002</SelectItem>
                          <SelectItem value="2003">2003</SelectItem>
                          <SelectItem value="2004">2004</SelectItem>
                          <SelectItem value="2005">2005</SelectItem>
                          <SelectItem value="2006">2006</SelectItem>
                          <SelectItem value="2007">2007</SelectItem>
                          <SelectItem value="2008">2008</SelectItem>
                          <SelectItem value="2009">2009</SelectItem>
                          <SelectItem value="2010">2010</SelectItem>
                          <SelectItem value="2012">2012</SelectItem>
                          <SelectItem value="2013">2013</SelectItem>
                          <SelectItem value="2014">2014</SelectItem>
                          <SelectItem value="2015">2015</SelectItem>
                          <SelectItem value="2016">2016</SelectItem>
                          <SelectItem value="2018">2018</SelectItem>
                          <SelectItem value="2019">2019</SelectItem>
                          <SelectItem value="2020">2020</SelectItem>
                          <SelectItem value="2021">2021</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-11/12 z-0 relative p-8 my-6 m-auto  flex flex-col justify-center border border-gray-300 rounded-md">
                <div className="w-[94%] z-10 absolute m-auto -top-2 bg-[#84B995] p-1 rounded-lg">
                  <p className="text-white text-xs font-bold">
                    Graduation/Equivalent Level
                  </p>
                </div>
                <FormField
                  control={form.control}
                  name="graduationName"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/2 text-right">
                        Examination{" "}
                        <span className="text-red-900 text-sm">*</span>{" "}
                      </FormLabel>
                      <Select
                        className="w-1/2"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="bscEng">
                            B.Sc Engineering
                          </SelectItem>
                          <SelectItem value="honors">Honors</SelectItem>
                          <SelectItem value="fazil"> Fazil</SelectItem>
                          <SelectItem value="bba"> B.B.A</SelectItem>
                          <SelectItem value="mbbs"> M.B.B.S/B.D.S</SelectItem>
                          <SelectItem value="graduationEquivalent">
                            {" "}
                            Graduation Equivalent
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="graduationSubject"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Subject/Degree{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="graduationVersity"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Univerisy/Institute{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="graduationResult"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Graduation Result{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <div className="w-2/3 flex flex-col justify-start">
                        {" "}
                        {/* Container for input and select */}
                        {graduationGrade ? (
                          <FormControl>
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="Enter CGPA"
                              {...field}
                            />
                          </FormControl>
                        ) : (
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select Grade" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="firstDivision">
                                  1st Division
                                </SelectItem>
                                <SelectItem value="secondDivision">
                                  2nd Division
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                        )}
                        <Button
                          className="w-32 mt-0.5 border border-box border-gray-400"
                          type="button"
                          variant="outline"
                          onClick={() => setGraduationGrade(!graduationGrade)}
                        >
                          Switch to {graduationGrade ? "Division" : "CGPA"}
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="graduationPassingYear"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/2 text-right">
                        Passing Year{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <Select
                        className="w-1/2"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1995">1995</SelectItem>
                          <SelectItem value="1996">1996</SelectItem>
                          <SelectItem value="1997">1997</SelectItem>
                          <SelectItem value="1998">1998</SelectItem>
                          <SelectItem value="1999">1999</SelectItem>
                          <SelectItem value="2000">2000</SelectItem>
                          <SelectItem value="2001">2001</SelectItem>
                          <SelectItem value="2002">2002</SelectItem>
                          <SelectItem value="2003">2003</SelectItem>
                          <SelectItem value="2004">2004</SelectItem>
                          <SelectItem value="2005">2005</SelectItem>
                          <SelectItem value="2006">2006</SelectItem>
                          <SelectItem value="2007">2007</SelectItem>
                          <SelectItem value="2008">2008</SelectItem>
                          <SelectItem value="2009">2009</SelectItem>
                          <SelectItem value="2010">2010</SelectItem>
                          <SelectItem value="2012">2012</SelectItem>
                          <SelectItem value="2013">2013</SelectItem>
                          <SelectItem value="2014">2014</SelectItem>
                          <SelectItem value="2015">2015</SelectItem>
                          <SelectItem value="2016">2016</SelectItem>
                          <SelectItem value="2018">2018</SelectItem>
                          <SelectItem value="2019">2019</SelectItem>
                          <SelectItem value="2020">2020</SelectItem>
                          <SelectItem value="2021">2021</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="graduationCourseDuration"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/2 text-right">
                        Course Duration{" "}
                        <span className="text-red-900 text-xs">*</span>
                      </FormLabel>
                      <Select
                        className="w-1/2"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-11/12 z-0 relative p-8 my-6 m-auto  flex flex-col justify-center border border-gray-300 rounded-md">
                <div className="w-[94%] z-10 absolute m-auto -top-2 bg-[#84B995] p-1 rounded-lg">
                  <p className="text-white text-xs font-bold">
                    Masters/Equivalent Level
                  </p>
                </div>
                <FormField
                  control={form.control}
                  name="masterName"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/2 text-right">
                        Examination
                      </FormLabel>
                      <Select
                        className="w-1/2"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ma">M.A</SelectItem>
                          <SelectItem value="mss">M.S.S</SelectItem>
                          <SelectItem value="kamil"> Kamail</SelectItem>
                          <SelectItem value="msc">M.Sc</SelectItem>
                          <SelectItem value="mba">M.B.A</SelectItem>
                          <SelectItem value="masterEquivalent">
                            {" "}
                            Master Equivalent
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="masterSubject"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Subject/Degree
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="masterUniversity"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Univerisy/Institute
                      </FormLabel>
                      <FormControl className="w-2/3">
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="masterResult"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/3 text-right">
                        Graduation Result{" "}
                        <span className="text-red-900 text-sm">*</span>
                      </FormLabel>
                      <div className="w-2/3 flex flex-col justify-start">
                        {" "}
                        {/* Container for input and select */}
                        {masterGrade ? (
                          <FormControl>
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="Enter CGPA"
                              {...field}
                            />
                          </FormControl>
                        ) : (
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select Grade" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="firstDivision">
                                  1st Division
                                </SelectItem>
                                <SelectItem value="secondDivision">
                                  2nd Division
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                        )}
                        <Button
                          className="w-32 mt-0.5 border border-box border-gray-400"
                          type="button"
                          variant="outline"
                          onClick={() => setmasterGrade(!masterGrade)}
                        >
                          Switch to {masterGrade ? "Division" : "CGPA"}
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="masterPassingYear"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/2 text-right">
                        Passing Year
                      </FormLabel>
                      <Select
                        className="w-1/2"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1995">1995</SelectItem>
                          <SelectItem value="1996">1996</SelectItem>
                          <SelectItem value="1997">1997</SelectItem>
                          <SelectItem value="1998">1998</SelectItem>
                          <SelectItem value="1999">1999</SelectItem>
                          <SelectItem value="2000">2000</SelectItem>
                          <SelectItem value="2001">2001</SelectItem>
                          <SelectItem value="2002">2002</SelectItem>
                          <SelectItem value="2003">2003</SelectItem>
                          <SelectItem value="2004">2004</SelectItem>
                          <SelectItem value="2005">2005</SelectItem>
                          <SelectItem value="2006">2006</SelectItem>
                          <SelectItem value="2007">2007</SelectItem>
                          <SelectItem value="2008">2008</SelectItem>
                          <SelectItem value="2009">2009</SelectItem>
                          <SelectItem value="2010">2010</SelectItem>
                          <SelectItem value="2012">2012</SelectItem>
                          <SelectItem value="2013">2013</SelectItem>
                          <SelectItem value="2014">2014</SelectItem>
                          <SelectItem value="2015">2015</SelectItem>
                          <SelectItem value="2016">2016</SelectItem>
                          <SelectItem value="2018">2018</SelectItem>
                          <SelectItem value="2019">2019</SelectItem>
                          <SelectItem value="2020">2020</SelectItem>
                          <SelectItem value="2021">2021</SelectItem>
                          <SelectItem value="2022">2022</SelectItem>
                          <SelectItem value="2023">2023</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="masterCourseDuration"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                      <FormLabel className="w-1/2 text-right">
                        Course Duration
                      </FormLabel>
                      <Select
                        className="w-1/2"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="1.6">1.6</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="2.6">2.6</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {highClass ? (
                  <Button
                    className="w-1/4 text-white justify-center"
                    onClick={() => setHighClass(!highClass)}
                  >
                    Add Education
                  </Button>
                ) : null}
              </div>

              {highClass ? null : (
                <div className="w-11/12 z-0 relative p-8 my-6 m-auto  flex flex-col justify-center border border-gray-300 rounded-md">
                  <div className="w-[94%] z-10 absolute m-auto -top-2 bg-[#84B995] p-1 rounded-lg">
                    <p className="text-white text-xs font-bold">
                      Another Higher Class /Equivalent Level
                    </p>
                  </div>
                  <FormField
                    control={form.control}
                    name="otherCourseName"
                    render={({ field }) => (
                      <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                        <FormLabel className="w-1/3 text-right">
                          Examination
                        </FormLabel>
                        <FormControl className="w-2/3">
                          <Input type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="otherCourseSubject"
                    render={({ field }) => (
                      <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                        <FormLabel className="w-1/3 text-right">
                          Subject/Degree
                        </FormLabel>
                        <FormControl className="w-2/3">
                          <Input type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="otherCourseUniversity"
                    render={({ field }) => (
                      <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                        <FormLabel className="w-1/3 text-right">
                          Univerisy/Institute
                        </FormLabel>
                        <FormControl className="w-2/3">
                          <Input type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="otherCourseResult"
                    render={({ field }) => (
                      <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                        <FormLabel className="w-1/3 text-right">
                          Others Result{" "}
                          <span className="text-red-900 text-sm">*</span>
                        </FormLabel>
                        <div className="w-2/3 flex flex-col justify-start">
                          {" "}
                          {/* Container for input and select */}
                          {otherGrade ? (
                            <FormControl>
                              <Input
                                type="number"
                                step="0.1"
                                placeholder="Enter CGPA"
                                {...field}
                              />
                            </FormControl>
                          ) : (
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Grade" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="firstDivision">
                                    1st Division
                                  </SelectItem>
                                  <SelectItem value="secondDivision">
                                    2nd Division
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                          )}
                          <Button
                            className="w-32 mt-0.5 border border-box border-gray-400"
                            type="button"
                            variant="outline"
                            onClick={() => setOtherGrade(!otherGrade)}
                          >
                            Switch to {otherGrade ? "Division" : "CGPA"}
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="otherPassingYear"
                    render={({ field }) => (
                      <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                        <FormLabel className="w-1/2 text-right">
                          Passing Year
                        </FormLabel>
                        <Select
                          className="w-1/2"
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1995">1995</SelectItem>
                            <SelectItem value="1996">1996</SelectItem>
                            <SelectItem value="1997">1997</SelectItem>
                            <SelectItem value="1998">1998</SelectItem>
                            <SelectItem value="1999">1999</SelectItem>
                            <SelectItem value="2000">2000</SelectItem>
                            <SelectItem value="2001">2001</SelectItem>
                            <SelectItem value="2002">2002</SelectItem>
                            <SelectItem value="2003">2003</SelectItem>
                            <SelectItem value="2004">2004</SelectItem>
                            <SelectItem value="2005">2005</SelectItem>
                            <SelectItem value="2006">2006</SelectItem>
                            <SelectItem value="2007">2007</SelectItem>
                            <SelectItem value="2008">2008</SelectItem>
                            <SelectItem value="2009">2009</SelectItem>
                            <SelectItem value="2010">2010</SelectItem>
                            <SelectItem value="2012">2012</SelectItem>
                            <SelectItem value="2013">2013</SelectItem>
                            <SelectItem value="2014">2014</SelectItem>
                            <SelectItem value="2015">2015</SelectItem>
                            <SelectItem value="2016">2016</SelectItem>
                            <SelectItem value="2018">2018</SelectItem>
                            <SelectItem value="2019">2019</SelectItem>
                            <SelectItem value="2020">2020</SelectItem>
                            <SelectItem value="2021">2021</SelectItem>
                            <SelectItem value="2022">2022</SelectItem>
                            <SelectItem value="2023">2023</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="otherCourseDuration"
                    render={({ field }) => (
                      <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                        <FormLabel className="w-1/2 text-right">
                          Course Duration
                        </FormLabel>
                        <Select
                          className="w-1/2"
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="1.6">1.6</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="2.6">2.6</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              <div className="w-11/12 z-0 relative p-8 my-6 m-auto  flex flex-col justify-center border border-gray-300 rounded-md">
                <div className="w-[94%] z-10 absolute m-auto -top-2 bg-[#84B995] p-1 rounded-lg">
                  <p className="text-white text-xs font-bold">
                    Job Experiences
                  </p>
                </div>
                {studentCategoryOne ? (
                  <div>
                    <FormField
                      control={form.control}
                      name="experiedOrganizationOne"
                      render={({ field }) => (
                        <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                          <FormLabel className="w-1/3 text-right">
                            Organization{" "}
                            <span className="text-red-900 text-sm">*</span>
                          </FormLabel>
                          <FormControl className="w-2/3">
                            <Input type="text" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="experiedDesignationOne"
                      render={({ field }) => (
                        <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                          <FormLabel className="w-1/3 text-right">
                            Designation{" "}
                            <span className="text-red-900 text-sm">*</span>
                          </FormLabel>
                          <FormControl className="w-2/3">
                            <Input type="text" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="experiedOrganizationAddressOne"
                      render={({ field }) => (
                        <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                          <FormLabel className="w-1/3 text-right">
                            Address{" "}
                            <span className="text-red-900 text-sm">*</span>
                          </FormLabel>
                          <FormControl className="w-2/3">
                            <Input type="text" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex w-[100%] flex-row justify-evenly items-center">
                      <div className="flex flex-row justify-evenly items-center w-[70%] pl-10">
                        <FormField
                          control={form.control}
                          name="experiedStartDateOne"
                          render={({ field }) => (
                            <FormItem className="flex flex-row justify-center gap-1 items-center w-1/2">
                              <FormLabel className="w-1/3 text-right flex items-center">
                                Start Date{" "}
                                <span className="text-red-900 text-sm">*</span>
                              </FormLabel>
                              <FormControl className="w-2/3">
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="experiedEndDateOne"
                          render={({ field }) => (
                            <FormItem className="flex flex-row justify-center gap-1 items-center w-1/2">
                              <FormLabel className="w-1/3 text-right flex items-center">
                                Start Date{" "}
                                <span className="text-red-900 text-sm">*</span>
                              </FormLabel>
                              <FormControl className="w-2/3">
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <FormField
                      control={form.control}
                      name="experiedDescriptionOne"
                      render={({ field }) => (
                        <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                          <FormLabel className="w-1/3 text-right">
                            Job Description{" "}
                            <span className="text-red-900 text-sm">*</span>
                          </FormLabel>
                          <FormControl className="w-2/3">
                            <Textarea {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {studentCategoryTwo ? null : (
                      <Button
                        className="w-1/4 text-white justify-center"
                        onClick={() =>
                          setStudentCategoryTwo(!studentCategoryTwo)
                        }
                      >
                        Add Experience
                      </Button>
                    )}
                  </div>
                ) : (
                  <Button
                    className="w-1/4 text-white justify-center"
                    onClick={() => setStudentCategoryOne(!studentCategoryOne)}
                  >
                    Add Experience
                  </Button>
                )}
              </div>

              {studentCategoryTwo ? (
                <div className="w-11/12 z-0 relative p-8 my-6 m-auto  flex flex-col justify-center border border-gray-300 rounded-md">
                  <div className="w-[94%] z-10 absolute m-auto -top-2 bg-[#84B995] p-1 rounded-lg">
                    <p className="text-white text-xs font-bold">
                      Job Experiences Field Two
                    </p>
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="experiedOrganizationTwo"
                      render={({ field }) => (
                        <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                          <FormLabel className="w-1/3 text-right">
                            Organization{" "}
                            <span className="text-red-900 text-sm">*</span>
                          </FormLabel>
                          <FormControl className="w-2/3">
                            <Input type="text" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="experiedDesignationTwo"
                      render={({ field }) => (
                        <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                          <FormLabel className="w-1/3 text-right">
                            Designation{" "}
                            <span className="text-red-900 text-sm">*</span>
                          </FormLabel>
                          <FormControl className="w-2/3">
                            <Input type="text" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="experiedOrganizationAddressTwo"
                      render={({ field }) => (
                        <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                          <FormLabel className="w-1/3 text-right">
                            Address{" "}
                            <span className="text-red-900 text-sm">*</span>
                          </FormLabel>
                          <FormControl className="w-2/3">
                            <Input type="text" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex w-[100%] flex-row justify-center items-center">
                      <div className="flex flex-row justify-center w-[72%] pl-11">
                        <FormField
                          control={form.control}
                          name="experiedStartDateTwo"
                          render={({ field }) => (
                            <FormItem className="flex flex-row justify-center gap-1 items-center w-1/2">
                              <FormLabel className="w-1/3 text-right flex items-center">
                                Start Date{" "}
                                <span className="text-red-900 text-sm">*</span>
                              </FormLabel>
                              <FormControl className="w-2/3">
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="experiedEndDateTwo"
                          render={({ field }) => (
                            <FormItem className="flex flex-row justify-center gap-1 items-center w-1/2">
                              <FormLabel className="w-1/3 text-right flex items-center">
                                Start Date{" "}
                                <span className="text-red-900 text-sm">*</span>
                              </FormLabel>
                              <FormControl className="w-2/3">
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <FormField
                      control={form.control}
                      name="experiedDescriptionTwo"
                      render={({ field }) => (
                        <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                          <FormLabel className="w-1/3 text-right">
                            Job Description{" "}
                            <span className="text-red-900 text-sm">*</span>
                          </FormLabel>
                          <FormControl className="w-2/3">
                            <Textarea {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {studentCategoryThree ? null : (
                      <Button
                        className="w-1/4 text-white justify-center"
                        onClick={() =>
                          setStudentCategoryThree(!studentCategoryThree)
                        }
                      >
                        Add Experience
                      </Button>
                    )}
                  </div>
                </div>
              ) : null}

              {studentCategoryThree ? (
                <div className="w-11/12 z-0 relative p-8 my-6 m-auto  flex flex-col justify-center border border-gray-300 rounded-md">
                  <div className="w-[94%] z-10 absolute m-auto -top-2 bg-[#84B995] p-1 rounded-lg">
                    <p className="text-white text-xs font-bold">
                      Job Experiences Field Three
                    </p>
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="experiedOrganizationThree"
                      render={({ field }) => (
                        <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                          <FormLabel className="w-1/3 text-right">
                            Organization{" "}
                            <span className="text-red-900 text-sm">*</span>
                          </FormLabel>
                          <FormControl className="w-2/3">
                            <Input type="text" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="experiedDesignationThree"
                      render={({ field }) => (
                        <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                          <FormLabel className="w-1/3 text-right">
                            Designation{" "}
                            <span className="text-red-900 text-sm">*</span>
                          </FormLabel>
                          <FormControl className="w-2/3">
                            <Input type="text" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="experiedOrganizationAddressThree"
                      render={({ field }) => (
                        <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                          <FormLabel className="w-1/3 text-right">
                            Address{" "}
                            <span className="text-red-900 text-sm">*</span>
                          </FormLabel>
                          <FormControl className="w-2/3">
                            <Input type="text" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex w-[100%] flex-row justify-center items-center">
                      <div className="flex flex-row justify-center w-[72%] pl-11">
                        <FormField
                          control={form.control}
                          name="experiedStartDateThree"
                          render={({ field }) => (
                            <FormItem className="flex flex-row justify-center gap-1 items-center w-1/2">
                              <FormLabel className="w-1/3 text-right flex items-center">
                                Start Date{" "}
                                <span className="text-red-900 text-sm">*</span>
                              </FormLabel>
                              <FormControl className="w-2/3">
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="experiedEndDateThree"
                          render={({ field }) => (
                            <FormItem className="flex flex-row justify-center gap-1 items-center w-1/2">
                              <FormLabel className="w-1/3 text-right flex items-center">
                                Start Date{" "}
                                <span className="text-red-900 text-sm">*</span>
                              </FormLabel>
                              <FormControl className="w-2/3">
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <FormField
                      control={form.control}
                      name="experiedDescriptionThree"
                      render={({ field }) => (
                        <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                          <FormLabel className="w-1/3 text-right">
                            Job Description{" "}
                            <span className="text-red-900 text-sm">*</span>
                          </FormLabel>
                          <FormControl className="w-2/3">
                            <Textarea {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {studentCategoryFour ? null : (
                      <Button
                        className="w-1/4 text-white justify-center"
                        onClick={() =>
                          setStudentCategoryFour(!studentCategoryFour)
                        }
                      >
                        Add Experience
                      </Button>
                    )}
                  </div>
                </div>
              ) : null}

              {studentCategoryFour ? (
                <div className="w-11/12 z-0 relative p-8 my-6 m-auto  flex flex-col justify-center border border-gray-300 rounded-md">
                  <div className="w-[94%] z-10 absolute m-auto -top-2 bg-[#84B995] p-1 rounded-lg">
                    <p className="text-white text-xs font-bold">
                      Job Experiences Field Four
                    </p>
                  </div>
                  <FormField
                    control={form.control}
                    name="experiedOrganizationFour"
                    render={({ field }) => (
                      <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                        <FormLabel className="w-1/3 text-right">
                          Organization{" "}
                          <span className="text-red-900 text-sm">*</span>
                        </FormLabel>
                        <FormControl className="w-2/3">
                          <Input type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="experiedDesignationFour"
                    render={({ field }) => (
                      <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                        <FormLabel className="w-1/3 text-right">
                          Designation{" "}
                          <span className="text-red-900 text-sm">*</span>
                        </FormLabel>
                        <FormControl className="w-2/3">
                          <Input type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="experiedOrganizationAddressFour"
                    render={({ field }) => (
                      <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                        <FormLabel className="w-1/3 text-right">
                          Address{" "}
                          <span className="text-red-900 text-sm">*</span>
                        </FormLabel>
                        <FormControl className="w-2/3">
                          <Input type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex w-[100%] flex-row justify-center items-center">
                    <div className="flex flex-row justify-center w-[72%] pl-11">
                      <FormField
                        control={form.control}
                        name="experiedStartDateFour"
                        render={({ field }) => (
                          <FormItem className="flex flex-row justify-center gap-1 items-center w-1/2">
                            <FormLabel className="w-1/3 text-right flex items-center">
                              Start Date{" "}
                              <span className="text-red-900 text-sm">*</span>
                            </FormLabel>
                            <FormControl className="w-2/3">
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="experiedEndDateFour"
                        render={({ field }) => (
                          <FormItem className="flex flex-row justify-center gap-1 items-center w-1/2">
                            <FormLabel className="w-1/3 text-right flex items-center">
                              Start Date{" "}
                              <span className="text-red-900 text-sm">*</span>
                            </FormLabel>
                            <FormControl className="w-2/3">
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <FormField
                    control={form.control}
                    name="experiedDescriptionFour"
                    render={({ field }) => (
                      <FormItem className="flex flex-row justify-center gap-4 items-center w-11/12">
                        <FormLabel className="w-1/3 text-right">
                          Job Description{" "}
                          <span className="text-red-900 text-sm">*</span>
                        </FormLabel>
                        <FormControl className="w-2/3">
                          <Textarea {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ) : null}
              <div className="w-11/12 z-0 relative p-8 my-6 m-auto  flex flex-col justify-center border border-gray-300 rounded-md">
                <div className="w-[94%] z-10 absolute m-auto -top-2 bg-[#84B995] p-1 rounded-lg">
                  <p className="text-white text-xs font-bold">Add Avatar</p>
                </div>
                <div className="flex flex-col">
                  <div>
                    <Label htmlFor="profile">Profile Picture</Label>
                    <Input
                      id="profile"
                      onChange={profileHandleChange}
                      type="file"
                      name=""
                    />
                  </div>
                  <div>
                    <Label htmlFor="Signature">Signature</Label>
                    <Input
                      id="Signature"
                      onChange={signatureHandleChange}
                      type="file"
                      name=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Button
                  disabled={isSubmitting}
                  className="w-20  bg-emerald-700 hover:bg-emerald-800"
                  type="submit"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Register;
