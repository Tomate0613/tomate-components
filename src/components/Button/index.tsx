import { MouseEventHandler, ReactNode } from 'react';
import './style.scss';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  title?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  small?: boolean;
  custom?: boolean;
  info?: boolean;
  danger?: boolean;
}

const Button = ({
  children,
  className,
  disabled,
  title,
  onClick,
  small,
  custom,
  info,
  danger,
}: ButtonProps) => {
  let classNameType = '';

  if (info) classNameType = ' btn-info';
  if (danger) classNameType = ' btn-danger';
  if (small) classNameType += ' small';

  return (
    <button
      type="button"
      className={
        custom ? `btn-custom ${className}` : `btn ${className}${classNameType}`
      }
      disabled={disabled}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  disabled: false,
  onClick: undefined,
  title: undefined,
  small: false,
  custom: false,
  info: false,
  danger: false,
};

export default Button;
