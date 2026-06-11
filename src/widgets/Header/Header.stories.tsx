import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
    title: 'Widgets/Header',
    component: Header,
    tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

// Вариант для главной страницы (с временем и аватаркой)
export const Dashboard: Story = {
    args: {
        variant: 'dashboard',
        userName: 'Анна',
        userAvatar: 'https://doctor-veterinar.ru/images/mini-pig.png',
        onClick: () => console.log('Logo clicked'),
    },
};

// Вариант для страниц входа/регистрации (только логотип)
export const Auth: Story = {
    args: {
        variant: 'auth',
        onClick: () => console.log('Logo clicked'),
    },
};