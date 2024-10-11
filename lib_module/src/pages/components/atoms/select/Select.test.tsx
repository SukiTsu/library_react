import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from './Select';

describe('Select component', () => {
  test('renders select with options correctly', () => {
    const props = {
      options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
      ],
      label: 'Choose an option:',
      required: false,
      multiple: false,
    };

    render(<Select {...props} />);

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    const option1 = screen.getByText('Option 1');
    const option2 = screen.getByText('Option 2');
    const option3 = screen.getByText('Option 3');
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
  });

  test('renders label correctly', () => {
    const props = {
      options: [{ value: '1', label: 'Option 1' }],
      label: 'Test Label',
      required: false,
      multiple: false,
    };

    render(<Select {...props} />);

    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeInTheDocument();
  });

  test('renders multiple select correctly', () => {
    const props = {
      options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
      ],
      label: 'Multiple Select',
      required: false,
      multiple: true,
    };

    render(<Select {...props} />);

    const selectElement = screen.getByRole('listbox');
    expect(selectElement).toHaveAttribute('multiple');
  });

  test('renders required select', () => {
    const props = {
      options: [{ value: '1', label: 'Option 1' }],
      label: 'Required Select',
      required: true,
      multiple: false,
    };

    render(<Select {...props} />);

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeRequired();
  });
});
