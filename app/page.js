import Link from "next/link";
import { roboto_slab } from "./layout";
import { Dot } from "lucide-react";
import Image from "next/image";
import bannerImage from "@/public/assets/heading/Heading.png";
export default function Home() {
    return (
    <div className={`bg-[url('./../public/assets/background/body.jpg')] 
    ${roboto_slab.className} w-screen min-h-screen flex flex-col justify-center items-center`}>
      <div className={`w-4/5 flex px-7 py-6  justify-center items-center 
        bg-[url('./../public/assets/heading/isometric-grid.png')] 
        `}>
        <Image src={bannerImage} style={{ width: "100%", height: "auto" }} alt="Header image" />
      </div>
      <div className="w-4/5 bg-white flex flex-col justify-center mb-10 min-h-screen border-1 border-gray-200 shadow-md">
        <div className="px-7 py-5 leading-8 text-sm">
          <h1 className="font-bold text-[#F74E27]">BACKGROUND OF THE PROGRAM</h1>
          <p>Bangladesh has achieved notable success in many socio- economic areas and is moving towards a higher growth trajectory.
            The ready-made garment (RMG) industry is one of the largest contributors in that run.
            Despite being the largest exporter and one of the largest employers of the country,
            this sector is struggling to achieve its full potential due to an acute skill shortage in mid to
            top-level managers. To achieve the target of RMG exports, the Government has taken initiatives
            to produce a pool of skilled managers. To make this initiative successful,  the Institute of Business Administration (IBA),
            University of Dhaka with support from the Ministry of Finance, Government of Bangladesh, is
            offering a Post Graduate Diploma in Garment Business (PGD-GB).</p>
        </div>
        <div className="px-7 py-5 leading-8 text-sm">
          <h1 className="font-bold text-[#F74E27]">OBJECTIVES OF THE PROGRAM</h1>
          <p>To produce world-class managers for Garment Industry who will be able to incorporate industry best practices and be a change agent.</p>
        </div>
        <div className="px-7 py-5 leading-8 text-sm">
          <h1 className="font-bold text-[#F74E27]">COURSE PLAN</h1>
          <p>There will be three modules in the program. Each module will be three (3) months long.
            <span className="font-bold text-[#0388A6]"> The first module</span> will give the knowledge of basic management subjects focusing on the
            functional areas of business. <span className="font-bold text-[#0388A6]">In the second module </span> ,industry, and trade-related subjects will be taught
            by industry experts. <span className="font-bold text-[#0388A6]"> The third module </span> will be industry attachment.
            Classes will take place anytime during the weekends and/or evenings of
            the weekdays for <span className="font-bold text-[#0388A6]">Experienced Participants</span> . Classes for <span className="font-bold text-[#0388A6]">Fresher Participants</span>  will take
            place in the afternoon/evening of the weekdays and/or on anytime in the weekends.</p>
        </div>
        <div className="px-7 py-5 leading-8 text-sm">
          <h1 className="font-bold text-[#F74E27]">KEY RESOURCE PERSONS</h1>
          <p>The resource persons for the program comprise faculty members from IBA, University of Dhaka and other reputed universities. Leading and renowned practitioners
          from the industry will also conduct sessions on business and industry- related subjects.</p>
        </div>
        <div className="px-7 py-5  leading-8 text-sm flex flex-col">
          <h1 className="font-bold text-[#F74E27]">APPLICANT&rsquo;S ELIGIBILITY CRITERIA</h1>
          <div className="flex flex-row gap-x-2">
            <span className="text-2xl pt-1"><Dot /></span>
            <p>A bachelor&rsquo;s degree or its equivalent in any field of education with a minimum CGPA of 2.50 out of 4.0 or its equivalent for class/ division system;</p>
          </div>
          <div className="flex flex-row gap-x-2">
            <span className="text-2xl pt-1"><Dot /></span>
            <p>Minimum GPA of 3.00 out of 5.00 in both SSC and HSC examination or equivalent for class/ division system;</p>
          </div>
          <div className="flex flex-row gap-x-2">
            <span className="text-2xl pt-1"><Dot /></span>
            <p>For <span className="font-bold text-[#0388A6]">Experienced Applicants</span>, minimum 3 (three) years of work experience in the RMG sector is required;</p>
          </div>
          <div className="flex flex-row gap-x-2">
            <span className="text-2xl pt-1"><Dot /></span>
            <p>Candidates without work experience are eligible as <span className="font-bold text-[#0388A6]">Fresher Applicants</span> .</p>
          </div>
          <div className="flex flex-row gap-x-2">
            <span className="text-2xl pt-1"><Dot /></span>
            <p>Candidate&rsquo;s age shall not exceed 48 years as of the application date.</p>
          </div>
          <div className="flex flex-row gap-x-2">
            <span className="text-2xl pt-1"><Dot /></span>
            <p>Those, who were enrolled in any programs under SEIP before, are NOT eligible to apply.</p>
          </div>
          <h1 className="font-bold text-[#0388A6]">Females are encouraged to apply.</h1>
        </div>
        <div className="px-7 py-5  leading-8 text-sm">
          <h1 className="font-bold text-[#F74E27]">APPLICATION PROCEDURE</h1>
          <p>Candidates fulfilling the eligibility criteria should apply online using the prescribed application form by <span className="font-bold text-[#0388A6]">Monday, September 16, 2024</span> .
            Application Link: <Link className="font-bold text-[#0388A6]" href="https://sicip.iba-du.edu">https://sicip.iba-du.edu</Link>
            The Written Test of the shortlisted candidates will be held on <span className="font-bold text-[#0388A6]">Friday, September 20, 2024</span> .</p>
        </div>
        <div className="px-7 py-5  leading-8 text-sm">
          <h1 className="font-bold text-[#F74E27]">SELECTION PROCEDURE</h1>
          <p>The test consists of two components: Written Test and Interview.
            The applicant must obtain a minimum qualifying score to pass the written test to appear before the interview board.
            The final selection will be based on their performance in all the components.</p>
        </div>
        <div className="px-7 py-5  leading-8 text-sm">
          <h1 className="font-bold text-[#0388A6] italic">[Tuition fees will be fully waived and financial allowances will be provided to the successful candidates.]</h1>
        </div>
      </div>
      <div className="w-4/5 flex flex-row justify-between border-gray-300 border-t">
        <div className="flex flex-col px-7 py-5 leading-7">
          <h1 className="font-bold text-sm leading-7">CONTACT DETAILS</h1>
          <p className="text-[#808080] text-sm leading-7">For application and other information please contact:</p>
          <h2 className=" text-sm leading-7">PGD-GB Program Office</h2>
          <p className="text-[#808080] text-sm">Institute of Business Administration (IBA)</p>
          <p className="text-[#808080]text-sm">University of Dhaka, Dhaka 1000</p>
        </div>
        <div className="flex flex-col px-7 py-5 leading-7">
          <p>Cell: <span className="text-[#808080] text-sm"> +8801726-417629</span></p>
          <p>E-mail: <span className="text-[#808080] text-sm">sicip@iba-du.edu</span></p>
        </div>
      </div>
      <div className="w-4/5 my-2">
        <p className="px-7 py-1 italic text-sm">
          &#169; 2024 SICIP.IBA
        </p>
      </div>
    </div>
  );
}
