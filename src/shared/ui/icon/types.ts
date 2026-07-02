export interface IconProps {
  name:
    | "close"
    | "delete"
    | "edit"
    | "add"
    | "editProfile"
    | "pictEdit"
    | "stats"
    | "back"
    | "theme"
    | "today"
    | "best"
    | "progress"
    | "moon"
    | "sun";
  onClick?: () => void;
  className?: string;
  size?: number;
}
