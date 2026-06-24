import type { Meta, StoryObj } from '@storybook/react';
import { ProfilePageUI } from './ProfilePage';
import { BrowserRouter } from 'react-router-dom';

const meta = {
    title: 'Pages/ProfilePageUI',
    component: ProfilePageUI,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} satisfies Meta<typeof ProfilePageUI>;

export default meta;
type Story = StoryObj<typeof ProfilePageUI>;

const mockUser = {
    name: 'Анна Коновалова',
    avatar: 'https://doctor-veterinar.ru/images/mini-pig.png',
    email: 'anna@example.com',
    birthDate: '1996-09-10',
};

export const Default: Story = {
    args: {
        user: mockUser,
        onSubmit: (user) => console.log('Сохранено:', user),
        onStatsClick: () => console.log('Статистика'),
        onThemeToggle: () => console.log('Тема переключена'),
        onBack: () => console.log('Назад'),
    },
};