import { mdiDotsHorizontal } from '@mdi/js';
import Icon from '@mdi/react';
import { ReactNode, useState } from 'react';
import Button from '../Button';
import './style.scss';

interface OptionMenuProps {
  children: ReactNode;
  expanded?: boolean;
}

const OptionMenu = ({ children, expanded: inline }: OptionMenuProps) => {
  const [active, setActive] = useState(false);

  const menu = inline ? (
    <div className="option-menu expanded">{children}</div>
  ) : (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={`option-menu${active ? ' active' : ''}${
        inline ? ' expanded' : ''
      }`}
      onClick={() => setActive(false)}
    >
      <div className="t-title t-cap">Options</div>
      <div className="options">{active ? children : null}</div>
    </div>
  );

  if (inline) return menu;

  return (
    <>
      <Button className="btn btn-option-menu" onClick={() => setActive(true)}>
        <Icon path={mdiDotsHorizontal} />
      </Button>
      {menu}
    </>
  );
};

OptionMenu.defaultProps = {
  expanded: false,
};

export default OptionMenu;
