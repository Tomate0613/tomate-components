import { mdiClose, mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';
import TextInput from '.';
import './style.scss';

export interface SearchInputProps {
  className?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  id?: string;
  placeholder?: string;
  icon?: string;
  clp?: boolean;
}

const SearchInput = ({
  className,
  defaultValue,
  onChange,
  onBlur,
  id,
  placeholder,
  icon,
  clp,
}: SearchInputProps) => {
  return (
    <div className="search-input-wrapper">
      <TextInput
        className={`${className}${clp ? 'input-search-clp' : ''}`}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        placeholder={placeholder}
        search
      />
      <Icon path={icon ?? mdiMagnify} />
      <Icon path={mdiClose} className="search-clear-icon" />
    </div>
  );
};

SearchInput.defaultProps = {
  className: '',
  defaultValue: undefined,
  onBlur: undefined,
  id: undefined,
  placeholder: undefined,
  icon: undefined,
  clp: false,
};

export default SearchInput;
