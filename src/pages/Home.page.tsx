import React from 'react';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { CardsCarousel } from '@/sections/CardsCarousel.section';
import HeroSection from '@/sections/Hero.section';

export function HomePage() {
  return (
    <div className="homepage">
      <HeroSection />
      <CardsCarousel />
    </div>
  );
}
