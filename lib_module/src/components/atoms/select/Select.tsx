import React from 'react';
import "../../../assets/Select.css"
import { SelectProps } from './SelectConfig';



const Select: React.FC<SelectProps> = ({
  options,
  label,
  required,
  multiple,
  customStyles,
}) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      {label && (
        <label className="input-label" style={{ color: customStyles?.labelColor }}>
          {label}
        </label>
      )}
      <select
        required={required}
        multiple={multiple}
        style={{
          borderColor: customStyles?.borderColor,
          backgroundColor: customStyles?.backgroundColor,
          color: customStyles?.textColor,
          width: customStyles?.width,
          borderRadius: customStyles?.borderRadius,
          padding: '10px',
        }}
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
