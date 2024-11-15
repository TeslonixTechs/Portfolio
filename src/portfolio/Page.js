import React from 'react'
import About from './screens/About'
import Home from './screens/Home'
import Services from './screens/Services'
import Skills from './screens/Skills'
import Projects from './screens/Projects'
import Contact from './screens/Contact'

const Page = () => {
  return (
    <div>
        <Home />
        <About />
        <Projects />
        <Services />
        <Skills />
        <Contact />
    </div>
  )
}

export default Page