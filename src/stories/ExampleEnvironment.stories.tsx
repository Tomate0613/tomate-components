import { Meta } from '@storybook/react';
import { WindowControls } from './WindowControls.stories';
import { useState } from 'react';
import { mdiPlus, mdiTestTube } from '@mdi/js';
import '../mainpage-style.scss';
import Icon from '@mdi/react';
import Button from '@tc/Button';
import Grid from '@tc/Grid';
import Header from '@tc/Header';
import { Card } from './Card.stories';
import { OptionMenu } from './OptionMenu.stories';
import { OptionMenuItem } from './OptionMenuItem.stories';

const ExampleEnvironment = (props: { ambient: boolean; pageTitle: string }) => {
  const [isMaximized, setMaximized] = useState(false);
  const [isMinimized, setMinimized] = useState(false);

  return (
    <>
      {/* Normally this is not needed, as there either is a sidebar (and no back button) or there is no padding */}
      <style>
        {`.btn-back {
        margin-left: 0px;
      }`}
      </style>
      <WindowControls
        isFocused={!isMinimized}
        isMaximized={isMaximized}
        onMinimize={() => {
          setMinimized(true);
        }}
        onToggleMaximize={() => {
          setMaximized((max) => !max);
          setMinimized(false);
        }}
        onClose={() => {
          setMinimized(false);
        }}
      />
      <main id="some-page" className="page-slide">
        <Header title={props.pageTitle} back>
          <Button>
            <Icon path={mdiPlus} /> Add new
          </Button>
        </Header>
        <Grid id="some">
          {[
            18329852, 82, 529009, 283852, 325003, 91, 8, 230, 401, 4320, 41,
            3290, 109,
          ].map((p) => (
            <Card
              icon={''}
              className={''}
              controls={
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
              }
              key={p}
              index={p}
              ambient={props.ambient}
            >
              <div className="t-title">Title</div>
              <div className="t-secondary t-smaller">Subtitle {p}</div>
            </Card>
          ))}
        </Grid>
      </main>
    </>
  );
};

export default {
  title: 'Components/ExampleEnvironment',
  component: ExampleEnvironment,
  args: {
    ambient: true,
    pageTitle: 'some page',
  },
} as Meta<typeof ExampleEnvironment>;

export { ExampleEnvironment };
