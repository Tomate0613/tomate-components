import { useId } from 'react';
import './style.scss';
import { InputProps } from '../../shared/inputProps';
import useInput from '../../shared/useInput';

export interface SliderProps extends InputProps<HTMLInputElement, number> {
  min: number | undefined;
  max: number | undefined;
  step: number | undefined;
  suffix: string | undefined;
  list: string[] | undefined;
}

const Slider = (props: SliderProps) => {
  const datalistId = useId();
  const { value, className, onChange } = useInput(
    props,
    'slider',
    props.min ?? 0
  );

  return (
    <>
      <input
        className={className}
        value={value}
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        list={props.list ? datalistId : undefined}
        onChange={(event) => {
          onChange(parseInt(event.target.value, 10), event);
        }}
        disabled={props.disabled}
      />
      <datalist id={datalistId}>
        {props.list?.map((elem) => {
          return <option value={elem} key={elem} label={elem + props.suffix} />;
        })}
      </datalist>
    </>
  );
};

export default Slider;
