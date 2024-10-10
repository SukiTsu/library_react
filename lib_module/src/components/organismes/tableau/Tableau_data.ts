// config.ts

interface SortingConfig {
  defaultField: string | null;
  defaultOrder: "asc" | "desc";
}

interface PaginationConfig {
  rowsPerPage: number;
  showPagination: boolean;
}

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
  onRowSelect?: (selectedRows: any[]) => void; // Rendre `onRowSelect` optionnel
}

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
