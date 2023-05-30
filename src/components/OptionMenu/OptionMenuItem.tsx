import { mdiLoading } from '@mdi/js';
import Icon from '@mdi/react';
import Button from '../Button';
import './style.scss';

interface OptionMenuItemProps {
  icon: string;
  title: string;
  onClick: (shiftKeyDown: boolean) => void;
  danger?: boolean;
  info?: boolean;
}

const OptionMenuItem = ({
  icon,
  title,
  onClick,
  danger,
  info,
}: OptionMenuItemProps) => {
  return (
    <Button
      className={`btn btn-option-item${danger ? ' btn-danger' : ''}${
        info ? ' btn-info' : ''
      }`}
      onClick={(event) => {
        onClick(event.shiftKey);
      }}
      title={title}
      custom
    >
      <Icon path={icon} spin={icon === mdiLoading} />
      <span>{title}</span>
    </Button>
  );
};

OptionMenuItem.defaultProps = {
  danger: false,
  info: false,
};

export default OptionMenuItem;
