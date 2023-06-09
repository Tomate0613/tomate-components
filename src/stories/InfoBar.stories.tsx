import { Meta } from '@storybook/react';
import InfoBar from '@tc/InfoBar';

export default {
  title: 'Components/InfoBar',
  component: InfoBar,
  args: {
    title: 'Title',
    content: <div>Some content</div>,
    icon: InfoBar.defaultProps.icon,
  },
} as Meta<typeof InfoBar>;

export { InfoBar };
