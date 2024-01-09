import { render } from '@testing-library/react';
import CallToAction from '../components/CallToAction';

test('button color is green', () => {
  const { getByText } = render(<CallToAction />);
  const button = getByText('Install Sweep');
  expect(button).toHaveStyle('background-color: green.400');
});
