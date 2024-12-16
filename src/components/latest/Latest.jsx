import React from 'react'
import img from '@/assets/images/latest/img.png'
import img1 from '@/assets/images/latest/img3.png'
import img2 from '@/assets/images/latest/img2.png'
import Ab from './ab'


const imges = [
    img,
    img1,
    img2,
]
const data = [
    {
        id: 1,
        img: img,
        title: '2023 Holiday gift guide ',
    },
    {
        id: 2,
        img: img1,
        title: '2023 Holiday gift guide ',
    },
    {
        id: 3,
        img: img2,
        title: '2023 Holiday gift guide ',
    }
]


function Latest() {
  return (
    <div className='container h-[657px] flex flex-col justify-center align-center gap-6 '>
        <div className='flex align-center justify-between'>
            <h2 className='text-4xl'>Latest Articles </h2>
            <Ab/>

        </div>
        <div className='flex gap-8 align-center justify-center '>
            {
                data?.map((item,inx)=>{
                    return (
                        <div key={item.id} className='w-[350px] h-[413px] grid gap-4'>
                            <img src={imges[inx]} alt="" className='w-[350px] h-[325px]' />
                            <p className='text-xl font-medium'>{item.title}</p>
                            <Ab/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Latest