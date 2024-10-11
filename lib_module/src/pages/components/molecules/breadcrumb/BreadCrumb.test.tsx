import { render, screen } from '@testing-library/react';
import BreadCrumbs from './BreadCrumb';
import React from 'react';

describe('BreadCrumbs Component', () => {
  const mockProps = {
    listOnglet: ['Home', 'About', 'Contact'],
    listLien: ['/home', '/about', '/contact'],
    bkColor: 'bg-blue',
  };

  test('renders the correct number of breadcrumbs', () => {
    render(<BreadCrumbs {...mockProps} />);

    // Vérifie que chaque élément de la liste est affiché
    const breadcrumbItems = screen.getAllByRole('listitem');
    expect(breadcrumbItems.length).toBe(mockProps.listOnglet.length);
  });

  test('renders each breadcrumb with correct text and link', () => {
    const { listOnglet, listLien } = mockProps;
    
    render(<BreadCrumbs {...mockProps} />);
  
    listOnglet.forEach((onglet, index) => {
      // Recherche l'élément de lien avec le texte correspondant
      const linkElement = screen.getByText(onglet);
  
      // Récupère la valeur du lien href
      const hrefValue = linkElement.getAttribute('href');
      
      // Vérifie que le href correspond à la valeur attendue dans listLien
      expect(hrefValue).toBe(listLien[index]);
    });
  });
  

  test('applies the correct background color class', () => {
    const { container } = render(<BreadCrumbs {...mockProps} />);
  
    // Vérifie que la première balise ul a la bonne classe
    const ulElement = container.querySelector('ul');  // Trouve la balise ul contenant les classes
  
    // Vérifie si 'ulElement' n'est pas null, puis récupère les classes
    expect(ulElement).not.toBeNull();
  
    const classList = ulElement?.getAttribute('class'); // Récupère les classes de l'élément ul
  
    expect(classList).toContain(mockProps.bkColor); // Vérifie si la classe de la couleur de fond est présente
  });
  


  test('renders nothing if the length of listOnglet and listLien do not match', () => {
    const invalidProps = {
      ...mockProps,
      listLien: ['/home', '/about'], // Moins de liens que d'onglets
    };

    const { container } = render(<BreadCrumbs {...invalidProps} />);
    
    // Vérifie que le composant ne renvoie rien
    expect(container.firstChild).toBeNull();
  });
});