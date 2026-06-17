import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { useState } from 'react';
import { Button } from '../button';

const meta = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

// Интерактивный сторис с открытием/закрытием
export const Interactive = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button variant="primary" onClick={() => setIsOpen(true)}>
                Открыть модалку
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Заголовок модалки"
            >
                <p>Это содержимое модального окна.</p>
                <p>Здесь может быть любой контент.</p>
                <Button variant="primary" onClick={() => setIsOpen(false)}>
                    Закрыть
                </Button>
            </Modal>
        </div>
    );
};