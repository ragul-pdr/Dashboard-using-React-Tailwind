import React from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
  return (
      <>
      <div>Products</div>
      <div>
        <p>
          <Link to="/" className="underline">This is product page. Go to Dashboard</Link>
        </p>
      </div>
    </>
  )
}

export default Products;