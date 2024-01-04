import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {MainCarouselData} from './MainCarouselData'

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};


const MainCarousel = () => {
    
const items = MainCarouselData.map((item)=>
<img className='cursor-pointer '  src={item.image} alt='' role='presentation'/>)
 
  
 return (
    <>
    <AliceCarousel 
        mouseTracking
        items={items}
        controlsStrategy="alternate"
        autoPlay
        autoPlayInterval={1000}
        disableButtonsControls
        infinite
    />
    </>
    )
 };
export default MainCarousel