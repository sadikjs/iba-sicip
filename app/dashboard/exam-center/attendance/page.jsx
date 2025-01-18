import { getAttendance } from "@/queries";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";
const AttendancePage = async () => {
    const attendances = await getAttendance();
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h3 className="font-bold">Download each room wise attendance sheet</h3>
            <div className="w-8/12 flex flex-col border border-gray-200 mt-2">
                {
                    attendances && attendances.map((atten) => (
                        <div className="w-10/12 flex flex-col justify-center items-center m-auto">
                            <ul>
                                <li key={atten.roomNumber} className="grid grid-cols-3 p-2 border-b border-x border-gray-200">
                                    <p className="text-center pr-1">Room Number </p>
                                    <p className="border-l border-gray-200 text-center">{atten.roomNumber}</p>
                                    <Link className="border-l border-gray-200 flex justify-center items-center" href={`/dashboard/exam-center/attendance/${atten?.id}`}>
                                        <ArrowDownToLine className="text-center" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default AttendancePage