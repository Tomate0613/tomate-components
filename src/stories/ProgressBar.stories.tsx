import { Meta } from '@storybook/react';
import ProgressBar from '@tc/ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  args: {
    progress: 0.5,
    progressText: '',
    progressTextSec: '',
  },
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
  },
} as Meta<typeof ProgressBar>;

export { ProgressBar };
