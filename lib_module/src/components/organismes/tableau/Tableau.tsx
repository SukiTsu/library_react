import React, { useState } from "react";
import "../../../assets/css/tableau.css";
import { DEFAULT_TABLE_CONFIG } from "./Tableau_data"; // Importation de la configuration par défaut

interface TableProps {
  data: any[];
  columns: { field: string; label: string }[];
  config?: typeof DEFAULT_TABLE_CONFIG;
}

export default function Tableau({
  data,
  columns,
  config = DEFAULT_TABLE_CONFIG,
}: TableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string | null>(
    config.sorting.defaultField
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">(
    config.sorting.defaultOrder
  );
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  // Tri des données
  const handleSort = (field: string) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortField) return 0;
    const aVal = a[sortField];
    const bVal = b[sortField];
    if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
    if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
    return 0;
  });

  // Pagination
  const startIndex = (currentPage - 1) * config.pagination.rowsPerPage;
  const paginatedData = config.pagination.showPagination
    ? sortedData.slice(startIndex, startIndex + config.pagination.rowsPerPage)
    : sortedData;

  // Gestion de la sélection des lignes
  const handleRowSelect = (row: any) => {
    const isSelected = selectedRows.includes(row);
    const newSelectedRows = isSelected
      ? selectedRows.filter((r) => r !== row)
      : [...selectedRows, row];
    setSelectedRows(newSelectedRows);
    if (config.selectionEnabled && config.onRowSelect)
      config.onRowSelect(newSelectedRows);
  };

  return (
    <div className="table-container">
      <table className={config.styling.tableClassName}>
        <thead>
          <tr>
            {config.selectionEnabled && <th></th>}
            {columns.map((col) => (
              <th
                key={col.field}
                onClick={() => config.sortable && handleSort(col.field)}
                className={config.styling.headerClassName}
              >
                {col.label}
                {config.sortable && (
                  <span>
                    {sortField === col.field
                      ? sortOrder === "asc"
                        ? " 🔼"
                        : " 🔽"
                      : ""}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, idx) => (
            <tr key={idx} className={config.styling.rowClassName}>
              {config.selectionEnabled && (
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row)}
                    onChange={() => handleRowSelect(row)}
                  />
                </td>
              )}
              {columns.map((col) => (
                <td key={col.field} className={config.styling.cellClassName}>
                  {row[col.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {config.pagination.showPagination && (
        <div className="pagination-controls">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            Précédent
          </button>
          <span>Page {currentPage}</span>
          <button
            onClick={() =>
              setCurrentPage((p) =>
                startIndex + config.pagination.rowsPerPage < data.length
                  ? p + 1
                  : p
              )
            }
            disabled={startIndex + config.pagination.rowsPerPage >= data.length}
            className="pagination-btn"
          >
            Suivant
          </button>
        </div>
      )}
    </div>
  );
}
