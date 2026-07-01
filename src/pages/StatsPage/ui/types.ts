import type { HabitProgressItemUIProps } from "../../../widgets/HabitProgress/ui/types";

export interface StatsPageUIProps {
    habits: HabitProgressItemUIProps[],
    valueToday: number,
    valueBest: number,
    progressValue: number,
    onReturnMain: () => void;
    onEditProfile: () => void;

}
