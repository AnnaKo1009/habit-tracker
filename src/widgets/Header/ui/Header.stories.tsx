import type { Meta, StoryObj } from '@storybook/react';
import { HeaderUI } from './Header';

const meta = {
    title: 'Widgets/HeaderUI',
    component: HeaderUI,
    tags: ['autodocs'],
} satisfies Meta<typeof HeaderUI>;

export default meta;
type Story = StoryObj<typeof HeaderUI>;

// Вариант для главной страницы (с временем и аватаркой)
export const Dashboard: Story = {
    args: {
        variant: 'dashboard',
        userName: 'Анна',
        userAvatar: 'https://doctor-veterinar.ru/images/mini-pig.png',
        onClick: () => console.log('Logo clicked'),
        now: new Date(),
    },
};

// Вариант для страниц входа/регистрации (только логотип)
export const Auth: Story = {
    args: {
        variant: 'auth',
        onClick: () => console.log('Logo clicked'),
        now: new Date(),
    },
};