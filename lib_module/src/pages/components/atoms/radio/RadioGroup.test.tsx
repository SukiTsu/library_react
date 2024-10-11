import React from 'react';
import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'mocha';
import { expect } from 'expect';

// import RadioGroup from './RadioGroup';
// import {defaultRadioOptions} from './RadioGroup_data';
import RadioPage from './radioPage';

test('RadioGroup contient une option spécifiques', () => {

  render(<RadioPage/>);
  // <RadioGroup options={defaultRadioOptions} name="example" selectedValue={selectedValue}  onChange={handleRadioChange}/>
  const radiogrouptest = screen.getByTestId('radiogrouptest');
  const item = screen.getByAltText('Option 1');
  
  expect(radiogrouptest).toContain(item);
  });
  