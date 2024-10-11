import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Accordion, { Section } from './Accordion'; 

const sections: Section[] = [
    { title: 'Section 1', content: 'Contenu de la section 1' },
    { title: 'Section 2', content: 'Contenu de la section 2' },
    { title: 'Section 3', content: 'Contenu de la section 3' },
];

describe('Accordion component', () => {
    test('opens and closes a section when clicked (single section open)', () => {
        render(<Accordion />);

        const firstSectionTitle = screen.getByText(sections[0].title);
        const firstSectionContent = sections[0].content;

        expect(screen.queryByText(firstSectionContent)).not.toBeInTheDocument();

        fireEvent.click(firstSectionTitle);
        expect(screen.getByText(firstSectionContent)).toBeInTheDocument();

        fireEvent.click(firstSectionTitle);
        expect(screen.queryByText(firstSectionContent)).not.toBeInTheDocument();
    });

    test('opens multiple sections when allowMultipleOpen is true', () => {
        render(<Accordion allowMultipleOpen />);

        const firstSectionTitle = screen.getByText(sections[0].title);
        const secondSectionTitle = screen.getByText(sections[1].title);

        const firstSectionContent = sections[0].content;
        const secondSectionContent = sections[1].content;

        fireEvent.click(firstSectionTitle);
        expect(screen.getByText(firstSectionContent)).toBeInTheDocument();

        fireEvent.click(secondSectionTitle);
        expect(screen.getByText(secondSectionContent)).toBeInTheDocument();
        expect(screen.getByText(firstSectionContent)).toBeInTheDocument();
    });

    test('applies custom styles correctly', () => {
        const customStyles = {
          headerColor: '#ff0000',
          contentColor: '#00ff00',
          borderColor: '#0000ff',
          width: '500px',
          borderRadius: '10px',
          backgroundColor: '#f0f0f0',
        };

        const { container } = render(<Accordion customStyles={customStyles} />);
        
        const accordionElement = container.firstChild as HTMLElement;
        expect(accordionElement).toHaveStyle('border-color: #0000ff');
        expect(accordionElement).toHaveStyle('width: 500px');
        expect(accordionElement).toHaveStyle('border-radius: 10px');
        expect(accordionElement).toHaveStyle('background-color: #f0f0f0');
        
        const firstHeader = screen.getByText(sections[0].title);
        expect(firstHeader).toHaveStyle('background-color: #ff0000');
        
        fireEvent.click(firstHeader);
        const firstContent = screen.getByText(sections[0].content);
        expect(firstContent.parentElement).toHaveStyle('background-color: #00ff00');
    });
});
