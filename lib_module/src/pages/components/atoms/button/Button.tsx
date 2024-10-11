import React from 'react';
import '../../../../assets/Button.css';

export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  type?: 'primary' | 'secondary' | 'danger';
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'primary',
  loading = false,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`button ${type}`}
    >
      {loading ? 'Loading...' : label}
    </button>
  );
};

export default Button;
