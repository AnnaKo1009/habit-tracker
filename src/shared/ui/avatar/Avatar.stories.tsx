import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { Button } from '../button/Button';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    src: 'https://leaderstoday.ru/assets/components/phpthumbof/cache/Ya_2020_05_002.1656c9267fa95a18d7c86dbd342be1ea2337.jpg',
    name: 'Anna',
    size: 'large',
  },
};

export const WithImageAndButton: Story = {
  args: {
    src: 'https://doctor-veterinar.ru/images/mini-pig.png',
    name: 'Anna',
    size: 'large',
    children: <Button variant="icon" iconName="pictEdit" size="small"/>,
  },
};

export const WithInitials: Story = {
  args: {
    name: 'Anna',
    size: 'large',
  },
};

export const WithEditButton: Story = {
  args: {
    name: 'Anna',
    size: 'large',
    children: <Button variant="icon" iconName="pictEdit" size="small"/>,
  },
};

export const Small: Story = {
  args: {
    name: 'A',
    size: 'small',
  },
};