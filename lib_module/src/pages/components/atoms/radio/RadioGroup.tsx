import React from 'react';
import { RadioGroupProps } from './RadioGroup_data';  // Importation des types de props

// Composant RadioGroup qui reçoit des props
const RadioGroup: React.FC<RadioGroupProps> = ({ options, name, selectedValue, onChange }) => {
  return (
    <div data-testid="radiogrouptest">
      {options.map((option) => (
        <label key={option.value} style={{ marginRight: '10px' }}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
