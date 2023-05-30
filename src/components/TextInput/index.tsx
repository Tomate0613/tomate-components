import { useState } from 'react';
import './style.scss';

export interface TextInputProps {
  className?: string;
  defaultValue?: string;
  onChange: (value: string, valid?: boolean) => void;
  onBlur?: () => void;
  validate?: (value: string) => boolean;
  id?: string;
  placeholder?: string;
  search?: boolean;
}

const TextInput = ({
  className,
  defaultValue,
  onChange,
  onBlur,
  id,
  placeholder,
  search,
  validate,
}: TextInputProps) => {
  const [isValid, setIsValid] = useState(
    validate ? validate(defaultValue ?? '') : true
  );

  return (
    <input
      type={search ? 'search' : 'text'}
      className={`text-input ${className} ${!isValid ? 'invalid-input' : ''}`}
      defaultValue={defaultValue}
      onChange={(event) => {
        const { value } = event.target;

        if (validate) {
          const valid = validate(value);
          setIsValid(valid);

          onChange(value, valid);
          return;
        }
        onChange(value);
      }}
      onBlur={onBlur}
      id={id}
      placeholder={placeholder}
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
