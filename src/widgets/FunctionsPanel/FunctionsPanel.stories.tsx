import type { Meta, StoryObj } from '@storybook/react';
import { FunctionsPanel } from './FunctionsPanel';

const meta = {
    title: 'Widgets/FunctionsPanel',
    component: FunctionsPanel,
    tags: ['autodocs'],
} satisfies Meta<typeof FunctionsPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onDateChange: (date) => console.log('Выбрана дата:', date),
        onAddHabit: () => alert('Добавить привычку'),
    },
};