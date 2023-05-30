import { Meta } from '@storybook/react';
import OptionMenu from '../components/OptionMenu';
import OptionMenuItem from '../components/OptionMenu/OptionMenuItem';
import { mdiTestTube } from '@mdi/js';

export default {
  title: 'Components/OptionMenu',
  component: OptionMenu,
  args: {
    children: (
      <OptionMenuItem
        icon={mdiTestTube}
        title="Test"
        onClick={() => {}}
      ></OptionMenuItem>
    ),
    expanded: false,
  },
} as Meta<typeof OptionMenu>;

export { OptionMenu };
