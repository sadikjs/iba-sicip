
import { NextResponse } from 'next/server';
import dbConnect from '@/service/dbConnect';
import * as ExcelJS from 'exceljs';
import Register from '@/model/register-model';
export async function GET(request) {
    try {
      await dbConnect();
      const data = await Register.find({}).lean();
  
      if (!data || data.length === 0) {
        return NextResponse.json({ message: 'No data found' }, { status: 404 });
      }
  
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet1');
  
      const headers = Object.keys(data[0]);
      worksheet.addRow(headers);
  
      data.forEach((item) => {
        const rowData = headers.map(header => item[header]);
        worksheet.addRow(rowData);
      });
  
      // Write to buffer
      const buffer = await workbook.xlsx.writeBuffer();
  
      // Set headers for Excel download
      const headersResponse = new Headers();
      headersResponse.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      headersResponse.set('Content-Disposition', 'attachment; filename=exported_data.xlsx');
  
      return new NextResponse(buffer, { status: 200, headers: headersResponse });
  
    } catch (error) {
      console.error('Error exporting data:', error);
      return NextResponse.json({ message: 'Error exporting data' }, { status: 500 });
    }
  }