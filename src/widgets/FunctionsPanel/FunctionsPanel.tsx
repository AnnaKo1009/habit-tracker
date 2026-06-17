import { type FC } from "react";
import { FunctionsPanelUI } from "./ui/FunctionsPanel";
import { useAppDispatch } from "../../hooks/hooks";
import { useCallback } from "react";
import { addHabit } from "../../store/habitsSlice";

export interface FunctionsPanelProps {
  className?: string;
  onDateChange: (date: Date) => void;
}

export const FunctionsPanel: FC<FunctionsPanelProps> = ({
  className,
  onDateChange,
}) => {
  const dispatch = useAppDispatch();
  
  const handleAddHabit = useCallback(
    (name: string, startDate?: string) => {
      if (!name.trim()) return;
      const newHabit = {
        id: crypto.randomUUID(),
        name: name.trim(),
        completed: false,
        completedDates: [],
        createdAt: new Date().toISOString().split("T")[0],
        startDate: startDate || new Date().toISOString().split("T")[0],
      };
      dispatch(addHabit(newHabit));
    },
    [dispatch],
  );

  return (
    <FunctionsPanelUI
      className={className}
      onAddHabit={handleAddHabit}
      onDateChange={onDateChange}
    />
  );
};
