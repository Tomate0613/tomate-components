import './style.scss';
import { InputProps } from '../../shared/inputProps';
import useInput from '../../shared/useInput';

export interface TextInputProps extends InputProps<HTMLInputElement, string> {
  onBlur?: () => void;
  id?: string;
  placeholder?: string;
  search?: boolean;
}

const TextInput = (props: TextInputProps) => {
  const { value, className, onChange } = useInput(props, 'text-input', '');

  return (
    <input
      type={props.search ? 'search' : 'text'}
      className={className}
      value={value}
      onChange={(event) => {
        const { value } = event.target;

        onChange(value, event);
      }}
      onBlur={props.onBlur}
      id={props.id}
      placeholder={props.placeholder}
    />
  );
};

TextInput.defaultProps = {
  className: '',
  defaultValue: undefined,
  onBlur: undefined,
  id: undefined,
  placeholder: undefined,
  search: false,
  validate: undefined,
};

export default TextInput;
