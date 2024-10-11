import React from 'react';
import '../../../../assets/InputStyle.css';

export interface InputProps {
  type: string;
  label?: string; 
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
  readOnly?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  placeholder,
  required,
  minLength,
  maxLength,
  disabled,
  readOnly,
}) => {
  return (
    <div className="input-container">
      {label && (
        <label className="input-label">
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
        className="input-field"
      />
    </div>
  );
};

export default Input;
