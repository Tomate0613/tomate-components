import { Meta } from '@storybook/react';
import OptionMenuItem from '../components/OptionMenu/OptionMenuItem';
import { mdiTestTube } from '@mdi/js';

export default {
  title: 'Components/OptionMenuItem',
  component: OptionMenuItem,
  args: {
    title: 'Test',
    icon: mdiTestTube,
  },
} as Meta<typeof OptionMenuItem>;

export { OptionMenuItem };
