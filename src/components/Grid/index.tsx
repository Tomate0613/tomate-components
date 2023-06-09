import { ReactNode } from 'react';
import './style.scss';

interface GridProps {
  children: ReactNode;
  id: string;
}

const Grid = ({ children, id }: GridProps) => {
  return (
    <div id={id} className="grid" role="grid">
      {children}
    </div>
  );
};

export default Grid;
