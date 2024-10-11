import React from 'react';
import "../../../../assets/Select.css";

export interface SelectProps {
  options?: { value: string; label: string }[];
  label?: string; 
  required?: boolean;
  multiple?: boolean;
}

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const Select: React.FC<SelectProps> = ({
  options = defaultOptions,
  label,
  required,
  multiple,
}) => {
  return (
    <div className="select-container">
      {label && (
        <label className="input-label">
          {label}
        </label>
      )}
      <select
        required={required}
        multiple={multiple}
        className="input-field"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
