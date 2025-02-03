"use client";
import About from '@/components/About'
import Banner from '@/components/Banner'
import GetInTouch from '@/components/GetInTouch'
import Header from '@/components/Header'
import Loader from '@/components/Loading'
import ProjectModal from '@/components/project-modal'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'

function Home () {
  const [loadingComplete, setLoadingComplete] = useState(false);
  return (
    <div>
      {!loadingComplete && <Loader onComplete={() => setLoadingComplete(true)} />}
      {loadingComplete && (
        <>
       <Header />
      <Banner  loadingComplete={loadingComplete}/>
      <About />
      <Skills />
      <Projects />
      <GetInTouch />
      <AnimatePresence>
      <ProjectModal />
      </AnimatePresence>
      </>
    )}
     
    </div>
  )
}

export default Home
