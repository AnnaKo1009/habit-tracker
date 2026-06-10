import type { Meta, StoryObj } from '@storybook/react';
import { HabitCalendar } from './HabitCalendar';

const meta = {
    title: 'Widgets/HabitCalendar',
    component: HabitCalendar,
    tags: ['autodocs'],
} satisfies Meta<typeof HabitCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Минимальный календарь
export const Default: Story = {
    args: {
        onDateChange: (date) => console.log('Выбрана дата:', date),
    },
};