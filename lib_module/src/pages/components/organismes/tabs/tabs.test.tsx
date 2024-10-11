import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Tabs from './Tabs';
import '../../assets/css/styleTabs.css'
import React from 'react';

const mockTitles = ['Title 1', 'Title 2', 'Title 3'];
const mockContent = ['Content 1', 'Content 2', 'Content 3'];
const mockColor = 'blue';

describe('Tabs component', () => {
  test('renders titles correctly', () => {
    
    render(<Tabs titles={mockTitles} listContent={mockContent} color={mockColor} />);
    
    mockTitles.forEach(title => {
      expect(screen.getByText(title)).toBeTruthy();
    });
  });

  test('displays correct content when a title is clicked', () => {

    render(<Tabs titles={mockTitles} listContent={mockContent} color={mockColor} />);
    
    const firstTitle = screen.getByText('Title 1');
    fireEvent.click(firstTitle);
    
    expect(screen.getByText('Content 1')).toBeTruthy();
    
    const secondTitle = screen.getByText('Title 2');
    fireEvent.click(secondTitle);
    
    expect(screen.getByText('Content 2')).toBeTruthy();
  });

  test('renders nothing if the number of titles and content are not equal', () => {
    const { container } = render(<Tabs titles={mockTitles} listContent={['Only one content']} color={mockColor} />);
    
    expect(container.firstChild).toBeNull();
  });

  test('applies the correct color class', () => {
    const { container } = render(<Tabs titles={mockTitles} listContent={mockContent} color={mockColor} />);
    
    const tabHeaders = container.querySelector('.tabs-header');
    expect(tabHeaders?.classList.contains('blue')).toBe(true);
  });
});