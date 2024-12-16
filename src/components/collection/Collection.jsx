import React from 'react'
import imag1 from '@/assets/images/axa/o1.png'
import imag2 from '@/assets/images/axa/o2.png'
import imag3 from '@/assets/images/axa/o3.png'
import imag4 from '@/assets/images/axa/o4.png'
import { Link } from 'react-router-dom'
import { IoArrowForwardOutline} from 'react-icons/io5'

const images = [
  imag1,
  imag2,
  imag3,
  imag4,
]

const data = [
  {
    id: 1,
    img: imag1,
    title: 'New Arrivals',
  },
  {
    id: 2,
    img: imag2,
    title: 'Top Sale',
  },
  {
    id: 3,
    img: imag3,
    title: 'Best Seller',
  },
  {
    id: 4,
    img: imag4,
    title: 'Accessories',
  }
]




function Collection() {
  return (
    <div className=' py-12 container grid grid-cols-2 gap-6'>
      {
        data?.map((item,inx) =>(
          <div className='h-[664px] border relative'>
          <img src={images[inx]} alt="" className='absolute w-full h-full' />
          <div className='absolute left-12 bottom-12 text-white'>
            <p className='text-[34px] font-medium mb-3'>November Outfit</p>
            <Link to={"/"} className='flex gap-1 items-center border-b w-[98px]'>
            
              <span className='font-medium'>
                Collection
              </span>
              <IoArrowForwardOutline className='' />
            </Link>
  
          </div>
        </div>

        ))
      }
    </div>
  )
}

export default Collection