import type { Meta, StoryObj } from '@storybook/react';
import { AddHabitWidgetUI } from './AddHabitWidget';

const meta = {
  title: 'Widgets/AddHabitWidgetUI',
  component: AddHabitWidgetUI,
  tags: ['autodocs'],
} satisfies Meta<typeof AddHabitWidgetUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithBackground: Story = {
  args: {
    onAdd: () => alert('Открыть модалку'),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '280px', height: '180px' }}>
        <Story />
      </div>
    ),
  ],
};

// Другой размер для демонстрации гибкости
export const Large: Story = {
  args: {
    onAdd: () => alert('Открыть модалку'),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', height: '250px' }}>
        <Story />
      </div>
    ),
  ],
};