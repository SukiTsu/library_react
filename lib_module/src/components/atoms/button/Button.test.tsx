import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

const renderButton = (props: ButtonProps) => render(<Button {...props} />);

describe('Button component', () => {
  test('renders the correct label', () => {
    const props: ButtonProps = {
      label: 'Click Me',
      onClick: jest.fn(),
    };
    renderButton(props);
    
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const onClickMock = jest.fn();
    const props: ButtonProps = {
      label: 'Click Me',
      onClick: onClickMock,
    };
    renderButton(props);
    
    fireEvent.click(screen.getByText('Click Me'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('renders as disabled when disabled prop is true', () => {
    const props: ButtonProps = {
      label: 'Disabled Button',
      onClick: jest.fn(),
      disabled: true,
    };
    renderButton(props);
    
    const button = screen.getByText('Disabled Button') as HTMLButtonElement;
    expect(button).toBeDisabled();
  });

  test('shows loader when loading is true', () => {
    const props: ButtonProps = {
      label: 'Submit',
      onClick: jest.fn(),
      loading: true,
    };
    renderButton(props);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.queryByText('Submit')).not.toBeInTheDocument();
  });

  test('renders primary button', () => {
    const props: ButtonProps = {
      label: 'Primary Button',
      onClick: jest.fn(),
      type: 'primary',
    };
    renderButton(props);
    
    const button = screen.getByText('Primary Button') as HTMLButtonElement;
    expect(button).toHaveClass('button primary');
  });

  test('renders secondary button', () => {
    const props: ButtonProps = {
      label: 'Secondary Button',
      onClick: jest.fn(),
      type: 'secondary',
    };
    renderButton(props);
    
    const button = screen.getByText('Secondary Button') as HTMLButtonElement;
    expect(button).toHaveClass('button secondary');
  });

  test('renders danger button', () => {
    const props: ButtonProps = {
      label: 'Danger Button',
      onClick: jest.fn(),
      type: 'danger',
    };
    renderButton(props);
    
    const button = screen.getByText('Danger Button') as HTMLButtonElement;
    expect(button).toHaveClass('button danger');
  });
});
