import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

const GithubStarsBanner = () => {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    fetch('https://api.github.com/repos/sweepai/sweep')
      .then(response => response.json())
      .then(data => setStars(data.stargazers_count));
  }, []);

  return (
    <Box bg="bg-surface" boxShadow="sm" width="full" p={4}>
      GitHub Stars: {stars}
    </Box>
  );
};

export default GithubStarsBanner;
