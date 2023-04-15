import { Outlet } from 'react-router-dom'
import ProductHeader from './produk/ProductHeader'
import ProductFooter from './produk/ProductFooter'

const ProductsLayout = () => {
  return (
    <>
      <ProductHeader />
      <div className="dash-container">
          <Outlet />
      </div>
      <ProductFooter />
    </>
  )
}

export default ProductsLayout