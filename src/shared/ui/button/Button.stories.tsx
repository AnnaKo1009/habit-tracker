import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import styles from './Button.module.css';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Основные варианты
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

// Кнопка-иконка: только иконка, без текста
export const IconOnly: Story = {
  args: {
    variant: 'icon',
    iconName: 'add',        
    children: '',
    className: styles['icon-large'],           
  },
};

// Кнопка с иконкой и текстом
export const BtnWithIcon: Story = {
  args: {
    variant: 'btnWithIcon',
    iconName: 'editProfile',  
    children: 'Редактировать профиль',
  },
};

// Состояния
export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Неактивная кнопка',
    disabled: true,
  },
};