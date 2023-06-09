import { Meta } from '@storybook/react';
import { mdiTestTube } from '@mdi/js';
import OptionMenuItem from '@tc/OptionMenu/OptionMenuItem';

export default {
  title: 'Components/OptionMenuItem',
  component: OptionMenuItem,
  args: {
    title: 'Test',
    icon: mdiTestTube,
  },
} as Meta<typeof OptionMenuItem>;

export { OptionMenuItem };
