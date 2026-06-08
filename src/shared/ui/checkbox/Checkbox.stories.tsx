import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { useState } from 'react';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;


// Интерактивная история — отдельная переменная
const InteractiveStory = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox 
      checked={checked} 
      onChange={(e) => setChecked(e.target.checked)} 
    />
  );
};

export const Interactive = {
  render: InteractiveStory,
};