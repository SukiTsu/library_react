import { render, screen } from '@testing-library/react';
import CheckBox from './Checkbox';
import React from 'react';

describe('CheckBox Component', () => {
  const mockProps = {
    titleBox: 'Choisissez vos options',
    listChek: ['Option 1', 'Option 2', 'Option 3'],
    bkColor: 'bg-blue',
  };

  test('renders the correct title', () => {
    render(<CheckBox {...mockProps} />);

    // Vérifie que le titre est affiché correctement
    const titleElement = screen.getByText(mockProps.titleBox);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the correct number of checkboxes', () => {
    render(<CheckBox {...mockProps} />);

    // Vérifie que chaque case à cocher est rendue
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes.length).toBe(mockProps.listChek.length);
  });

  test('renders each checkbox with correct label', () => {
    render(<CheckBox {...mockProps} />);

    // Vérifie que chaque case à cocher a le bon label
    mockProps.listChek.forEach((label, index) => {
      const checkboxLabel = screen.getByLabelText(label);
      expect(checkboxLabel).toBeInTheDocument();
      expect(checkboxLabel).toHaveAttribute('id', mockProps.listChek[index]);
    });
  });

  test('applies the correct background color class', () => {
    const { container } = render(<CheckBox {...mockProps} />);

    // Vérifie que la couleur de fond (classe CSS) est appliquée
    expect(container.firstChild).toHaveClass(mockProps.bkColor);
  });

  test('renders nothing if the listChek is empty', () => {
    const emptyProps = {
      ...mockProps,
      listChek: [],
    };

    const { container } = render(<CheckBox {...emptyProps} />);

    // Vérifie qu'il n'y a pas de cases à cocher rendues
    const checkboxes = screen.queryAllByRole('checkbox');
    expect(checkboxes.length).toBe(0);

    // Vérifie que le titre est toujours rendu
    expect(container.querySelector('h1')).toBeInTheDocument();
  });
});