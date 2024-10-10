import React from 'react';
import Button from './Button';
import { buttonPrimaryConfig, buttonSecondaryConfig, buttonDangerConfig } from './ButtonConfig';

const ButtonContainer: React.FC = () => {
  return (
    <div className="button-container">
      <Button {...buttonPrimaryConfig} />
      <Button {...buttonSecondaryConfig} />
      <Button {...buttonDangerConfig} />
    </div>
  );
};

export default ButtonContainer;
