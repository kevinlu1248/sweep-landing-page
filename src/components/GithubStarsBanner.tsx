import React, { useState, useEffect } from 'react';
import { Box, Link, Text } from '@chakra-ui/react';

const GithubStarsBanner = () => {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const fetchStars = async () => {
      const response = await fetch('https://api.github.com/repos/sweepai/sweep');
      const data = await response.json();
      setStars(data.stargazers_count);
    };

    fetchStars();
  }, []);

  return (
    <Box>
      <Link href="https://github.com/sweepai/sweep" isExternal>
        <Text>sweepai/sweep has {stars} stars on GitHub</Text>
      </Link>
    </Box>
  );
};

export default GithubStarsBanner;
