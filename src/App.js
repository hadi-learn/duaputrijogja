import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Latest from './components/Latest'
import Cta from './components/Cta'
import Features from './components/Features'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Hero />
      <Navbar />
      <Latest />
      <Features />
      <Cta />
      <Products />
      <Footer />
    </div>
  )
}

export default App
