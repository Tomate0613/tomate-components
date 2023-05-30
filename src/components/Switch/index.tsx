import './style.scss';

export interface SwitchProps {
  onChange: (value: boolean) => void;
  defaultValue?: boolean;
  value?: boolean;
  disabled?: boolean;
}

const Switch = ({ onChange, defaultValue, value, disabled }: SwitchProps) => {
  return (
    <input
      className="switch"
      defaultChecked={defaultValue}
      checked={value}
      type="checkbox"
      onChange={(event) => {
        onChange(event.target.checked);
      }}
      disabled={disabled}
    />
  );
};

Switch.defaultProps = {
  defaultValue: undefined,
  value: undefined,
  disabled: false,
};

export default Switch;
