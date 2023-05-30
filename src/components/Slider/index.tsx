import { useState } from 'react';
import uniqueId from 'lodash/uniqueId';
import './style.scss';

const Slider = ({
  min,
  max,
  step,
  suffix,
  list,
  onChange,
  defaultValue,
}: {
  min: number | undefined;
  max: number | undefined;
  step: number | undefined;
  suffix: string | undefined;
  list: string[] | undefined;
  onChange: (value: number) => void;
  defaultValue: number | undefined;
}) => {
  const [datalistId] = useState(uniqueId('slider-datalist-'));

  return (
    <>
      <input
        className="slider"
        defaultValue={defaultValue}
        type="range"
        min={min}
        max={max}
        step={step}
        list={list ? datalistId : undefined}
        onChange={(event) => {
          onChange(parseInt(event.target.value, 10));
        }}
      />
      <datalist id={datalistId}>
        {list?.map((elem) => {
          return <option value={elem} key={elem} label={elem + suffix} />;
        })}
      </datalist>
    </>
  );
};

export default Slider;
