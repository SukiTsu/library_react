import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';
import { LoaderProps } from './LoaderConfig';

describe('Loader component', () => {
  test('renders progress loader correctly', () => {
    const props: LoaderProps = {
      type: 'progress',
      size: '50%',
      progress: 70,
      customStyles: { color: 'blue' }, 
    };

    render(<Loader {...props} />);

    const progressBarContainer = screen.getByRole('progressbar');
    expect(progressBarContainer).toBeInTheDocument();
    expect(progressBarContainer).toHaveStyle('width: 50%');
    expect(progressBarContainer.firstChild).toHaveStyle('width: 70%');
    expect(progressBarContainer.firstChild).toHaveStyle('background-color: blue');
  });

  test('renders spinner loader correctly', () => {
    const props: LoaderProps = {
      type: 'spinner',
      size: '40px',
      progress: 0,
      customStyles: { color: 'red' },
    };

    render(<Loader {...props} />);

    const spinner = screen.getByRole('img');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveStyle('width: 40px');
    expect(spinner).toHaveStyle('height: 40px');

    const spinnerCircle = spinner.querySelector('.spinner-circle');

    expect(spinnerCircle).toHaveStyle('border-color: red');
  });

  test('renders with default styles when no custom styles are provided', () => {
    const props: LoaderProps = {
      type: 'spinner',
      size: '40px',
      progress: 0,
      customStyles: {},
    };

    render(<Loader {...props} />);

    const spinner = screen.getByRole('img');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveStyle('width: 40px');
    expect(spinner).toHaveStyle('height: 40px');

    const spinnerCircle = spinner.querySelector('.spinner-circle');

    expect(spinnerCircle).toHaveStyle('border-color: #0080ff');
  });
});
