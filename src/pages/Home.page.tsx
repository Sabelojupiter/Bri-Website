import React from 'react';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import HeroSection from '@/sections/Hero.section';

export function HomePage() {
  return (
    <div className="homepage">
      <h1>Hello my name is derp</h1>
      <Welcome />
      <ColorSchemeToggle />
      <HeroSection />
    </div>
  );
}
