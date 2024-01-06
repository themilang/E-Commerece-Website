import React from 'react'
import ProductDetails from '../../component/ProductDetails/ProductDetail'
import HomeSectionCardCarousle from '../../component/HomeSectionCardCarousle/HomeSectionCardCarousle'
import HomeSectionCard from '../../component/HomeSectionCard/HomeSectionCard'
import { dummy1 } from '../../component/HomeSectionCard/dummy1'

const ProductDetailsPage = () => {
  return (
    <>
    <ProductDetails/>
    <div className='bg-black'>
    <h1 className='text-3xl font-bold text-white ml-16 mb-4 '>Related prducts</h1>
    < HomeSectionCardCarousle data={dummy1}/>
      </div>
    </>
  )
}

export default ProductDetailsPage