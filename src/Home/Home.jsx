import React from 'react'
import Hero from '../Component/Hero'
import About from '../Component/About'
import Skills from '../Component/Skills'
import Project from '../Component/Project'
import Contact from '../Component/Contact'


const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>

    </div>
  )
}

export default Home