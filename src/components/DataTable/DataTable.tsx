import React, { useState } from "react";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import {
  MdChevronLeft,
  MdChevronRight,
  MdLocalPrintshop,
  MdModeEditOutline,
} from "react-icons/md";
import type { Column, DataGridProps } from "./type";

const DataTable: React.FC<DataGridProps> = ({
  columns,
  data,
  title = "Data Table",
  pageSize = 25,
  showCheckbox = true,
  showActions = true,
  onRowEdit,
  onRowSelect,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = data.slice(startIndex, endIndex);

  const handleSelectAll = (checked: boolean): void => {
    setSelectAll(checked);
    const newSelected = new Set<number>();

    if (checked) {
      const allIds = currentData.map((_, index) => startIndex + index);
      allIds.forEach((id) => newSelected.add(id));
    }

    setSelectedRows(newSelected);
    if (onRowSelect) {
      onRowSelect(newSelected);
    }
  };

  const handleRowSelect = (index: number, checked: boolean): void => {
    const newSelected = new Set(selectedRows);
    const actualIndex = startIndex + index;

    if (checked) {
      newSelected.add(actualIndex);
    } else {
      newSelected.delete(actualIndex);
    }

    setSelectedRows(newSelected);
    setSelectAll(newSelected.size === currentData.length);

    if (onRowSelect) {
      onRowSelect(newSelected);
    }
  };

  const handleEdit = (rowData: any, index: number): void => {
    if (onRowEdit) {
      onRowEdit(rowData, startIndex + index);
    }
  };

  const renderCellContent = (
    value: any,
    column: Column,
    row: any
  ): React.ReactNode => {
    if (column.render) {
      return column.render(value, row);
    }

    if (column.type === "status") {
      const isActive = value === "Active" || value === "Active Substitute";
      return (
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            isActive
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-600"
          }`}>
          {value}
        </span>
      );
    }

    if (column.type === "multiline") {
      const lines = String(value).split("\n");
      return (
        <div className="text-sm">
          {lines.map((line: string, idx: number) => (
            <div
              key={idx}
              className={idx === 0 ? "font-medium" : "text-gray-500"}>
              {line}
            </div>
          ))}
        </div>
      );
    }

    return value || "N/A";
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-xs sm:text-lg font-semibold text-icon-bg">
          {title}
        </h2>
        <div className="flex items-center sm:gap-2">
          <button className="p-2 hover:bg-gray-100 rounded" type="button">
            <IoIosSearch className="w-4 h-4 text-gray-500" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded" type="button">
            <FaCloudDownloadAlt className="w-4 h-4 text-gray-500" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded" type="button">
            <MdLocalPrintshop className="w-4 h-4 text-gray-500" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded" type="button">
            <BsFillGrid3X2GapFill className="w-4 h-4 text-gray-500" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded" type="button">
            <IoFilterSharp className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {showCheckbox && (
                <th className="w-8 px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
              )}
              {columns.map((column: Column, index: number) => (
                <th
                  key={index}
                  className="px-4 py-3 text-left text-[10px] text-nowrap sm:text-xs font-medium text-gray-500 uppercase tracking-wider"
                  style={{ width: column.width }}>
                  {column.header}
                </th>
              ))}
              {showActions && (
                <th className="w-16 px-4 py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentData.map((row: any, rowIndex: number) => (
              <tr
                key={rowIndex}
                className={`hover:bg-gray-50 text-nowrap ${
                  selectedRows.has(startIndex + rowIndex) ? "bg-blue-50" : ""
                }`}>
                {showCheckbox && (
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(startIndex + rowIndex)}
                      onChange={(e) =>
                        handleRowSelect(rowIndex, e.target.checked)
                      }
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                )}
                {columns.map((column: Column, colIndex: number) => (
                  <td
                    key={colIndex}
                    className="px-4 py-3 text-[10px] sm:text-sm text-icon-bg">
                    {renderCellContent(row[column.field], column, row)}
                  </td>
                ))}
                {showActions && (
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleEdit(row, rowIndex)}
                      className="p-1 text-links-acitve  hover:bg-hover-pink cursor-pointer rounded"
                      type="button">
                      <MdModeEditOutline className="w-4 h-4" />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer with Pagination */}
      <div className="flex items-center gap-1 justify-end px-4 py-3 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <span className="text-[10px] sm:text-sm text-gray-700 text-nowrap">
            Rows per page:
          </span>
          <select className="rounded  py-1 text-[10px] sm:text-sm">
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-[10px] sm:text-sm text-nowrap text-gray-700">
            {startIndex + 1}-{Math.min(endIndex, data.length)} of {data.length}
          </span>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              type="button">
              <MdChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              type="button">
              <MdChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
