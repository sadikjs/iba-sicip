'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import SeatDownloadExcel from './_components/SeatDownload';
export default function SeatPlanPage() {
  const [classrooms, setClassrooms] = useState(null)

  const fetchClassrooms = async () => {
    try {
      const response = await fetch('/api/exam-center');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setClassrooms(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-row justify-center items-center gap-2'>
        <Button onClick={fetchClassrooms}>Seat Plan</Button>
        <SeatDownloadExcel />
      </div>
      {classrooms && (
        <table className='flex flex-col py-2 pb-6'>
          <thead className=''>
            <tr className='grid grid-cols-7 border border-gray-200 font-semibold'>
              <td className=' py-2 px-4'>SL</td>
              <td className='border-l border-gray-200 py-2 px-4'>Building</td>
              <td className='border-l border-gray-200 py-2 px-4'>Floor</td>
              <td className='border-l border-gray-200 py-2 px-4'>Room No</td>
              <td className='border-l border-gray-200 py-2 px-4'>Start Roll</td>
              <td className='border-l border-gray-200 py-2 px-4'>End Roll</td>
              <td className='border-l border-gray-200 py-2 px-4'>Capacity</td>
            </tr>
          </thead>
          {classrooms.map((classroom, index) => (
            <tbody key={index}>
              <tr className='grid grid-cols-7 border-x border-b  border-gray-200'>
                <td className=' py-2 px-4'>{classroom.serialNumber}</td>
                <td className='border-l border-gray-200 py-2 px-4'>{classroom.building}</td>
                <td className='border-l border-gray-200 py-2 px-4'>{classroom.floor}</td>
                <td className='border-l border-gray-200 py-2 px-4'>{classroom.roomNumber}</td>
                <td className='border-l border-gray-200 py-2 px-4'>{classroom.startRoll}</td>
                <td className='border-l border-gray-200 py-2 px-4'>{classroom.endRoll}</td>
                <td className='border-l border-gray-200 py-2 px-4'>{classroom.capacity}</td>
              </tr>
            </tbody>
          ))}
        </table>
      )}
    </div>
  );
}
