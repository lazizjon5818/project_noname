import React from 'react'
import imagee1 from"@/assets/images/imgee1.png"
import imagee2 from"@/assets/images/imagee2.png"
import imagee3 from"@/assets/images/imagee3.png"
import imagee4 from"@/assets/images/imagee4.png"
import imagee5 from"@/assets/images/imagee5.png"
import imagee6 from"@/assets/images/imagee6.png"

const image = [imagee1, imagee2, imagee3, imagee4, imagee5 , imagee6]

function Category({data}){
  return (
    <div className='container'>
      <p className='text-center mb-12 text-[40px] font-semibold'>
        Shop by Categoies
      </p>
      <div className='flex flex-wrap gap-6 justify-center'>
        {
          data?.map((item,inx)=>(
            <div key={item.id} className='text-center'>
              <img src={image[inx]} className='w-[167px] h-[167px] rounded-full' alt="" />
              <p className='mt-3 font-seminold text-sm'>{item.name}</p>
            </div>
          ))
        }

      </div>
      
    </div>
  )
}

export default Category