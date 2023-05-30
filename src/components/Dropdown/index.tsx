import { mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';
import { ChangeEvent } from 'react';
import './style.scss';

export interface DropdownProps {
  defaultValue?: string;
  options: string[];
  onChange: (value: string, event: ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown = ({ defaultValue, options, onChange }: DropdownProps) => {
  return (
    <div className="dropdown">
      <select
        onChange={async (event) => {
          onChange(event.target.value, event);
        }}
        defaultValue={defaultValue}
      >
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <Icon path={mdiChevronDown} />
    </div>
  );
};

Dropdown.defaultProps = {
  defaultValue: undefined,
};

export default Dropdown;
