import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';
import { LoaderProps } from './LoaderConfig';

describe('Loader component', () => {
  test('renders progress loader correctly', () => {
    const props: LoaderProps = {
      type: 'progress',
      size: '50%', // Taille du conteneur
      progress: 70, // La largeur de la barre de progression
      customStyles: { color: 'blue' }, // Couleur personnalisée pour la barre de progression
    };

    render(<Loader {...props} />);

    // Vérifier que la barre de progression est présente
    const progressBarContainer = screen.getByRole('progressbar');
    expect(progressBarContainer).toBeInTheDocument();
    expect(progressBarContainer).toHaveStyle('width: 50%'); // Largeur du conteneur
    expect(progressBarContainer.firstChild).toHaveStyle('width: 70%'); // Largeur de la barre de progression
    expect(progressBarContainer.firstChild).toHaveStyle('background-color: blue'); // Couleur de la barre
  });

  test('renders spinner loader correctly', () => {
    const props: LoaderProps = {
      type: 'spinner',
      size: '40px', // Assurez-vous que la taille est une chaîne
      progress: 0,
      customStyles: { color: 'red' }, // Couleur personnalisée pour la bordure
    };

    render(<Loader {...props} />);

    // Vérifier que le spinner est présent
    const spinner = screen.getByRole('img'); // Utiliser le rôle 'img'
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveStyle('width: 40px');
    expect(spinner).toHaveStyle('height: 40px');

    // Rechercher le cercle du spinner à l'intérieur de l'élément du spinner
    const spinnerCircle = spinner.querySelector('.spinner-circle');

    // Vérifiez la couleur de la bordure
    expect(spinnerCircle).toHaveStyle('border-color: red'); // Vérifie la couleur de la bordure personnalisée
  });

  test('renders with default styles when no custom styles are provided', () => {
    const props: LoaderProps = {
      type: 'spinner',
      size: '40px', // Assurez-vous que la taille est une chaîne
      progress: 0,
      customStyles: {}, // Pas de styles personnalisés
    };

    render(<Loader {...props} />);

    // Vérifier que le spinner est présent
    const spinner = screen.getByRole('img'); // Utiliser le rôle 'img'
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveStyle('width: 40px');
    expect(spinner).toHaveStyle('height: 40px');

    // Rechercher le cercle du spinner à l'intérieur de l'élément du spinner
    const spinnerCircle = spinner.querySelector('.spinner-circle');

    // Vérifiez que la bordure par défaut est de couleur #0080ff
    expect(spinnerCircle).toHaveStyle('border-color: #0080ff'); // Vérifie la couleur de la bordure par défaut
  });
});
