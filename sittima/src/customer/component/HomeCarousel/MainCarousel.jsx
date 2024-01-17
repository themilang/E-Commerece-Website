import React, { useEffect, useState } from 'react';
import AliceCarousel, { Classnames } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';


const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const MainCarousel = () => {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = MainCarouselData.map((item) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = item.image;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setIsImagesLoaded(true))
      .catch((error) => console.error('Error preloading images:', error));
  }, []);

  if (!isImagesLoaded) {
    return <div>Loading...</div>;
  }
 

  const items = MainCarouselData.map((item, index) => (
    <img
      key={index}
      className='cursor-pointer rounded-2xl'
      src={item.image}
      alt=''
      role='presentation'
    />
  ));

  return (
    <>
      <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy='alternate'
        autoPlay
        autoPlayInterval={1000}
        disableButtonsControls
        infinite
        dotsPosition='top'
      
        
      />
    </>
  );
};

export default MainCarousel;
