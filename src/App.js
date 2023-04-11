import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Latest from './components/Latest'
import Location from './components/Location'
import Cta from './components/Cta'
import Features from './components/Features'
import About from './components/About'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Hero />
      <Navbar />
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
