import React from 'react';
import '../../../assets/Button.css';

export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  loading?: boolean;
  customStyles?: {
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
    borderRadius?: string;
  };
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'primary',
  disabled = false,
  loading = false,
  customStyles,
}) => {
  const getButtonClass = () => {
    let baseClass = 'btn';
    if (type === 'primary') baseClass += ' btn-primary';
    if (type === 'secondary') baseClass += ' btn-secondary';
    if (type === 'danger') baseClass += ' btn-danger';
    return baseClass;
  };

  return (
    <button
      className={getButtonClass()}
      onClick={onClick}
      disabled={disabled || loading}
      style={{
        backgroundColor: customStyles?.backgroundColor,
        color: customStyles?.color,
        borderColor: customStyles?.borderColor,
        borderRadius: customStyles?.borderRadius,
      }}
    >
      {loading ? <span role="status" className="loader"></span> : label}
    </button>
);

};

export default Button;
