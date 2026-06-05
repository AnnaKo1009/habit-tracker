import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

// Полный логотип (иконка + текст)
export const FullLarge: Story = {
  args: {
    variant: 'full',
    size: 'large',
  },
};

export const FullMedium: Story = {
  args: {
    variant: 'full',
    size: 'medium',
  },
};

export const FullSmall: Story = {
  args: {
    variant: 'full',
    size: 'small',
  },
};

// Только иконка
export const IconOnlyLarge: Story = {
  args: {
    variant: 'icon',
    size: 'large',
  },
};

export const IconOnlyMedium: Story = {
  args: {
    variant: 'icon',
    size: 'medium',
  },
};

export const IconOnlySmall: Story = {
  args: {
    variant: 'icon',
    size: 'small',
  },
};

// Кликабельный логотип
export const Clickable: Story = {
  args: {
    variant: 'full',
    size: 'medium',
    onClick: () => alert('Logo clicked'),
  },
};