import { Meta } from '@storybook/react';
import Dropdown from '../components/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: {
    options: ['test1', 'test2', 'test3', 'test4'],
  },
  argTypes: {
    onChange: {
      options: ['console-log', 'random', 'async random'],
      mapping: {
        'console-log': console.log,
        random: (value: string) => {
          if (value === 'test2') return 'invalid';
          if (value === 'test3') {
            alert("Oops an error happened. Let's quickly undo your choice");
            return 'undo';
          }
        },
        'async random': (value: string) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              if (value === 'test2') resolve('invalid');
              else if (value === 'test3') {
                alert("Oops an error happened. Let's quickly undo your choice");
                resolve('undo');
              } else resolve(undefined);
            }, 1000);
          });
        },
      },
    },
  },
} as Meta<typeof Dropdown>;

export { Dropdown };
