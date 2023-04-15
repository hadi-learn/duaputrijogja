import products from '../../products/products'

const Products = () => {

  const productList = products.map(product => (
    <ul className=''>
      <li key={product.id}>
        <a href={`/produk/${product.id}`}>{product.heading}</a>
      </li>
    </ul>
  ))
  return (
    <div>
      {productList}
    </div>
  )
}

export default Products