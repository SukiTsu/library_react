import React from 'react';
import '../../../assets/Input.css';

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
    <div style={{ marginBottom: '15px' }}>
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
