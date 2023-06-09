import './style.scss';
import { InputProps } from '../../shared/inputProps';
import useInput from '../../shared/useInput';

export interface NumberInputProps extends InputProps<HTMLInputElement, number> {
  onBlur?: () => void;
  id?: string;
  placeholder?: string;
}

const NumberInput = (props: NumberInputProps) => {
  const { value, className, onChange } = useInput(props, 'number-input', 0);

  return (
    <input
      type="number"
      className={className}
      value={value}
      onChange={async (event) => {
        const { value: valueRaw } = event.target;
        const value = parseInt(valueRaw, 10);

        onChange(value, event);
      }}
      onBlur={props.onBlur}
      id={props.id}
      placeholder={props.placeholder}
      disabled={props.disabled}
    />
  );
};

NumberInput.defaultProps = {
  className: '',
  defaultValue: undefined,
  onBlur: undefined,
  id: undefined,
  placeholder: undefined,
  validate: undefined,
};

export default NumberInput;
