import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';


const HomeSectionCard = ({ product }) => {
  const [ref, inView] = useInView();
  const navigate = useNavigate(); // Move useNavigate inside the component

  const handleCardClick = () => {
    navigate('/product-details');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      onClick={handleCardClick} // Make the entire card clickable
      ref={ref}
      className={`sm:items-center cursor-pointer rounded-lg flex flex-col items-center bg-[#202020] shadow-lg overflow-hidden w-[14rem] mx-auto transform transition-opacity ${
        inView
          ? 'opacity-100 translate-y-0 duration-1000 ease-out'
          : 'opacity-0 translate-y-5 duration-1000 ease-in'
      }`}
    >
      <div className='h-[10rem] mt-5 w-[10rem]'>
        <img
          className='object-cover object-top w-full h-full'
          src={product.thumbnail}
          alt='mac'
        />
      </div>

      <div className='p-4'>
        <h1 className='text-lg font-medium text-white text-center'>{product.title}</h1>
        <div className='flex flex-row'>
          <h3 className='mt-3 font-extrabold p-1 text-[#3a9f0f] text-center'>
            Rs. {product.price}
          </h3>
          <p className='mt-3 font-bold text-xs line-through p-1 text-[#595959] text-center'>
            {product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCard;
