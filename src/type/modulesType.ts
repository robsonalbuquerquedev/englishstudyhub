export type ModuleLevel = "Básico" | "Intermediário" | "Avançado";

export type ModuleIcon =
  | "user"
  | "users"
  | "clock"
  | "utensils"
  | "plane"
  | "newspaper"
  | "globe"
  | "trophy"
  | "film"
  | "messageSquare"
  | "briefcase"
  | "calendar"
  | "cloudSun"
  | "messageCircle"
  | "compass";

export interface ModuleItem {
    title: string;
    link: string;
    level: ModuleLevel;
    icon: ModuleIcon;
}
