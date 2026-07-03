import type { Meta, StoryObj } from '@storybook/react';
import { LoginPageUI } from './LoginPage';
import { BrowserRouter } from 'react-router-dom';

const meta = {
    title: 'Pages/LoginPage',
    component: LoginPageUI,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} satisfies Meta<typeof LoginPageUI>;

export default meta;
type Story = StoryObj<typeof LoginPageUI>;

export const Default: Story = {
    args: {
        onSubmit: (data) => console.log('Login data:', data),
        onRegisterClick: () => console.log('Navigate to register'),
        isLoading: false,
    },
};

export const WithError: Story = {
    args: {
        onSubmit: (data) => console.log('Login data:', data),
        onRegisterClick: () => console.log('Navigate to register'),
        isLoading: false,
    },
};

export const Loading: Story = {
    args: {
        onSubmit: (data) => console.log('Login data:', data),
        onRegisterClick: () => console.log('Navigate to register'),
        isLoading: true,
    },
};