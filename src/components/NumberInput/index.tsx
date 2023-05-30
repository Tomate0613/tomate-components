import { useState } from 'react';
import './style.scss';

export interface NumberInputProps {
  className?: string;
  defaultValue?: number;
  onChange: (value: number, valid?: boolean) => void;
  onBlur?: () => void;
  validate?: (value: number) => boolean;
  id?: string;
  placeholder?: string;
}

const NumberInput = ({
  className,
  defaultValue,
  onChange,
  onBlur,
  id,
  placeholder,
  validate,
}: NumberInputProps) => {
  const [isValid, setIsValid] = useState(
    validate ? validate(defaultValue ?? 0) : true
  );

  return (
    <input
      type="number"
      className={`number-input ${className} ${!isValid ? 'invalid-input' : ''}`}
      defaultValue={defaultValue}
      onChange={(event) => {
        const { value: valueRaw } = event.target;
        const value = parseInt(valueRaw, 10);

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

NumberInput.defaultProps = {
  className: '',
  defaultValue: undefined,
  onBlur: undefined,
  id: undefined,
  placeholder: undefined,
  validate: undefined,
};

export default NumberInput;
