import About from '@/components/About'
import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Loader from '@/components/Loading'
import ProjectModal from '@/components/project-modal'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { AnimatePresence } from 'framer-motion'
import React from 'react'

function Home () {
  return (
    <div>
      <Loader />
      <Header />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <AnimatePresence>
      <ProjectModal />
      </AnimatePresence>
     
    </div>
  )
}

export default Home
