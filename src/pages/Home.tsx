import React from 'react';
import { Hero } from '../components/Hero';
import { ScholarshipPrograms } from '../components/ScholarshipPrograms';
import { Courses } from '../components/Courses';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { LearningHub } from '../components/LearningHub';
import { NewsAndEvents } from '../components/NewsAndEvents';
export const Home = () => {
  return <main>
      <Hero />
      <ScholarshipPrograms />
      <Courses />
      <LearningHub />
      <NewsAndEvents />
      <Services />
      <About />
    </main>;
};