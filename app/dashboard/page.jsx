import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getUserByEmail } from "@/queries";
import React from 'react';
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DownloadExcel from "./_components/Download";
//csv download 

const DashboardPage = async () => {
  const session = await auth();
  if (!session?.user) redirect("/login");
  const instructor = await getUserByEmail(session.user.email);
  if (instructor?.role !== "instructor") redirect("/login");


  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {/* total courses */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Export Excel file </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <DownloadExcel />
            </div>
          </CardContent>
        </Card>
        {/* total enrollments */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              IBA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">PGD-GB</div>
          </CardContent>
        </Card>
        {/* total revinue */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sicip</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Sicip</div>
          </CardContent>
        </Card>
      </div>
      {/*  */}
    </div>
  );
};

export default DashboardPage;
