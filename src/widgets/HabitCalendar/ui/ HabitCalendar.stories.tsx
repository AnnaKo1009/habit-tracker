import type { Meta, StoryObj } from '@storybook/react';
import { HabitCalendarUI } from './HabitCalendar';

const meta = {
    title: 'Widgets/HabitCalendarUI',
    component: HabitCalendarUI,
    tags: ['autodocs'],
} satisfies Meta<typeof HabitCalendarUI>;

export default meta;

export const Default: StoryObj<typeof HabitCalendarUI> = {
    args: {
        value: new Date(),
        onChange: (date) => console.log('Выбрана дата:', date),
    },
};