import type { IconType } from "react-icons";

// Child route definition for nested routes (relative paths and component reference)
export interface RoutesElementsI {
  id: number;
  title: string;
  Icon?: IconType;
  path: string;
  element: React.ComponentType<any>;
}

// Top-level route definition (may include nested children routes)
export interface RoutesI {
  id: number;
  path: string;
  title: string;
  Icon?: IconType;
  element: React.ComponentType<any>;
  children?: RoutesElementsI[];
}
