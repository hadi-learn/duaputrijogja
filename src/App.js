import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProductsLayout from './components/ProductsLayout'
import Main from "./components/Main"
import AboutUs from './components/tentang/AboutUs'
import Products from './components/produk/Products'
import Partnership from './components/kemitraan/Partnership'
import SingleProduct from './components/produk/SingleProduct'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='tentang' element={<AboutUs />} />
        <Route path='kemitraan' element={<Partnership />} />
        <Route path='produk' element={<ProductsLayout />} >
          <Route index element={<Products />} />
          <Route path=':id' element={<SingleProduct />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
