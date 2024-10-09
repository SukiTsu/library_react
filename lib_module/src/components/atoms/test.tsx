import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from '../organismes/carousel/Carousel';

test('renders Carousel with initial items', () => {
  const items = ['10.png', '20.png', '30.png'];
  render(<Carousel images={items} />);
  expect(screen.getByText('s')).toBeInTheDocument();

  items.forEach((item, index) => {
    console.log(item);
    expect(screen.getByText(item)).toBeInTheDocument();
  });
});

