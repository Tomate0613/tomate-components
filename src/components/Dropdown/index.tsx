import { mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';
import './style.scss';
import useInput from '../../shared/useInput';
import { InputProps } from '../../shared/inputProps';

export interface DropdownProps extends InputProps<HTMLSelectElement, string> {
  options: string[];
}

const Dropdown = (props: DropdownProps) => {
  const { value, className, onChange } = useInput(
    props,
    'dropdown',
    props.options[0]
  );

  return (
    <div className={className}>
      <select
        onChange={async (event) => {
          onChange(event.target.value, event);
        }}
        value={value}
        disabled={props.disabled}
      >
        {props.options.map((option) => {
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
