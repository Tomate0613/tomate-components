import { ReactNode } from 'react';
import BackButton from './BackButton';
import './style.scss';

type HeaderProps = {
  title: ReactNode;
  children?: ReactNode;
  back?: boolean;
  center?: boolean;
  onNavigateBack?: () => void;
};

const Header = ({
  title,
  children,
  back,
  center,
  onNavigateBack,
}: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-title">
        {back ? <BackButton onClick={onNavigateBack} /> : null}
        <div
          className={`header-title-drag-area${back ? ' back' : ''}${
            center ? ' center' : ''
          }`}
        >
          <h1 className="header-title-text">{title}</h1>
        </div>
      </div>
      {children ? <div className="header-content">{children}</div> : null}
    </header>
  );
};

Header.defaultProps = {
  back: false,
  center: false,
  children: null,
  onNavigateBack: undefined,
};

export default Header;
