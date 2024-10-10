import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';
import { InputProps } from './InputConfig';

describe('Input component', () => {
  test('renders input with label and placeholder correctly', () => {
    const props: InputProps = {
      type: 'text',
      label: 'Test Label',
      placeholder: 'Enter text',
      required: false,
      minLength: 0,
      maxLength: 50,
      disabled: false,
      readOnly: false,
      customStyles: {},
    };

    render(<Input {...props} />);

    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
  });

  test('applies custom styles', () => {
    const props: InputProps = {
      type: 'text',
      label: 'Styled Input',
      placeholder: 'Styled Placeholder',
      required: false,
      minLength: 0,
      maxLength: 50,
      disabled: false,
      readOnly: false,
      customStyles: {
        borderColor: 'blue',
        backgroundColor: 'lightgray',
        textColor: 'black',
        width: '300px',
        borderRadius: '5px',
        textAlign: 'center',
      },
    };

    render(<Input {...props} />);

    const inputElement = screen.getByPlaceholderText('Styled Placeholder');
    expect(inputElement).toHaveStyle('border-color: blue');
    expect(inputElement).toHaveStyle('background-color: lightgray');
    expect(inputElement).toHaveStyle('color: black');
    expect(inputElement).toHaveStyle('width: 300px');
    expect(inputElement).toHaveStyle('border-radius: 5px');
    expect(inputElement).toHaveStyle('text-align: center');
  });

  test('renders required input', () => {
    const props: InputProps = {
      type: 'text',
      label: 'Required Input',
      placeholder: 'Required Placeholder',
      required: true,
      minLength: 0,
      maxLength: 50,
      disabled: false,
      readOnly: false,
      customStyles: {},
    };

    render(<Input {...props} />);

    const inputElement = screen.getByPlaceholderText('Required Placeholder');
    expect(inputElement).toBeRequired();
  });

  test('renders disabled input', () => {
    const props: InputProps = {
      type: 'text',
      label: 'Disabled Input',
      placeholder: 'Disabled Placeholder',
      required: false,
      minLength: 0,
      maxLength: 50,
      disabled: true,
      readOnly: false,
      customStyles: {},
    };

    render(<Input {...props} />);

    const inputElement = screen.getByPlaceholderText('Disabled Placeholder');
    expect(inputElement).toBeDisabled();
  });

  test('renders readOnly input', () => {
    const props: InputProps = {
      type: 'text',
      label: 'ReadOnly Input',
      placeholder: 'ReadOnly Placeholder',
      required: false,
      minLength: 0,
      maxLength: 50,
      disabled: false,
      readOnly: true,
      customStyles: {},
    };

    render(<Input {...props} />);

    const inputElement = screen.getByPlaceholderText('ReadOnly Placeholder');
    expect(inputElement).toHaveAttribute('readonly');
  });
});
