// src/components/organismes/InputForm.tsx
import React from 'react';
import Input from './Input';
import { inputConfig, buttonConfig } from './InputConfig';
import '../../../assets/Input.css';

const InputForm: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const buttonStyles = {
      backgroundColor: buttonConfig.backgroundColor,
      color: buttonConfig.textColor,
      padding: buttonConfig.size === 'small' ? '8px 16px' :
               buttonConfig.size === 'large' ? '16px 32px' : '12px 24px',
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                {inputConfig.map((inputProps, index) => (
                    <div className="input-group" key={index}>
                        <Input {...inputProps} />
                    </div>
                ))}
                <button type="submit" className="submit-button" style={buttonStyles}>
                    Soumettre
                </button>
            </form>
        </div>
    );
};

export default InputForm;
