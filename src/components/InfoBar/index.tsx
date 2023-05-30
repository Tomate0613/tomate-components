import { mdiClose, mdiInformation } from '@mdi/js';
import Icon from '@mdi/react';
import { ReactNode } from 'react';
import Button from '../Button';
import './style.scss';

type InfoBarProps = {
  title: string;
  content: ReactNode;
  icon?: string;
};

const InfoBar = ({ title, content, icon }: InfoBarProps) => {
  return (
    <div className="info-bar">
      <Icon className="info-bar-icon" path={icon!} size="24" />
      <div className="info-bar-content flex-column">
        <div className="t-title">{title}</div>
        <div className="t-smaller">{content}</div>
      </div>
      <Button className="btn-transparent" onClick={() => {}}>
        <Icon path={mdiClose} />
      </Button>
    </div>
  );
};

InfoBar.defaultProps = {
  icon: mdiInformation,
};

export default InfoBar;
