import React, { useState } from "react";
import "../../../../assets/css/tableau.css";
import { DEFAULT_TABLE_CONFIG } from "./Tableau_data"; // Importation de la configuration par défaut

interface TableProps {
  data: any[];
  columns: { field: string; label: string }[];
  rowsPerPage?: number; // Propriété facultative pour le nombre de lignes par page
}

export default function Tableau({ data, columns, rowsPerPage }: TableProps) {
  // Gestion des états du composant
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string | null>(
    DEFAULT_TABLE_CONFIG.sorting.defaultField
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">(
    DEFAULT_TABLE_CONFIG.sorting.defaultOrder
  );
  const [selectedRows, setSelectedRows] = useState<any[]>([]); // Sélection des lignes
  const [selectedCells, setSelectedCells] = useState<
    { row: number; col: string }[]
  >([]); // Sélection des cellules

  // Fonction pour gérer le tri lorsque l'utilisateur clique sur une colonne
  const handleSort = (field: string) => {
    // Si l'utilisateur clique plusieurs fois sur la même colonne, l'ordre de tri est inversé
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);
  };

  // Tri des données en fonction du champ et de l'ordre sélectionné
  const sortedData = [...data].sort((a, b) => {
    if (!sortField) return 0; // Si aucun champ de tri n'est défini, on ne trie pas
    const aVal = a[sortField];
    const bVal = b[sortField];
    if (aVal > bVal) return sortOrder === "asc" ? 1 : -1; // Tri croissant ou décroissant
    if (aVal < bVal) return sortOrder === "asc" ? -1 : 1; // Inverser si l'ordre est descendant
    return 0;
  });

  // Gestion de la pagination
  const effectiveRowsPerPage =
    rowsPerPage || DEFAULT_TABLE_CONFIG.pagination.rowsPerPage; // Utilisation de `rowsPerPage` si fourni, sinon la valeur par défaut
  const startIndex = (currentPage - 1) * effectiveRowsPerPage;
  const paginatedData = DEFAULT_TABLE_CONFIG.pagination.showPagination
    ? sortedData.slice(startIndex, startIndex + effectiveRowsPerPage) // Découper les données pour afficher seulement les lignes de la page actuelle
    : sortedData; // Si la pagination est désactivée, on affiche toutes les données

  // Gestion de la sélection de lignes
  const handleRowSelect = (rowIndex: number) => {
    // Vérifie si la ligne est sélectionnée
    const isSelected = selectedRows.includes(rowIndex);
    // Filtrage des lignes sélectionnées (si elle est sélectionnée, on l'ajoute à une liste)
    const newSelectedRows = isSelected
      ? selectedRows.filter((index) => index !== rowIndex) // Retire la ligne sélectionnée si elle l'était déjà
      : [...selectedRows, rowIndex]; // Ajoute la ligne si elle n'était pas encore sélectionnée
    setSelectedRows(newSelectedRows);
  };

  // Gestion de la sélection de cellules
  const handleCellSelect = (rowIndex: number, colField: string) => {
    // Vérifie si la cellule à l'index `rowIndex` et la colonne `colField` est déjà sélectionnée
    const isSelected = selectedCells.some(
      (cell) => cell.row === rowIndex && cell.col === colField
    );
    // Filtrage des cellules sélectionnées (si elle est sélectionnée, on l'ajoute à une liste)
    const newSelectedCells = isSelected
      ? selectedCells.filter(
          (cell) => !(cell.row === rowIndex && cell.col === colField) // Retire la cellule sélectionnée si elle l'était déjà
        )
      : [...selectedCells, { row: rowIndex, col: colField }]; // Ajoute la cellule si elle n'était pas encore sélectionnée
    setSelectedCells(newSelectedCells);
  };

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
          {paginatedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${DEFAULT_TABLE_CONFIG.styling.rowClassName} ${
                selectedRows.includes(rowIndex) ? "selected-row" : ""
              }`}
              onClick={() => handleRowSelect(rowIndex)} // Sélection de ligne
            >
              {columns.map((col) => (
                <td
                  key={col.field}
                  className={`${DEFAULT_TABLE_CONFIG.styling.cellClassName} ${
                    selectedCells.some(
                      (cell) => cell.row === rowIndex && cell.col === col.field
                    )
                      ? "selected-cell"
                      : ""
                  }`} // Ajout de la classe "selected-cell" si la cellule est sélectionnée
                  // Gestion du clic sur une cellule
                  onClick={(e) => {
                    e.stopPropagation(); // Empêche l'événement de propagation lors de la sélection d'une cellule pour éviter la sélection de ligne
                    handleCellSelect(rowIndex, col.field); // Sélection de cellule
                  }}
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
