import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component', () => {
  const mockProps = {
    title: 'Titre de test',
    content: 'Contenu de test',
    bkColor: 'bg-blue',
    position: 'centered',
  };

  test('renders the open button initially', () => {
    render(<Modal {...mockProps} />);

    // Vérifie que le bouton "Ouvrir" est affiché au départ
    const openButton = screen.getByText('Ouvrir');
    expect(openButton).toBeInTheDocument();
  });

  test('opens the modal when the button is clicked', () => {
    render(<Modal {...mockProps} />);

    // Simule un clic sur le bouton "Ouvrir"
    const openButton = screen.getByText('Ouvrir');
    fireEvent.click(openButton);

    // Vérifie que le titre et le contenu du modal sont affichés après l'ouverture
    const modalTitle = screen.getByText(mockProps.title);
    const modalContent = screen.getByText(mockProps.content);
    expect(modalTitle).toBeInTheDocument();
    expect(modalContent).toBeInTheDocument();
  });

  test('closes the modal when the close button is clicked', () => {
    render(<Modal {...mockProps} />);

    // Ouvrir le modal
    const openButton = screen.getByText('Ouvrir');
    fireEvent.click(openButton);

    // Simule un clic sur le bouton "Fermer"
    const closeButton = screen.getByText('Fermer');
    fireEvent.click(closeButton);

    // Vérifie que le modal est fermé et que le bouton "Ouvrir" est à nouveau visible
    expect(screen.queryByText(mockProps.title)).not.toBeInTheDocument();
    expect(screen.getByText('Ouvrir')).toBeInTheDocument();
  });
});