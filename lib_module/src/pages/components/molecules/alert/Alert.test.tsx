// lib_module/src/components/molecules/alert/Alert.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Alert from './Alert';
import {type, message, autoClose, autoCloseTime} from './Alert_data';

// Recherche d'un message d'alerte particulier :
test('Test : recherche d\'un élément dans Alert.', () => {
  render(<Alert type={type} message={message} autoClose={autoClose} autoCloseTime={autoCloseTime} />);

  const alert = screen.getByTestId('message');
  const item = screen.getByText('Message d\'alerte !');

  expect(alert).toContainElement(item);
});
