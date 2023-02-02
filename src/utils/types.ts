export type Rarety = "rare" | "epic" | "legendary";
export type Element = "inferno" | "flow" | "wind" | "shimmer";
export type Role = "fighter" | "support" | "defender" | "controller";

export interface Esper {
  id: number;
  name: string;
  deity: string;
  element: Element;
  rarety: Rarety;
  role: Role;
}

export interface Filter {
  rarety: Rarety[];
  element: Element[];
  role: Role[];
}
