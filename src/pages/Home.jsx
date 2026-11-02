import React from 'react';
import Hero from '../components/sections/Hero';
import AboutMe from '../components/sections/AboutMe';
import ProjectsOverview from '../components/sections/ProjectsOverview';
import Achievements from '../components/sections/Achievements';
import CertificatesOverview from '../components/sections/CertificatesOverview';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <ProjectsOverview />
      <Achievements />
      <CertificatesOverview />
    </>
  );
}
