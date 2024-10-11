import React from 'react';
import Button from './Button';

const ButtonContainer: React.FC = () => {
  return (
    <div className="button-container">
      <Button
        label="Submit"
        onClick={() => alert('Primary button clicked!')}
        type="primary"
      />
      <Button
        label="Cancel"
        onClick={() => alert('Secondary button clicked!')}
        type="secondary"
      />
      <Button
        label="Delete"
        onClick={() => alert('Danger button clicked!')}
        type="danger"
      />
    </div>
  );
};

export default ButtonContainer;
