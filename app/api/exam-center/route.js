import { NextResponse } from 'next/server';
import dbConnect from '@/service/dbConnect';
import Register from '@/model/register-model';
import ExamCenter from '@/model/exam-center';
// ... (Database connection function - connectToDatabase)


export async function POST(req) {
    try {
        const { capacityData } = await req.json(); // Receive capacity data from frontend

        if (!Array.isArray(capacityData) || capacityData.length === 0) {
            return NextResponse.json({ message: 'No capacity data provided.' }, { status: 400 });
        }

        await dbConnect();
        await ExamCenter.deleteMany({}); // Clear existing classrooms

        const students = await Register.find({}).sort({ roll: 1 }).lean();
        let studentIndex = 0;
        const classroomsToInsert = [];

        for (const roomData of capacityData) {
            const serialNumber = roomData.serialNumber;
            const building = roomData.building;
            const floor = roomData.floor;
            const roomNumber = roomData.roomNumber;
            const capacity = parseInt(roomData.capacity);

            if (isNaN(capacity) || capacity <= 0) {
                return NextResponse.json({ message: `Invalid capacity provided for ${roomNumber}. Capacity must be a positive number.` }, { status: 400 });
            }

            const classroomStudents = students.slice(studentIndex, Math.min(studentIndex + capacity, students.length)).map(student => student._id);

            const startRoll = students.length > 0 ? students[studentIndex]?.roll : null;
            const endRoll = students.length > 0 ? students[Math.min(studentIndex + capacity - 1, students.length - 1)]?.roll : null;

            classroomsToInsert.push({
                serialNumber: serialNumber,
                building: building,
                floor: floor,
                roomNumber: roomNumber,
                capacity: capacity,
                students: classroomStudents,
                startRoll: startRoll,
                endRoll: endRoll,
            });

            studentIndex += capacity;
            if (studentIndex >= students.length) break;
        }

        await ExamCenter.insertMany(classroomsToInsert);

        return NextResponse.json({ message: 'Students assigned to classrooms.' }, { status: 200 });
    } catch (error) {
        console.error('Error assigning students:', error);
        return NextResponse.json({ message: 'Failed to assign students.' }, { status: 500 });
    }
}

// API Route to Fetch Classrooms (app/api/classrooms/route.js)
export async function GET() {
    try {
        await dbConnect();
        const classrooms = await ExamCenter.find({}).populate('students').lean();
        return NextResponse.json(classrooms);
    } catch (error) {
        console.error('Error fetching classrooms:', error);
        return NextResponse.json({ message: 'Failed to fetch classrooms.' }, { status: 500 });
    }
}