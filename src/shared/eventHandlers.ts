import { ChangeEvent, MouseEvent } from 'react';

type Return = 'invalid' | 'undo';

export type HandlerReturnValue =
  | void
  | Return
  | Promise<void>
  | Promise<Return>;

export type MouseEventHandler<T = Element> = (
  event: MouseEvent<T, globalThis.MouseEvent>
) => HandlerReturnValue;

export type ChangeEventHandler<T = Element, Value = string> = (
  value: Value,
  event: ChangeEvent<T>
) => HandlerReturnValue;
