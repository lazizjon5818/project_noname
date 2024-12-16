import React from 'react'
import image1 from '@/assets/images/instagram/Image1.png'
import image2 from '@/assets/images/instagram/Image2.png'
import image3 from '@/assets/images/instagram/Image3.png'
import image4 from '@/assets/images/instagram/Image4.png'


const images = [
  image1,
  image2,
  image3,
  image4,
]

function Instagram() {
  return (
    <div className='h-[550px] container flex align-center justify-center'>
      <div className='flex flex-col gap-6 items-center justify-center'>
        <p className='font-semibold text-[#6C7275] '>NEWSPEED</p>
        <h2 className='text-5xl'>Instagram</h2>
        <p className='font-extralight text-2xl'>Follow us on social media for more discount & promotions</p>
        <p className='font-thin text-[#6C7275]'>@3legant_official</p>
        
        <div className='flex gap-6  align-center max-w-[1120px] '>
            {images.map((image, index) => (
              <img key={index} src={image} alt="image" className='h-auto w-[262px]'/>
            ))}
        </div>

      </div>

      
    </div>
  )
}

export default Instagram