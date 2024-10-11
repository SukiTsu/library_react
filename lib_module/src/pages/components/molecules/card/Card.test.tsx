import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'; 
import Card from './Card';
import React from 'react';

describe('Card Component', () => {
  test('renders Card with correct props', () => {
    
    const props = {
      title: 'Test Card Title',
      content: 'This is a description of the test card.',
      srcImg: 'test-image.jpg',
      bkColor: 'red',
    };

    render(<Card {...props} />);

    const imgElement = screen.getByRole('img');
    const titleElement = screen.getByText(props.title);
    const contentElement = screen.getByText(props.content);

    expect(imgElement).toHaveAttribute('src', props.srcImg);
    expect(titleElement).toBeInTheDocument(); 
    expect(contentElement).toBeInTheDocument(); 

    const cardElement = screen.getByRole('img').parentElement;
    expect(cardElement).toHaveClass('card');
    expect(cardElement).toHaveClass(props.bkColor);
  });
});