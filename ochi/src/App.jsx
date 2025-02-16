import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white bg-zinc-900'>
        <Navbar/>
        <Landing/>
        <Marquee/>
        <About/>
        <Eyes/>
        <Featured/>
    </div>
  )
}

export default App