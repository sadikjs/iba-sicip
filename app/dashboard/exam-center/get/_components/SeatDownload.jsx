
// app/page.js (Frontend Component)
'use client'; // Make it a client component
import { useState } from 'react';
import { Button } from '@/components/ui/button';
const SeatDownloadExcel = ()=> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleExport = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/seat-plan');
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message || 'Failed to export data');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'exported_data.xlsx');
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Export error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={handleExport} disabled={loading}>
        {loading ? 'Exporting...': <span className=' text-white pointer-cursor'>Export excel</span> }
      </Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default SeatDownloadExcel