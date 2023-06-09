import { Meta } from '@storybook/react';
import NumberInput from '@tc/NumberInput';

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
  argTypes: {
    onChange: {
      options: ['console-log', 'no-nine'],
      mapping: {
        'console-log': console.log,
        'no-nine': (value: number) => {
          if (value === 9) return 'invalid';
        },
      },
    },
  },
} as Meta<typeof NumberInput>;

export { NumberInput };
