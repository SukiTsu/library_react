import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader component', () => {
  test('renders progress loader correctly with progress value', () => {
    render(<Loader type="progress" progress={70} />);

    const progressBarContainer = screen.getByRole('progressbar');
    expect(progressBarContainer).toBeInTheDocument();
    
    const progressBar = progressBarContainer.querySelector('.progress-bar');
    expect(progressBar).toHaveStyle('width: 70%');
  });

  test('renders spinner loader correctly', () => {
    render(<Loader type="spinner" />);

    const spinner = screen.getByRole('img');
    expect(spinner).toBeInTheDocument();

    const spinnerCircle = spinner.querySelector('.spinner-circle');
    expect(spinnerCircle).toHaveClass('spinner-circle');
  });

  test('renders with default styles when no progress value is provided', () => {
    render(<Loader type="progress" />);

    const progressBarContainer = screen.getByRole('progressbar');
    expect(progressBarContainer).toBeInTheDocument();

    const progressBar = progressBarContainer.querySelector('.progress-bar');
    expect(progressBar).toHaveStyle('width: 0%');
  });

  test('renders spinner with default styles', () => {
    render(<Loader type="spinner" />);

    const spinner = screen.getByRole('img');
    expect(spinner).toBeInTheDocument();

    const spinnerCircle = spinner.querySelector('.spinner-circle');
    expect(spinnerCircle).toHaveClass('spinner-circle');
  });
});
