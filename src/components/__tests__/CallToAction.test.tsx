import React from 'react';
import { render } from '@testing-library/react';
import CallToAction from '../CallToAction';

test('Button color is green', () => {
  const { getByText } = render(<CallToAction />);
  const button = getByText('Install Sweep');
  expect(button).toHaveStyle('colorScheme: green');
  expect(button).toHaveStyle('bg: green.400');
  expect(button).toHaveStyle('_hover: { bg: green.600 }');
});
