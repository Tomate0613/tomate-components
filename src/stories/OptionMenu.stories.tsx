import { Meta } from '@storybook/react';
import { mdiTestTube } from '@mdi/js';
import OptionMenu from '@tc/OptionMenu';
import { OptionMenuItem } from './OptionMenuItem.stories';

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
