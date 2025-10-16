import React from 'react'
import StayHome from './Shop/StayHome'
import AllProducts from './Shop/AllProducts'
import NewsLetter from './Home/NewsLetter'
import ShopPags from './Shop/ShopPags'
import { useState } from 'react'
import ProductDetails from './Shop/ProductDetails'

const Shop = () => {
  const [productDetails, setProductDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handlProduct =(product) =>{
    // console.log("handlProduct called with: ", product);
    
    setProductDetails(true);
    setSelectedProduct(product);
    window.scrollTo({top: 270, behavior: "smooth"})
  }
  return (
    <div>
      <StayHome />
      {productDetails && <ProductDetails product={selectedProduct} />}
      <AllProducts onProductClick={handlProduct} />
      <ShopPags />
      <NewsLetter />
    </div>
  )
}

export default Shop
