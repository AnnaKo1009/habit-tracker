import type { Meta, StoryObj } from '@storybook/react';
import { StatisticsWidgetUI } from './StatisticsWidget';

const meta = {
    title: 'Widgets/StatisticsWidgetUI',
    component: StatisticsWidgetUI,
    tags: ['autodocs'],
} satisfies Meta<typeof StatisticsWidgetUI>;

export default meta;
type Story = StoryObj<typeof StatisticsWidgetUI>;

export const Default: Story = {
    args: {
        completed: 5,
        uncompleted: 3,
    },
};

export const AllCompleted: Story = {
    args: {
        completed: 8,
        uncompleted: 0,
    },
};

export const Empty: Story = {
    args: {
        completed: 0,
        uncompleted: 0,
    },
};