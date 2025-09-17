// Supported cell display types
export type ColumnType = "text" | "multiline" | "status";

// Column definition describing how to read & render a field from row T
export type Column<T extends object> = {
  field: keyof T; // key of T to display
  header: string | React.ReactNode; // column header label/node
  width?: React.CSSProperties["width"]; // optional fixed width
  type?: ColumnType; // simple render hint
  render?: (value: T[keyof T], row: T) => React.ReactNode; // custom cell renderer
};

// Props for the generic DataTable component
export type DataGridProps<T extends object> = {
  columns: Array<Column<T>>; // column schema
  data: T[]; // source rows
  title?: string; // table title (header)
  pageSize?: number; // rows per page (UI)
  showCheckbox?: boolean; // show selection column
  showActions?: boolean; // show actions column
  onRowEdit?: (row: T, index: number) => void; // edit callback (absolute index)
  onRowSelect?: (selected: Set<number>) => void; // selection change callback
};

// Toggle a single row selection by visible index
export type RowSelectHandler = (index: number, checked: boolean) => void;

// Invoke edit on a row with its data + visible index
export type RowEditHandler<T extends object> = (
  rowData: T,
  index: number
) => void;
