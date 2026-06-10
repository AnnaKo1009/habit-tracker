// import type { Meta, StoryObj } from '@storybook/react';
// import { AddHabitWidget } from './AddHabitWidget';

// const meta = {
//   title: 'Components/AddHabitWidget',
//   component: AddHabitWidget,
//   tags: ['autodocs'],
// } satisfies Meta<typeof AddHabitWidget>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const WithBackground: Story = {
//   args: {
//     onAdd: () => alert('Открыть модалку'),
//     backgroundImage: '/images/addWidgetBackground.png',
//   },
// };

import type { Meta, StoryObj } from '@storybook/react';
import { AddHabitWidget } from './AddHabitWidget';

const meta = {
  title: 'Widgets/AddHabitWidget',
  component: AddHabitWidget,
  tags: ['autodocs'],
} satisfies Meta<typeof AddHabitWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithBackground: Story = {
  args: {
    onAdd: () => alert('Открыть модалку'),
    backgroundImage: '/images/addWidgetBackground.png',
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
    backgroundImage: '/images/addWidgetBackground.png',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', height: '250px' }}>
        <Story />
      </div>
    ),
  ],
};