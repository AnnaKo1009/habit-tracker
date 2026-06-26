export interface IconProps {
  name:
    | "close"
    | "delete"
    | "edit"
    | "add"
    | "editProfile"
    | "pictEdit"
    | "stats"
    | "theme"
    | "today"
    | "best"
    | "progress";
  onClick?: () => void;
  className?: string;
  size?: number;
}
