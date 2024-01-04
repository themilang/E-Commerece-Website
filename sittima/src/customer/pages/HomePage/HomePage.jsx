import React from 'react'
import MainCarousel from '../../component/HomeCarousel/MainCarousel'
import HomeSectionCardCarousle from '../../component/HomeSectionCardCarousle/HomeSectionCardCarousle'
import { dummyjson } from '../../component/HomeSectionCard/dummyjson'

const HomePage = () => {
  return (
   <div className="bg-black">
  <div>
       <MainCarousel/>
       <div className="mt-4">
      <div>
        <h2 className=" ml-16 text-[#cecece]  mb-8 font-medium text-2xl  ">Popular Products</h2>
      </div>
    <HomeSectionCardCarousle data={dummyjson}/>
    </div>  <div className="mt-4">
      <div>
        <h2 className=" ml-16 text-[#cecece]  mb-8 font-medium text-2xl  ">Popular Products</h2>
      </div>
    <HomeSectionCardCarousle data={dummyjson}/>
    </div>  <div className="mt-4">
      <div>
        <h2 className=" ml-16 text-[#cecece]  mb-8 font-medium text-2xl  ">Popular Products</h2>
      </div>
    <HomeSectionCardCarousle data={dummyjson}/>
    </div>  <div className="mt-4">
      <div>
        <h2 className=" ml-16 text-[#cecece]  mb-8 font-medium text-2xl  ">Popular Products</h2>
      </div>
    <HomeSectionCardCarousle data={dummyjson}/>
    </div>



    </div>
   </div>
 
  )
}

export default HomePage