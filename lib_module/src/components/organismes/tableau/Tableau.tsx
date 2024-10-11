import React, { useState } from "react";
import "../../../assets/css/tableau.css";
import { DEFAULT_TABLE_CONFIG } from "./Tableau_data"; // Importation de la configuration par défaut

interface TableProps {
  data: any[];
  columns: { field: string; label: string }[];
  rowsPerPage?: number; // Propriété facultative pour le nombre de lignes par page
}

export default function Tableau({ data, columns, rowsPerPage }: TableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string | null>(
    DEFAULT_TABLE_CONFIG.sorting.defaultField
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">(
    DEFAULT_TABLE_CONFIG.sorting.defaultOrder
  );
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  // Gestion du tri
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

  // Pagination avec les lignes par page spécifiées
  const effectiveRowsPerPage =
    rowsPerPage || DEFAULT_TABLE_CONFIG.pagination.rowsPerPage; // Utilisation de `rowsPerPage` si fourni, sinon la valeur par défaut
  const startIndex = (currentPage - 1) * effectiveRowsPerPage;
  const paginatedData = DEFAULT_TABLE_CONFIG.pagination.showPagination
    ? sortedData.slice(startIndex, startIndex + effectiveRowsPerPage)
    : sortedData;

  return (
    <div className="table-container">
      <table className={DEFAULT_TABLE_CONFIG.styling.tableClassName}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.field}
                onClick={() =>
                  DEFAULT_TABLE_CONFIG.sortable && handleSort(col.field)
                }
                className={DEFAULT_TABLE_CONFIG.styling.headerClassName}
              >
                {col.label}
                {DEFAULT_TABLE_CONFIG.sortable && (
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
            <tr key={idx} className={DEFAULT_TABLE_CONFIG.styling.rowClassName}>
              {columns.map((col) => (
                <td
                  key={col.field}
                  className={DEFAULT_TABLE_CONFIG.styling.cellClassName}
                >
                  {row[col.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {DEFAULT_TABLE_CONFIG.pagination.showPagination && (
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
                startIndex + effectiveRowsPerPage < data.length ? p + 1 : p
              )
            }
            disabled={startIndex + effectiveRowsPerPage >= data.length}
            className="pagination-btn"
          >
            Suivant
          </button>
        </div>
      )}
    </div>
  );
}
