import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import Carousel from './Carousel';

test('renders Carousel with initial items', () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  render(<Carousel images={items} />);

  items.forEach((item, index) => {
    expect(screen.getByText(item)).toBeInTheDocument();
  });
});