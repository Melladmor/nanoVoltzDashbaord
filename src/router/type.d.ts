// Child route definition for nested routes (relative paths and component reference)
export interface RoutesElementsI {
  id: number;
  title: string;
  Icon?: React.ReactNode;
  path: string;
  element: React.ComponentType<any>;
  isActive: boolean;
}

// Top-level route definition (may include nested children routes)
export interface RoutesI {
  id: number;
  path: string;
  title: string;
  Icon?: React.ReactNode;
  element: React.ComponentType<any>;
  children?: RoutesElementsI[];
  isActive: boolean;
}
