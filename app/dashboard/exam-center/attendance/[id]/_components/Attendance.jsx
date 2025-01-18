"use client"
import Image from "next/image";
import attendanceImage from "@/public/assets/heading/Heading.png"
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useState, useEffect } from "react";
import { Roboto_Slab } from 'next/font/google'

export const roboto_slab = Roboto_Slab({
    subsets: ['latin'],
    display: 'swap',
    style: ['normal'],
    weight: ['400']
})
const DownloadAttendance = ({ id }) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(data)
    let nextId = 1
    useEffect(() => {
        const fetchUser = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const res = await fetch(`/api/attendance/${id}`);
                if (!res.ok) {
                    const errorData = await res.json()
                    throw new Error(errorData?.message || `HTTP error! status: ${res.status}`);
                }
                const userData = await res.json();
                setData(userData.data); // Set the ISO string to state
            } catch (err) {
                console.error('Error fetching user:', err);
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
        return <div style={{ color: 'red' }}>Error: {error}</div>;
    }


    return (
        <>
            <div id="pdfContent" className={`${roboto_slab.className} w-10/12 flex flex-col justify-center items-center`}>
                <button
                    onClick={generatePdf}
                    className="bg-gray-900 text-white px-1 py-1 rounded hover:bg-gray-700 absolute top-20 right-5"
                >
                    Download
                </button>
                <Image src={attendanceImage}
                    width="83%"
                    height="auto"
                    alt="header image"
                    className="py-2"
                />
                <h2 className="text-xl py-2 font-semibold">Center: Dr. Mahbubur Rahman Mollah College, Matuail, Jatrabari, Dhaka.</h2>
                <div className="flex flex-row justify-center items-center gap-2 py-2">
                    <div className="flex flex-row justify-center items-center"><p>Building:</p><p>{data.building}</p>
                    </div>
                    <p>|</p>
                    <div className="flex flex-row justify-center items-center"><p>Floor:</p><p>{data.floor}</p>
                    </div>
                    <p>|</p>
                    <div className="flex flex-row justify-center items-center"><p>Room No:</p><p>{data.roomNumber}</p>
                    </div>
                    <p>|</p>
                    <div className="flex flex-row justify-center items-center"><p>Capacity:</p> <p>{data.capacity}</p>
                    </div>
                    <p>|</p>
                    <div className="flex flex-row justify-center items-center"><p>Roll:</p><p>{data.startRoll} <span>to</span>{data.startRoll}</p>
                    </div>
                </div>
                {data && (
                    <table className="py-2">
                        <thead>
                            <tr className="grid grid-cols-10 border border-gray-200">
                                <th className="px-4 py-2 col-span-1 text-center">SL</th>
                                <th className="border-l col-span-1 border-gray-200 px-4 py-2 text-center">Roll Number</th>
                                <th className="border-l col-span-2 border-gray-200 px-4 py-2 text-center">Photo</th>
                                <th className="border-l col-span-3 border-gray-200 px-4 py-2 text-center">Name</th>
                                <th className="border-l col-span-3 border-gray-200 px-4 py-2 text-center text-center">Signature</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.students.map((student) => (
                                <tr key={student.roll} className="grid grid-cols-10 w-full h-20 border border-gray-200">
                                    <td className="col-span-1 h-20 border-r border-gray-200 flex justify-center items-center">{nextId++}</td>
                                    <td className="col-span-1 h-20 border-r border-gray-200 flex justify-center items-center">{student?.roll}</td>
                                    <td className="col-span-2 h-20 border-r border-gray-200 flex justify-center items-center">
                                        <Image
                                            src={student?.profilePicture}
                                            alt={student?.name}
                                            width={80}
                                            height={80}
                                            className="rounded-sm m-auto"
                                        />
                                    </td>
                                    <td className=" col-span-3 px-4 h-20 border-r border-gray-200 flex justify-center items-center">{student?.name}</td>
                                    <td className="col-span-3 px-4"></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}
export default DownloadAttendance