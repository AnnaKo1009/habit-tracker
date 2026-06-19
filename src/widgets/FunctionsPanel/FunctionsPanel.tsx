import { type FC } from "react";
import { FunctionsPanelUI } from "./ui/FunctionsPanel";
import { useAppDispatch } from "../../hooks/hooks";
import { useCallback } from "react";
import { addHabit } from "../../store/habitsSlice";

export interface FunctionsPanelProps {
  className?: string;
  onDateChange: (date: Date) => void;
  onAddHabit: () => void;
}

export const FunctionsPanel: FC<FunctionsPanelProps> = ({
  className,
  onDateChange,
  onAddHabit,
}) => {

  return (
    <FunctionsPanelUI
      className={className}
      onDateChange={onDateChange}
      onAddHabit={onAddHabit}
    />
  );
};
