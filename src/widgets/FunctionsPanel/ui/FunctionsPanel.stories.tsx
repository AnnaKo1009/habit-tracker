import type { Meta, StoryObj } from '@storybook/react';
import { FunctionsPanelUI } from './FunctionsPanel';

const meta = {
    title: 'Widgets/FunctionsPanelUI',
    component: FunctionsPanelUI,
    tags: ['autodocs'],
} satisfies Meta<typeof FunctionsPanelUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onDateChange: (date) => console.log('Выбрана дата:', date),
        onAddHabit: () => alert('Добавить привычку'),
    },
};