import React from 'react'
import image from '@/assets/images/video/vedio.png'

function Winter() {
  return (
    <div className='h-[780px] container flex align-center justify-center'>
      <div className='flex flex-col gap-6 items-center justify-center'>
        <p className='font-semibold text-blue-700 '>PROMOTION</p>
        <h2 className='text-5xl'>Winter Collections</h2>
        <p className='font-extralight'>Introducing the new Winter jacets.</p>
        <img src={image} alt="image" />

      </div>

      
    </div>
  )
}

export default Winter