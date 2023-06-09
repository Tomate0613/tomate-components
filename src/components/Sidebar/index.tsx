import { ReactNode } from 'react';
import './style.scss';

interface SidebarProps {
  children: ReactNode;
}
const Sidebar = ({ children }: SidebarProps) => {
  return <nav id="sidebar">{children}</nav>;
};

export default Sidebar;
