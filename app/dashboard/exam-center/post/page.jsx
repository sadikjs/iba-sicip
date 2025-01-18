'use client';
import { useState } from 'react';
import { usePapaParse } from 'react-papaparse'; // For CSV parsing on frontend
import { Button } from '@/components/ui/button';
export default function ExamCenterPage() {
    const [capacityData, setCapacityData] = useState([]);
    const [assignStatus, setAssignStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { readString } = usePapaParse();

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            readString(file, {
                header: true,
                complete: (results) => {
                    setCapacityData(results.data);
                },
                error: (error) => {
                    console.error("CSV Parsing Error", error)
                }
            });
        }
    };

    const handleAssign = async () => {
        setIsLoading(true);
        setAssignStatus(null);
        try {
            const response = await fetch('/api/exam-center', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ capacityData }),
            });
            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setAssignStatus(data.message);
        } catch (error) {
            console.log('Assignment error:', error.message);
            setAssignStatus(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className='flex flex-col w-9/12 h-[400px] justify-center items-center m-auto border border-gray-200'>
            <div className='flex flex-col w-1/2 justify-start items-center border border-gray-600'>
                <input className='my-4' type="file" accept=".csv" onChange={handleFileUpload} />
                <Button className="m-2" onClick={handleAssign} disabled={isLoading || capacityData.length === 0}>
                    {isLoading ? <span className='text-green-500'>loading...</span> : <span>Submit</span>}
                </Button>
            </div>
            {assignStatus && <p>{assignStatus}</p>}
        </div>
    );
}