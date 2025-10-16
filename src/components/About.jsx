import React from 'react'
import NewsLetter from './Home/NewsLetter'
import Features from './Home/Features'
import AboutHero from './About/AboutHero'
import AboutMainSection from './About/AboutMainSection'
import AboutApp from './About/AboutApp'

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutMainSection />
      <AboutApp />
      <Features />
      <NewsLetter />
    </div>
  )
}

export default About