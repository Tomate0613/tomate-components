import { mdiArrowLeft } from '@mdi/js';
import Icon from '@mdi/react';
import Button from '../Button';
import './style.scss';

interface BackButtonProps {
  onClick?: () => void;
}

const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <Button
      className="btn-back btn-transparent"
      title="Back"
      onClick={async () => {
        if (onClick) onClick();
        window.history.back();
      }}
    >
      <Icon path={mdiArrowLeft} />
    </Button>
  );
};

BackButton.defaultProps = {
  onClick: undefined,
};

export default BackButton;
