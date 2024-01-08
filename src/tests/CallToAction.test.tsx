import React from 'react';
import { render } from '@testing-library/react';
import CallToAction from '../components/CallToAction';

describe('CallToAction', () => {
  test('button has correct color properties', () => {
    const { getByRole } = render(<CallToAction />);
    const button = getByRole('button');

    expect(button).toHaveStyle('colorScheme: green');
    expect(button).toHaveStyle('bg: green.400');
    expect(button).toHaveStyle('_hover: { bg: "green.600" }');
  });
});
