import { Meta } from '@storybook/react';
import { OptionMenu } from './OptionMenu.stories';
import { OptionMenuItem } from './OptionMenuItem.stories';
import { mdiTestTube } from '@mdi/js';
import Button from '@tc/Button';
import Card from '@tc/Card';

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    className: 'card-class',
    children: <div>Card content</div>,
    index: 0,
    ambient: true,
  },
  argTypes: {
    controls: {
      options: ['Basic', 'Controls'],
      mapping: {
        Basic: <div>Card controls</div>,
        Controls: (
          <>
            <Button>Action</Button>

            <OptionMenu>
              <OptionMenuItem
                icon={mdiTestTube}
                title={'Test'}
                onClick={() => {}}
              />
            </OptionMenu>
          </>
        ),
      },
    },
    children: {
      options: ['Basic', 'Title'],
      mapping: {
        Basic: <div>Card contents</div>,
        Title: (
          <>
            <div className="t-title">Title</div>
            <div className="t-secondary t-smaller">Subtitle</div>
          </>
        ),
      },
    },
  },
} as Meta<typeof Card>;

export { Card };
