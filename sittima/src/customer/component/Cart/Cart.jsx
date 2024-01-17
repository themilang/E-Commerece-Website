import React from 'react'
import CartItems from './CartItems'
import { dummyjson } from '../HomeSectionCard/dummyjson'
import { Button } from '@mui/material'

const Cart = () => {
  return (
  <div className='' >
   
 <div className='ml-2 lg:ml-0 mr-2 lg:grid md:space-y-5 grid-cols-3 md:space-x-16  lg:px-16 relative'>
  <div className='   md:col-span-2 border border-[#3e3e3e] px-5 xs:border-t-0 mt-5 border-r-0 border-l-0 mb-20  w-full'>
  <h1 className='text-white mt-5 font-bold text-3xl'>
    Shopping Cart
    </h1>
    <div className=''>

      <CartItems  />
    </div>
    <div>

    </div>
    </div>
    <div>
    <div className='border md:col-span-1  border-[#3e3e3e] px-5 sticky  top-0  mt-5 mb-20 lg:mt-0 '>
      <div className='border border-t-0 border-[#424242] border-l-0  border-r-0 border-b-0'>
        <p className='upercase font-bold opacity-60 pb-10 mt-3  text-white'>Summary</p>
      </div>
    <hr />
    <div className='space-y-3 font-semibold'>

      <div className='flex mt-6 justify-between pt-3 text-white '>
      <span>Price</span>
      <span>Rs 3544</span>
      </div>
      
      <div className='flex justify-between pt-3 text-white '>
      <span>Discount</span>
      <span className='text-[#27ec31]'> 460 </span>
      </div>
      
      <div className='flex justify-between pt-3 text-white '>
      <span>Delivery Charges</span>
      <span className='text-[#27ec31]'>free</span>
      </div>
      

    </div>
      <div className='border border-l-0 border-r-0 border-b-0 mt-4 '>
      <div className='flex justify-between pt-3 text-white '>
      <span className='font-bold'>Total</span>
      <span className='text-white font-bold text-2xl mb-2'>Rs.34443</span>
      </div>
      </div>
      <div  className=''>
                <Button
                    variant="contained"
                   sx={{alignItems:'center',
                        padding:'0.5rem',
                        width:'100%',
                        marginTop:'1rem',
                        marginBottom:'1rem',
                        backgroundColor:'purple',
                     
                        
                      
                  
                  
                  }}
                  >
                   Check Out
                  </Button>
                </div>
                
                </div>
               
    </div>
 
               
    </div>
   
    
    </div>
     

  )
}

export default Cart