import { ChangeEventHandler } from './eventHandlers';

export type InputProps<T extends Element, Value> = {
  defaultValue?: Value;
  onChange?: ChangeEventHandler<T, Value>;
  className?: string;
  disabled?: boolean;
};
