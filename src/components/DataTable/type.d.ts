export type ColumnType = "text" | "multiline";

export type Column<T extends object> = {
  field: keyof T;
  header: React.ReactNode | string;
  width?: React.CSSProperties["width"];
  type?: "text" | "multiline" | "status";
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

export type DataGridProps<T extends object> = {
  columns: Array<Column<T>>;
  data: T[];
  title?: string;
  pageSize?: number;
  showCheckbox?: boolean;
  showActions?: boolean;
  onRowEdit?: (row: T, index: number) => void;
  onRowSelect?: (selected: Set<number>) => void;
};
