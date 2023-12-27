import React from 'react';
import { render, getByRole } from '@testing-library/react';
import CallToAction from './CallToAction';

describe('CallToAction', () => {
  test('button has correct color properties', () => {
    const { container } = render(<CallToAction />);
    const button = getByRole(container, 'button');
    
    expect(button).toHaveStyle(`
      color: white;
      colorScheme: green;
      bg: green.400;
      _hover: { bg: green.600 };
    `);
  });
});
