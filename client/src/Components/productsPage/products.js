import React from 'react'
import Navbar from '../navbar/navbar'
import Sidebar from '../sidebar/sidebar'
import SmallFooter from '../Footer/smallFooter'
import ProductsContainer from './productsContainer'
const Products = () => {
  return (
 <>
      <Navbar/>
    <div className="main-center-container">
       <Sidebar/>
       <ProductsContainer/>
    </div>
    <SmallFooter/>
 </>
  )
}

export default Products
