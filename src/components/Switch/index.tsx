import { InputProps } from '../../shared/inputProps';
import useInput from '../../shared/useInput';
import './style.scss';

export interface SwitchProps extends InputProps<HTMLInputElement, boolean> {}

const Switch = (props: SwitchProps) => {
  const { value, className, onChange } = useInput(props, 'switch', false);

  return (
    <input
      className={className}
      checked={value}
      type="checkbox"
      onChange={(event) => {
        onChange(event.target.checked, event);
      }}
      disabled={props.disabled}
    />
  );
};

Switch.defaultProps = {
  defaultValue: undefined,
  value: undefined,
  disabled: false,
};

export default Switch;
