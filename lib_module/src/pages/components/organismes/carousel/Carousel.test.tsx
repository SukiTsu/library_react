import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from './Carousel';
import {images} from './Carousel_data';

test('Carousel contient des images spécifiques', () => {
  render(<Carousel images={images} />);
  
  const carousel = screen.getByTestId('carousel');
  const item = screen.getByAltText('Carousel image 1');
  
  expect(carousel).toContainElement(item);
  });
  