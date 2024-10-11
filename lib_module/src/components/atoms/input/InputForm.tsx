import React from 'react';
import Input from './Input';
import '../../../assets/Input.css';

const InputForm: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
      <div className="form-container">
          <form onSubmit={handleSubmit}>
              <div className="input-group">
                  <Input 
                      type="password"
                      label="Password"
                      placeholder="Enter your password"
                      required={true}
                      minLength={8}
                      maxLength={20}
                  />
              </div>
          </form>
      </div>
  );
};

export default InputForm;
