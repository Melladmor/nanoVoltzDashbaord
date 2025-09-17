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
import type {
  Column,
  DataGridProps,
  RowEditHandler,
  RowSelectHandler,
} from "./type";

const DataTable = <T extends object>({
  columns,
  data,
  title = "Data Table",
  pageSize = 25,
  showCheckbox = true,
  showActions = true,
  onRowEdit,
  onRowSelect,
}: DataGridProps<T>) => {
  // Pagination & selection state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [selectAll, setSelectAll] = useState<boolean>(false);

  // Derived pagination values
  const totalPages = Math.max(1, Math.ceil(data.length / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);
  const currentData = data.slice(startIndex, endIndex);

  // Toggle select all for current page
  const handleSelectAll = (checked: boolean): void => {
    setSelectAll(checked);
    const newSelected = new Set<number>();
    if (checked) {
      for (let i = 0; i < currentData.length; i++)
        newSelected.add(startIndex + i);
    }
    setSelectedRows(newSelected);
    onRowSelect?.(newSelected);
  };

  // Toggle single row selection
  const handleRowSelect: RowSelectHandler = (index, checked) => {
    const newSelected = new Set(selectedRows);
    const actualIndex = startIndex + index;
    checked ? newSelected.add(actualIndex) : newSelected.delete(actualIndex);
    setSelectedRows(newSelected);
    setSelectAll(
      newSelected.size === currentData.length && currentData.length > 0
    );
    onRowSelect?.(newSelected);
  };

  // Forward edit action to parent with absolute row index
  const handleEdit: RowEditHandler<T> = (rowData, index): void => {
    onRowEdit?.(rowData, startIndex + index);
  };

  // Cell renderer: custom, multiline, or raw value
  const renderCellContent = (
    value: T[keyof T],
    column: Column<T>,
    row: T
  ): React.ReactNode => {
    if (column.render) return column.render(value, row);

    if (column.type === "multiline") {
      const lines = String(value ?? "").split("\n");
      return (
        <div className="text-sm">
          {lines.map((line, idx) => (
            <div
              key={idx}
              className={idx === 0 ? "font-medium" : "text-gray-500"}>
              {line}
            </div>
          ))}
        </div>
      );
    }

    return (value as React.ReactNode) ?? "N/A";
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 px-4">
      {/* Header: title + quick action icons */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-xs sm:text-lg font-semibold text-icon-bg">
          {title}
        </h2>
        <div className="flex items-center sm:gap-2">
          {/* Placeholder actions (wire up onClick later) */}
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
              {/* Bulk-select column */}
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
              {/* Dynamic columns */}
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="px-4 py-3 text-left text-[10px] text-nowrap sm:text-xs font-medium text-gray-500 uppercase tracking-wider"
                  style={{ width: column.width }}>
                  {column.header}
                </th>
              ))}
              {/* Action column */}
              {showActions && (
                <th className="w-16 px-4 py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              )}
            </tr>
          </thead>

          {/* Data rows */}
          <tbody className="divide-y divide-gray-200">
            {currentData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`hover:bg-gray-50 text-nowrap ${
                  selectedRows.has(startIndex + rowIndex) ? "bg-blue-50" : ""
                }`}>
                {/* Per-row checkbox */}
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

                {/* Cells for each column */}
                {columns.map((column, colIndex) => {
                  const value = row[column.field];
                  return (
                    <td
                      key={colIndex}
                      className="px-4 py-3 text-[10px] sm:text-sm text-icon-bg">
                      {renderCellContent(value as T[keyof T], column, row)}
                    </td>
                  );
                })}

                {/* Row actions */}
                {showActions && (
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleEdit(row, rowIndex)}
                      className="p-1 text-links-acitve hover:bg-hover-pink cursor-pointer rounded"
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

      {/* Footer: pagination controls */}
      <div className="flex items-center gap-1 justify-end px-4 py-3 border-t border-gray-200">
        {/* Page size selector (UI only for now) */}
        <div className="flex items-center space-x-2">
          <span className="text-[10px] sm:text-sm text-gray-700 text-nowrap">
            Rows per page:
          </span>
          <select
            className="rounded py-1 text-[10px] sm:text-sm"
            value={pageSize}
            onChange={() => {}} // we can customize if we need dynamic pageSize
          >
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>

        {/* Page indicator + nav */}
        <div className="flex items-center space-x-4">
          <span className="text-[10px] sm:text-sm text-nowrap text-gray-700">
            {data.length === 0 ? 0 : startIndex + 1}-{endIndex} of {data.length}
          </span>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              type="button">
              <MdChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
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
