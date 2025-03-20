"use client";
import Image from "next/image";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import bannerImage from "@/public/assets/heading/Heading.png";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
//font
import { Inter } from "next/font/google";

// Load Inter font with specific options
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Customize weights
  variable: "--font-inter", // Define a CSS variable for easy use
  display: "swap", // Ensures a smooth loading experience
});

const Profile = ({ id }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(data);
  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/profile/${id}`);
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(
            errorData?.message || `HTTP error! status: ${res.status}`
          );
        }
        const userData = await res.json();
        setData(userData); // Set the ISO string to state
      } catch (err) {
        console.error("Error fetching user:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (id) {
      fetchUser();
    }
  }, [id]);

  // Function to generate and download the PDF
  const generatePdf = async () => {
    const element = document.getElementById("pdfContent"); // The element to convert into PDF
    if (!element) {
      alert("Content to generate is missing!");
      return;
    }

    // Convert the element to a canvas
    const canvas = await html2canvas(element, { scale: 2 }); // Higher scale = better quality
    const imgData = canvas.toDataURL("image/png"); // Convert canvas to PNG

    // Create a new jsPDF instance
    const pdf = new jsPDF("p", "mm", "a4"); // Portrait, millimeters, A4 size

    // Calculate dimensions
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width; // Maintain aspect ratio

    // Add the image to the PDF
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    // Save the PDF
    pdf.save("generated-content.pdf");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
  }

  return (
    <>
      <button
        onClick={generatePdf}
        className="bg-gray-900 text-white px-1 py-1 rounded hover:bg-gray-700 absolute top-50 right-5"
      >
        Download PDF
      </button>
      <div
        id="pdfContent"
        className={`w-11/12 flex flex-col justify-center items-center py-6 ${inter.className}`}
      >
        <div className="w-11/12 flex justify-center items-center">
          <Image
            src={bannerImage}
            style={{ width: "90%", height: "auto" }}
            alt="profile banner"
          />
        </div>
        <h1 className="text-left p-3 justify-center font-semibold">
          Personal Information
        </h1>
        <table className="w-4/5 flex flex-row border-collapse border border-slate-900">
          <thead className="w-1/3 flex flex-col">
            <tr className="w-full flex flex-row justify-end  border-b border-slate-900">
              <td className="p-1.5">Name</td>
            </tr>
            <tr className="w-full flex flex-row justify-end  border-b border-slate-900">
              <td className="p-1.5">E-mail</td>
            </tr>
            <tr className="w-full flex flex-row justify-end  border-b border-slate-900">
              <td className="p-1.5">Mobile No</td>
            </tr>
            <tr className="w-full flex flex-row justify-end  border-b border-slate-900">
              <td className="p-1.5">Father&rsquo;s Name</td>
            </tr>
            <tr className="w-full flex flex-row justify-end  border-b border-slate-900">
              <td className="p-1.5">Mother&rsquo;s Name</td>
            </tr>
            <tr className="w-full flex flex-row justify-end  border-b border-slate-900">
              <td className="p-1.5">Gender</td>
            </tr>
            <tr className="w-full flex flex-row justify-end  border-b border-slate-900">
              <td className="p-1.5">Date of Birth</td>
            </tr>
            <tr className="w-full flex flex-row justify-end  border-b border-slate-900">
              <td className="p-1.5">Nationality</td>
            </tr>
            <tr className="w-full flex flex-row justify-end  border-b border-slate-900">
              <td className="p-1.5">NID No</td>
            </tr>
            <tr className="w-full flex flex-row justify-end  border-b border-slate-900">
              <td className="p-1.5">Home Mobile No</td>
            </tr>
            <tr className="w-full flex flex-row justify-end  border-b border-slate-900">
              <td className="p-1.5">Address</td>
            </tr>
            <tr className="w-full flex flex-row justify-end  border-b border-slate-900">
              <td className="p-1.5">Program Type</td>
            </tr>
            <tr className="w-full flex flex-row justify-end border-slate-900">
              <td className="p-1.5">Application Date-Time</td>
            </tr>
          </thead>
          <tbody className="w-1/3 flex flex-col">
            <tr className="w-full flex flex-row justify-start  border-x border-b border-slate-900">
              <td className="p-1.5">{data.name}</td>
            </tr>
            <tr className="w-full flex flex-row justify-start  border-x border-b border-slate-900">
              <td className="p-1.5">{data.email}</td>
            </tr>
            <tr className="w-full flex flex-row justify-start  border-x border-b border-slate-900">
              <td className="p-1.5">{data.mobileNo}</td>
            </tr>
            <tr className="w-full flex flex-row justify-start  border-x border-b border-slate-900">
              <td className="p-1.5">{data.fatherName}</td>
            </tr>
            <tr className="w-full flex flex-row justify-start  border-x border-b border-slate-900">
              <td className="p-1.5">{data.motherName}</td>
            </tr>
            <tr className="w-full flex flex-row justify-start  border-x border-b border-slate-900">
              <td className="p-1.5">
                {data.dateOfBirth
                  ? format(new Date(data.dateOfBirth), "PPP")
                  : "null"}
              </td>
            </tr>
            <tr className="w-full flex flex-row justify-start border-x border-b border-slate-900">
              <td className="p-1.5">{data.gender}</td>
            </tr>
            <tr className="w-full flex flex-row justify-start  border-x border-b border-slate-900">
              <td className="p-1.5">{data.nationality}</td>
            </tr>
            <tr className="w-full flex flex-row justify-start  border-x border-b border-slate-900">
              <td className="p-1.5">{data.nid}</td>
            </tr>
            <tr className="w-full flex flex-row justify-start  border-x border-b border-slate-900">
              <td className="p-1.5">{data.homeMobileNo}</td>
            </tr>
            <tr className="w-full flex flex-row justify-start  border-x border-b border-slate-900">
              <td className="p-1.5">{data.permanentVillage}</td>
            </tr>
            <tr className="w-full flex flex-row justify-start  border-x border-b border-slate-900">
              <td className="p-1.5">{data.studentCategory}</td>
            </tr>
            <tr className="w-full flex flex-row justify-start  border-x border-slate-900">
              <td className="p-1.5">{data.createdOn}</td>
            </tr>
          </tbody>
          <tbody className="w-1/3 flex flex-col">
            <tr className="w-full flex flex-col justify-center items-center border-b border-slate-900">
              <td>
                {data.profilePicture && (
                  <Image
                    className="rounded-sm pt-2"
                    src={data.profilePicture}
                    width={230}
                    height={270}
                    alt={data.name}
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </td>
              <td>Photo</td>
            </tr>
            <tr className="w-full flex flex-col justify-center items-center border-slate-900">
              <td>
                {data.signature && (
                  <Image
                    className="rounded-sm pt-1.5"
                    src={data.signature}
                    width={220}
                    height={200}
                    alt={data.name}
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </td>
              <td>Signature</td>
            </tr>
          </tbody>
        </table>
        <h2 className="text-left p-3 justify-center font-semibold">
          Education Qualifications
        </h2>
        <table className="w-4/5 flex flex-col border-collapse border-l border-r border-t border-slate-900">
          <thead>
            <tr className="grid grid-cols-9">
              <td className=" border-b border-slate-900 font-semibold">Exam</td>
              <td className="border-l border-b border-slate-900 font-semibold">
                Passing Year
              </td>
              <td className="border-l border-b border-slate-900 font-semibold">
                Result
              </td>
              <td className=" border-l border-b border-slate-900 col-span-3 text-center font-semibold">
                Major/Degree/Subject
              </td>
              <td className=" border-l border-b border-slate-900 col-span-3 text-center font-semibold">
                Institute
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="grid grid-cols-9">
              <td className=" border-b border-slate-900">{data.sscExamName}</td>
              <td className="border-l border-b border-slate-900">
                {data.sscPassingYear}
              </td>
              <td className="border-l border-b border-slate-900">
                {data.sscResult}
              </td>
              <td className="col-span-3 text-center border-l border-b border-slate-900">
                {data.sscGroup}
              </td>
              <td className=" col-span-3 text-center border-l border-b border-slate-900">
                {data.sscInstitute}
              </td>
            </tr>
            <tr className="grid grid-cols-9">
              <td className="border-b border-slate-900">{data.hseExamName}</td>
              <td className="border-l border-b border-slate-900">
                {data.hscPassingYear}
              </td>
              <td className="border-l border-b border-slate-900">
                {data.hscResult}
              </td>
              <td className="col-span-3 text-center border-l border-b border-slate-900">
                {data.hscGroup}
              </td>
              <td className="col-span-3 text-center border-l border-b border-slate-900 ">
                {data.hscInstitute}
              </td>
            </tr>
            <tr className="grid grid-cols-9">
              <td className="border-b border-slate-900">
                {data.graduationName}
              </td>
              <td className="border-l border-b border-slate-900">
                {data.graduationPassingYear}
              </td>
              <td className="border-l border-b border-slate-900">
                {data.graduationResult}
              </td>
              <td className="col-span-3 text-center border-l border-b border-slate-900">
                {data.graduationSubject}
              </td>
              <td className="col-span-3 text-center border-l border-b border-slate-900">
                {data.graduationVersity}
              </td>
            </tr>
            {data.masterName && (
              <tr className="grid grid-cols-9">
                <td className="border-b border-slate-900">{data.masterName}</td>
                <td className="border-l border-b border-slate-900">
                  {data.masterPassingYear}
                </td>
                <td className="border-l border-b border-slate-900">
                  {data.masterResult}
                </td>
                <td className="col-span-3 text-center border-l border-b border-slate-900">
                  {data.masterSubject}
                </td>
                <td className="col-span-3 text-center border-l border-b border-slate-900">
                  {data.masterUniversity}
                </td>
              </tr>
            )}
            {data.otherCourseName && (
              <tr className="grid grid-cols-9">
                <td className="border-b border-slate-900">
                  {data.otherCourseName}
                </td>
                <td className="border-l border-b border-slate-900">
                  {data.otherPassingYear}
                </td>
                <td className="border-l border-b border-slate-900">
                  {data.otherCourseResult}
                </td>
                <td className="col-span-3 text-center border-l border-b border-slate-900">
                  {data.otherCourseSubject}
                </td>
                <td className="col-span-3 text-center border-l border-b border-slate-900">
                  {data.otherCourseUniversity}
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <h2 className="text-left p-3 justify-center font-semibold">
          Employment History
        </h2>
        <table className="w-4/5 flex flex-col border-collapse border-l border-r border-t  border-slate-900">
          <thead>
            <tr className="grid grid-cols-12">
              <td className="col-span-2 border-b border-slate-900 font-semibold">
                Organization
              </td>
              <td className=" col-span-1 border-l border-b border-slate-900 font-semibold">
                Position Held
              </td>
              <td className=" col-span-2 border-l border-b border-slate-900 font-semibold">
                Starting Period
              </td>
              <td className=" col-span-2 border-l border-b border-slate-900 font-semibold">
                Ending Period
              </td>
              <td className=" col-span-3 text-center border-l border-b border-slate-900 font-semibold">
                Responsibilities
              </td>
              <td className="border-l border-b border-slate-900 font-semibold">
                Total Days
              </td>
              <td className=" border-l border-b border-slate-900 text-center font-semibold">
                Period in Years
              </td>
            </tr>
          </thead>
          <tbody>
            {data.experiedOrganizationOne && (
              <tr className="grid grid-cols-12">
                <td className="col-span-2 border-b border-slate-900">
                  {data.experiedOrganizationOne}
                </td>
                <td className="col-span-1 border-l border-b border-slate-900">
                  {data.experiedDesignationOne}
                </td>
                <td className="col-span-2 border-l border-b border-slate-900">
                  {data.experiedStartDateOne
                    ? format(new Date(data.experiedStartDateOne), "yyyy-MM-dd")
                    : null}
                </td>
                <td className="col-span-2 border-l border-b border-slate-900">
                  {data.experiedEndDateOne
                    ? format(new Date(data.experiedEndDateOne), "yyyy-MM-dd")
                    : null}
                </td>
                <td className="col-span-3 text-center border-l border-b border-slate-900">
                  {data.experiedDescriptionOne}
                </td>
                <td className="border-l border-b border-slate-900">
                  {data.oneExperienceTotalDays}
                </td>
                <td className="border-l border-b border-slate-900">
                  {parseInt(data.oneExperienceTotalDays / 365).toPrecision(2)}
                </td>
              </tr>
            )}
            {data.experiedOrganizationTwo && (
              <tr className="grid grid-cols-12">
                <td className="col-span-2 border-b border-slate-900">
                  {data.experiedOrganizationTwo}
                </td>
                <td className="col-span-1 border-l border-b border-slate-900">
                  {data.experiedDesignationTwo}
                </td>
                <td className="col-span-2 border-l border-b border-slate-900">
                  {data.experiedStartDateTwo
                    ? format(new Date(data.experiedStartDateTwo), "yyyy-MM-dd")
                    : null}
                </td>
                <td className="col-span-2 border-l border-b border-slate-900">
                  {data.experiedEndDateTwo
                    ? format(new Date(data.experiedEndDateTwo), "yyyy-MM-dd")
                    : null}
                </td>
                <td className="col-span-3 text-center border-l border-b border-slate-900">
                  {data.experiedDescriptionTwo}
                </td>
                <td className="border-l border-b border-slate-900">
                  {data.twoExperienceTotalDays}
                </td>
                <td className="border-l border-b border-slate-900">
                  {parseInt(data.twoExperienceTotalDays / 365).toPrecision(2)}
                </td>
              </tr>
            )}
            {data.experiedOrganizationThree && (
              <tr className="grid grid-cols-12">
                <td className="col-span-2 border-b border-slate-900">
                  {data.experiedOrganizationThree}
                </td>
                <td className="col-span-1 border-l border-b border-slate-900">
                  {data.experiedDesignationThree}
                </td>
                <td className="col-span-2 border-l border-b border-slate-900">
                  {data.experiedStartDateThree
                    ? format(
                        new Date(data.experiedStartDateThree),
                        "yyyy-MM-dd"
                      )
                    : null}
                </td>
                <td className="col-span-2 border-l border-b border-slate-900">
                  {data.experiedEndDateThree
                    ? format(new Date(data.experiedEndDateThree), "yyyy-MM-dd")
                    : null}
                </td>
                <td className="col-span-3 text-center border-l border-b border-slate-900">
                  {data.experiedDescriptionThree}
                </td>
                <td className="border-l border-b border-slate-900">
                  {data.threeExperienceTotalDays}
                </td>
                <td className="border-l border-b border-slate-900">
                  {parseInt(data.threeExperienceTotalDays / 365).toPrecision(2)}
                </td>
              </tr>
            )}
            {data.experiedOrganizationFour && (
              <tr className="grid grid-cols-12">
                <td className="col-span-2 border-b border-slate-900">
                  {data.experiedOrganizationFour}
                </td>
                <td className="col-span-1 border-l border-b border-slate-900">
                  {data.experiedDesignationFour}
                </td>
                <td className="col-span-2 border-l border-b border-slate-900">
                  {data.experiedStartDateFour
                    ? format(new Date(data.experiedStartDateFour), "yyyy-MM-dd")
                    : null}
                </td>
                <td className="col-span-2 border-l border-b border-slate-900">
                  {data.experiedEndDateFour
                    ? format(new Date(data.experiedEndDateFour), "yyyy-MM-dd")
                    : null}
                </td>
                <td className="col-span-3 text-center border-l border-b border-slate-900">
                  {data.experiedDescriptionFour}
                </td>
                <td className="border-l border-b border-slate-900">
                  {data.fourExperienceTotalDays}
                </td>
                <td className="border-l border-b border-slate-900">
                  {parseInt(data.fourExperienceTotalDays / 365).toPrecision(2)}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Profile;
