import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'mocha';

import RadioGroup from './RadioGroup';
import {defaultRadioOptions} from './RadioGroup_data';

test('RadioGroup contient une option spécifiques', () => {
  // const [selectedValue, setSelectedValue] = useState<string>('option 1');
  const selectedValue = "option 1";
  const handleRadioChange=()=>"option 2";
  // const handleRadioChange = (value: string) => {
  //   setSelectedValue(value);
  // };
  render(<RadioGroup options={defaultRadioOptions} name="example" selectedValue={selectedValue}  onChange={handleRadioChange}/>);
  // <RadioGroup options={defaultRadioOptions} name="example" selectedValue={selectedValue}  onChange={handleRadioChange}/>
  const radiogrouptest = screen.getByTestId('radiogrouptest');
  const item = screen.getByText("Option 1");
  
  expect(radiogrouptest).toContainElement(item);
  });
  