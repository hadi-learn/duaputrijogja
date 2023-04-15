import Hero from './main/Hero'
import Navbar from './main/Navbar'
import Latest from './main/Latest'
import Location from './main/Location'
import Cta from './main/Cta'
import Features from './main/Features'
import About from './main/About'
import Highlight from './main/Highlight'
import Footer from './main/Footer'
import { useState } from 'react'

function Main() {

  const [heroHeight, setHeroHeight] = useState(0)
  const handleScroll = height => {
    setHeroHeight(height)
  }

  return (
    <div>
      <Hero handleScroll={handleScroll}/>
      <Navbar heroHeight={heroHeight}/>
      <Highlight />
      <About />
      <Latest />
      <Features />
      <Location />
      <Cta />
      <Footer />
    </div>
  )
}

export default Main
