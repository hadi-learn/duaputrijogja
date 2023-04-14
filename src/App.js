import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Latest from './components/Latest'
import Location from './components/Location'
import Cta from './components/Cta'
import Features from './components/Features'
import About from './components/About'
import Products from './components/Products'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {

  const [heroHeight, setHeroHeight] = useState(0)
  const handleScroll = height => {
    setHeroHeight(height)
  }

  return (
    <div className="App">
      <Hero handleScroll={handleScroll}/>
      <Navbar heroHeight={heroHeight}/>
      <Products />
      <About />
      <Latest />
      <Features />
      <Location />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
