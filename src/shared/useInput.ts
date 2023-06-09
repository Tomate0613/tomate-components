import { ChangeEvent, useCallback, useState } from 'react';
import { InputProps } from './inputProps';

const useInput = <T extends Element, Value>(
  {
    defaultValue,
    onChange: changeEventHandler,
    className: cn,
  }: InputProps<T, Value>,
  className: string,
  defaultValueFallback: Value
) => {
  const [value, setValue] = useState(defaultValue ?? defaultValueFallback);
  const [valid, setValid] = useState(true);

  const onChange = useCallback(
    async (value: Value, event: ChangeEvent<T>) => {
      if (!changeEventHandler) return;

      setValue(value);
      const action = await changeEventHandler(value, event);

      switch (action) {
        case 'undo':
          break;
        case 'invalid':
          setValid(false);
          setValue(value);
          break;
        default:
          setValid(true);
          setValue(value);
          break;
      }
    },
    [changeEventHandler]
  );

  return {
    value,
    valid,
    onChange,
    className:
      (cn ? `${className} ${cn}` : className) + (valid ? '' : ' invalid-input'),
  };
};

export default useInput;
