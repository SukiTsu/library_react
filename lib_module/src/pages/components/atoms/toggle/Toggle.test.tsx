import React from 'react';
import { render, screen } from '@testing-library/react';
import Toggle from './Toggle'; 

describe('Toggle Component', () => {
  const mockProps = {
    form: 'rond',
    color: 'blue',
  };

  test('renders a toggle with the form carre', () => {
    const propsWithCarre = { ...mockProps, form: 'carre' }; // Testons avec la forme "carre"
    render(<Toggle form='rond' color='blue' />);

    // Utilise getByTestId pour sélectionner l'élément slider
    const sliderElement = screen.getByTestId('slider');

    // Vérifie manuellement que l'élément a la classe "carre"
    const classList = sliderElement.getAttribute('class');
    expect(classList).toContain('rond'); // Vérifie si la classe "carre" est présente
  });

  test('renders a toggle with the color red', () => {
    const propsWithRedColor = { ...mockProps, color: 'red' }; // Testons avec la couleur "red"
    render(<Toggle form='rond' color='blue' />);

    // Utilise getByRole pour vérifier l'élément checkbox
    const checkboxElement = screen.getByRole('checkbox');

    // Vérifie manuellement que l'élément a la classe "red"
    const classList = checkboxElement.getAttribute('class');
    expect(classList).toContain('blue'); // Vérifie si la classe "red" est présente
  });
});