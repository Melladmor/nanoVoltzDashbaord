export interface Column {
  header: string;
  field: string;
  width?: string;
  type?: "text" | "status" | "multiline" | "custom";
  render?: (value: any, row: any) => React.ReactNode;
}

export interface DataGridProps {
  columns: Column[];
  data: any[];
  title?: string;
  pageSize?: number;
  showCheckbox?: boolean;
  showActions?: boolean;
  onRowEdit?: (rowData: any, index: number) => void;
  onRowSelect?: (selectedRows: Set<number>) => void;
}
