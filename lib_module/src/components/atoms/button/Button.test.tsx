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
    
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.queryByText('Submit')).not.toBeInTheDocument();
  });

  test('applies custom styles', () => {
    const props: ButtonProps = {
      label: 'Styled Button',
      onClick: jest.fn(),
      customStyles: {
        backgroundColor: '#ff0000',
        color: '#ffffff',
        borderRadius: '10px',
      },
    };
    renderButton(props);

    const button = screen.getByText('Styled Button') as HTMLButtonElement;
    expect(button).toHaveStyle(`
      background-color: #ff0000;
      color: #ffffff;
      border-radius: 10px;
    `);
  });
});
