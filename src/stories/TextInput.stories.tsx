import { Meta } from '@storybook/react';
import TextInput from '@tc/TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,

  argTypes: {
    onChange: {
      options: ['console-log', 'no-fortnite'],
      mapping: {
        'console-log': console.log,
        'no-fortnite': (value: string) => {
          if (value.toLowerCase().includes('fortnite')) return 'invalid';
        },
      },
    },
  },
} as Meta<typeof TextInput>;

export { TextInput };
