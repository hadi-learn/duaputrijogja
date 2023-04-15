import { useParams } from "react-router-dom"
import products from "../../products/products"

const SingleProduct = () => {

  const { id } = useParams()
  const product = products.find(product => product.id === Number(id))

  return (
    <div>
      <p>Produk: {product.heading}</p>
      <p>{product.subheading}</p>
    </div>
  )
}

export default SingleProduct