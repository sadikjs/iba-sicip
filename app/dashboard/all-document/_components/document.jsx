"use client";
import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { Inter } from "next/font/google";

// Load Inter font with specific options
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Customize weights
  variable: "--font-inter", // Define a CSS variable for easy use
  display: "swap", // Ensures a smooth loading experience
});

import {
  useReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Mail,
  Phone,
  Search,
  User,
} from "lucide-react";
const columnsHelper = createColumnHelper();

//component start
const Document = ({ allData }) => {
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(allData);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });
  //delete api call
  const handleDelete = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/delete/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete user");
      // Remove the deleted user from the list
      setData((prevUsers) => prevUsers.filter((user) => user._id !== id));

      toast.success("User deleted successfully!");
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  //columns define
  const columns = [
    columnsHelper.accessor("serialNo", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => (
        <span className="flex items-center">
          <User className="mr-2" size={16} />
          SL
        </span>
      ),
    }),
    columnsHelper.accessor("roll", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => (
        <span className="flex items-center">
          <User className="mr-2" size={16} />
          Roll
        </span>
      ),
    }),
    columnsHelper.accessor("name", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => (
        <span className="flex items-center">
          <User className="mr-2" size={16} />
          Name
        </span>
      ),
    }),
    columnsHelper.accessor("email", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => (
        <span className="flex items-center">
          <Mail className="mr-2" size={16} />
          E-mail
        </span>
      ),
    }),
    columnsHelper.accessor("mobileNo", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => (
        <span className="flex items-center">
          <Phone className="mr-2" size={16} />
          Phone
        </span>
      ),
    }),
    columnsHelper.accessor("nid", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => (
        <span className="flex items-center">
          <Phone className="mr-2" size={16} />
          NID
        </span>
      ),
    }),
    columnsHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="space-x-2 flex flex-row">
          <Link
            href={`/dashboard/all-document/${row.original.id}`}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Edit
          </Link>
          <button
            disabled={loading}
            onClick={() => handleDelete(row.original.id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ),
    }),
  ];
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
      pagination,
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),

    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
  });

  return (
    <div
      className={`${inter.className} w-full flex flex-col min-h-screen max-w-4xl mx-auto py-12 px-2 sm:px-6 lg:px-8`}
    >
      <div className=" w-2/5 mb-4 relative">
        <input
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
      </div>
      <div className="overflow-x-auto  bg-white shadow-md rounded-lg">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="border border-gray-300 px-3 py-2"
                  >
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none flex items-center"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      <ArrowUpDown className="ml-2" size={14} />
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border border-gray-300 px-3 py-2"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm text-gray-700">
        <div className="flex items-center mb-4 sm:mb-0">
          <span className="mr-2">Items per page</span>
          <select
            className="border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="p-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronsLeft size={20} />
          </button>
          <span>
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>
          <button
            className="p-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronsRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Document;
