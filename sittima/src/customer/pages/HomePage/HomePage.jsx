import React from 'react'
import MainCarousel from '../../component/HomeCarousel/MainCarousel'
import HomeSectionCardCarousle from '../../component/HomeSectionCardCarousle/HomeSectionCardCarousle'
import { dummyjson } from '../../component/HomeSectionCard/dummyjson'
import { dummy1 } from '../../component/HomeSectionCard/dummy1'
import Footer from '../../component/footer/Footer'
import Navigation from '../../component/Navigation/Navigation'

const HomePage = () => {
  return (
    
   <div className="bg-black">
  <div>
    {/* <Navigation/> */}
       <MainCarousel/>
       <div className="mt-4">
      <div>
        <h2 className=" ml-16 text-[#cecece]  mb-8 font-medium text-2xl  ">Popular Products</h2>
      </div>
    <HomeSectionCardCarousle data={dummyjson}/>
    </div>  <div className="mt-4">
    <HomeSectionCardCarousle data={dummy1}/>
    </div>  <div className="mt-4">                                                    
      <div>
        <h2 className=" ml-16 text-[#cecece]  mb-8 font-medium text-2xl  ">Electronics Products</h2>
      </div>
    <HomeSectionCardCarousle data={dummyjson}/>
    </div>  <div className="mt-4">
    <HomeSectionCardCarousle data={dummyjson}/>
    <HomeSectionCardCarousle data={dummyjson}/>
      <div>
        <h2 className=" ml-16 text-[#cecece]  mb-8 font-medium text-2xl  ">Fashion Products</h2>
      </div>
    <HomeSectionCardCarousle data={dummyjson}/>
    </div>
         <div>
          {/* <Footer/> */}
         </div>


    </div>
   </div>
 
  )
}

export default HomePage