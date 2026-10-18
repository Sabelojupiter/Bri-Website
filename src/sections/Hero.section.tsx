import React from 'react';
import { Container } from '@mantine/core';

const HeroSection = () => {
  return (
    <Container
      fluid
      h={50}
      className="hero-section"
    >
      Fluid container has 100% max-width
    </Container>
  );
};

export default HeroSection;
