// config.ts

// Définition de la configuration pour le tri des colonnes
interface SortingConfig {
  defaultField: string | null;
  defaultOrder: "asc" | "desc";
}

// Définition de la configuration pour la pagination
interface PaginationConfig {
  rowsPerPage: number;
  showPagination: boolean;
}

// Interface principale pour la configuration du tableau
interface TableConfig {
  sortable: boolean;
  pagination: PaginationConfig;
  selectionEnabled: boolean;
  sorting: SortingConfig;
  styling: {
    tableClassName: string;
    headerClassName: string;
    rowClassName: string;
    cellClassName: string;
  };
  onRowSelect?: (selectedRows: any[]) => void;
}

// Configuration par défaut du tableau
export const DEFAULT_TABLE_CONFIG: TableConfig = {
  sortable: true,
  pagination: {
    rowsPerPage: 5,
    showPagination: true,
  },
  selectionEnabled: true,
  sorting: {
    defaultField: null,
    defaultOrder: "asc",
  },
  styling: {
    tableClassName: "table",
    headerClassName: "table-header",
    rowClassName: "table-row",
    cellClassName: "table-cell",
  },
};
