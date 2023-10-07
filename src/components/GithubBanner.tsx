import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

const GithubBanner = () => {
  const [stars, setStars] = useState('N/A');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/repos/sweepai/sweep')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch data from GitHub API');
        }
      })
      .then(data => {
        setStars(data.stargazers_count);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <Box>
      {loading ? 'Loading...' : `GitHub Stars: ${stars}`}
    </Box>
  );
};

export default GithubBanner;
