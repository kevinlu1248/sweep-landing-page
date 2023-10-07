import React from 'react';
import { render, getByText } from '@testing-library/react';
import GithubBanner from './GithubBanner';

describe('GithubBanner', () => {
  it('renders without crashing', () => {
    render(<GithubBanner />);
  });

  it('displays the number of stars', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ stargazers_count: 123 }),
      })
    );

    const { getByText } = render(<GithubBanner />);
    const starsElement = await getByText('Stars: 123');

    expect(starsElement).toBeInTheDocument();
  });

  it('displays an error message when the request fails', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Fetch failed')));

    const { getByText } = render(<GithubBanner />);
    const errorElement = await getByText(/Error: Fetch failed/i);

    expect(errorElement).toBeInTheDocument();
  });
});
