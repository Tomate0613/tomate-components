import { Meta } from '@storybook/react';
import WindowControls from '@tc/WindowControls';

export default {
  title: 'Components/WindowControls',
  component: WindowControls,
  args: {
    isFocused: true,
    isMaximized: false,
  },
} as Meta<typeof WindowControls>;

export { WindowControls };
