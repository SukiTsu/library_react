import React from 'react';
import { InputProps } from './InputConfig';



const Input: React.FC<InputProps> = ({
  type,
  label,
  placeholder,
  required,
  minLength,
  maxLength,
  disabled,
  readOnly,
  customStyles
}) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      {label && (
        <label className="input-label" style={{ color: customStyles?.labelColor }}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabled}
        readOnly={readOnly}
        style={{
          borderColor: customStyles?.borderColor,
          backgroundColor: customStyles?.backgroundColor,
          color: customStyles?.textColor,
          width: customStyles?.width,
          borderRadius: customStyles?.borderRadius,
          textAlign: customStyles?.textAlign,
        }}
        className="input-field"
      />
    </div>
  );
};

export default Input;
