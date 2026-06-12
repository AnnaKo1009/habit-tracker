import type { Meta, StoryObj } from '@storybook/react';
import { UserPanelUI } from './UserPanel';

const meta = {
    title: 'Widgets/UserPanelUI',
    component: UserPanelUI,
    tags: ['autodocs'],
} satisfies Meta<typeof UserPanelUI>;

export default meta;

export const Default: StoryObj<typeof UserPanelUI> = {
    args: {
        userName: 'Анна',
        userAvatar: 'https://doctor-veterinar.ru/images/mini-pig.png',
        onEditProfile: () => alert('Редактировать профиль'),
    },
};