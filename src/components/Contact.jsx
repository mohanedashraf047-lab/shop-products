import React from 'react'
import ContactHero from './Contact/ContactHero'
import ContactDetails from './Contact/ContactDetails'
import NewsLetter from './Home/NewsLetter'
import ContactForm from './Contact/ContactForm'

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactDetails />
      <ContactForm />
      <NewsLetter />
    </div>
  )
}

export default Contact
