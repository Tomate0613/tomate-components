import { Meta } from '@storybook/react';
import Dropdown from '../components/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: {
    options: ['test1', 'test2', 'test3'],
  },
} as Meta<typeof Dropdown>;

export { Dropdown };
