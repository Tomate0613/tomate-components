import { Meta } from '@storybook/react';
import Button from '@tc/Button';

interface StoryButtonProps {
  text: string;
  disabled: boolean;
  small: boolean;
  type: 'default' | 'custom' | 'info' | 'danger';
}

export const StoryButton = ({
  text,
  disabled,
  small,
  type,
}: StoryButtonProps) => {
  return (
    <Button
      custom={type === 'custom'}
      danger={type === 'danger'}
      info={type === 'info'}
      small={small}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

StoryButton.args = {
  text: 'Button',
  disabled: false,
  small: false,
  type: 'default',
};

export default {
  title: 'Components/Button',
  component: StoryButton,
} as Meta<typeof StoryButton>;
