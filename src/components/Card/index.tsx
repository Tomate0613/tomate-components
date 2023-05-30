import { ReactNode } from 'react';
import Image from '../Image';
import './style.scss';

export interface CardProps {
  icon: string;
  className: string;
  children: ReactNode;
  controls: ReactNode;
  index: number;
  ambient: boolean;
}

const Card = ({
  icon,
  className,
  children,
  controls,
  index,
  ambient,
}: CardProps) => {
  return (
    <div className={`card ${className}`}>
      {ambient ? (
        <Image className="card-ambient" src={icon} alt="" randomImage={index} />
      ) : null}
      <div className="card-body">
        <Image
          className="card-image"
          src={icon}
          alt="Image"
          randomImage={index}
        />
        <div className="card-info flex-column">{children}</div>
      </div>
      <div className="card-controls">{controls}</div>
    </div>
  );
};

export default Card;
