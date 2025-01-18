import DownloadAttendance from "./_components/Attendance";
const AttendanceSingleRoom = async ({ params }) => {
    const id = (await params).id
    return (
        <div className="w-full flex flex-row justify-center mb-4 items-center">
            <DownloadAttendance id={id} />
        </div >
    );
}

export default AttendanceSingleRoom