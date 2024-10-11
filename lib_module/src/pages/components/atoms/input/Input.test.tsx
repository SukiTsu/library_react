import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input component', () => {
  test('renders input with label and placeholder correctly', () => {
    const props = {
      type: 'text',
      label: 'Test Label',
      placeholder: 'Enter text',
      required: false,
      minLength: 0,
      maxLength: 50,
      disabled: false,
      readOnly: false,
    };

    render(<Input {...props} />);

    // Vérifie si le label est rendu correctement
    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeInTheDocument();

    // Vérifie si l'input est rendu correctement avec le placeholder
    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
  });

  test('renders required input', () => {
    const props = {
      type: 'text',
      label: 'Required Input',
      placeholder: 'Required Placeholder',
      required: true,
      minLength: 0,
      maxLength: 50,
      disabled: false,
      readOnly: false,
    };

    render(<Input {...props} />);

    const inputElement = screen.getByPlaceholderText('Required Placeholder');
    expect(inputElement).toBeRequired(); // Vérifie que l'input est requis
  });

  test('renders disabled input', () => {
    const props = {
      type: 'text',
      label: 'Disabled Input',
      placeholder: 'Disabled Placeholder',
      required: false,
      minLength: 0,
      maxLength: 50,
      disabled: true,
      readOnly: false,
    };

    render(<Input {...props} />);

    const inputElement = screen.getByPlaceholderText('Disabled Placeholder');
    expect(inputElement).toBeDisabled(); // Vérifie que l'input est désactivé
  });

  test('renders readOnly input', () => {
    const props = {
      type: 'text',
      label: 'ReadOnly Input',
      placeholder: 'ReadOnly Placeholder',
      required: false,
      minLength: 0,
      maxLength: 50,
      disabled: false,
      readOnly: true,
    };

    render(<Input {...props} />);

    const inputElement = screen.getByPlaceholderText('ReadOnly Placeholder');
    expect(inputElement).toHaveAttribute('readonly'); 
  });

  test('correctly sets minLength and maxLength', () => {
    const props = {
      type: 'text',
      label: 'Length Input',
      placeholder: 'Length Placeholder',
      required: false,
      minLength: 5,
      maxLength: 10,
      disabled: false,
      readOnly: false,
    };

    render(<Input {...props} />);

    const inputElement = screen.getByPlaceholderText('Length Placeholder');
    expect(inputElement).toHaveAttribute('minlength', '5');
    expect(inputElement).toHaveAttribute('maxlength', '10');
  });
});
