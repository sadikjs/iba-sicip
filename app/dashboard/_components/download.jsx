// app/page.js (Frontend Component)
'use client'; // Make it a client component
import { useState } from 'react';
 
const DownloadExcel = ()=> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleExport = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/csv-data');
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
      <button onClick={handleExport} disabled={loading}>
        {loading ? 'Exporting...': <span className='text-sm text-green-600 italic pointer-cursor'>Export Excel</span> }
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default DownloadExcel