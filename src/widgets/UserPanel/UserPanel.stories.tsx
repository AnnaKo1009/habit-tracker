import type { Meta, StoryObj } from '@storybook/react';
import { UserPanel } from './UserPanel';

const meta = {
    title: 'Components/UserPanel',
    component: UserPanel,
    tags: ['autodocs'],
} satisfies Meta<typeof UserPanel>;

export default meta;

export const Default: StoryObj<typeof UserPanel> = {
    args: {
        userName: 'Анна',
        userAvatar: 'https://doctor-veterinar.ru/images/mini-pig.png',
        onEditProfile: () => alert('Редактировать профиль'),
    },
};