import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

const GithubBanner = () => {
  const [stars, setStars] = useState(null);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    fetch('https://api.github.com/repos/sweepai/sweep')
      .then(response => response.json())
      .then(data => setStars(data.stargazers_count))
      .catch(error => setError(error));
  }, []);

  return (
    <Box>
      {error ? `Error: ${error.message}` : `Stars: ${stars}`}
    </Box>
  );
};

export default GithubBanner;
