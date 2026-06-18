import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';
import { useState } from 'react';

const meta = {
    title: 'Components/RadioGroup',
    component: RadioGroup,
    tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const frequencyOptions = [
    { value: 'daily', label: 'Каждый день' },
    { value: 'weekly', label: 'Раз в неделю' },
    { value: 'custom', label: 'С интервалом' },
];

// ✅ Интерактивный сторис — работает!
export const Interactive: Story = {
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [value, setValue] = useState('daily');

        return (
            <RadioGroup
                name="frequency"
                options={frequencyOptions}
                value={value}
                onChange={setValue}
            />
        );
    },
};

// Вертикальное расположение
export const Vertical: Story = {
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [value, setValue] = useState('daily');

        return (
            <RadioGroup
                name="frequency"
                options={frequencyOptions}
                value={value}
                onChange={setValue}
                direction="vertical"
            />
        );
    },
};