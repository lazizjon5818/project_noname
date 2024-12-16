import React from 'react'

const Hero = ({style:{lee,im,left_bg,button,size,txt_col},title,sale}) => {
  return (
    <div className={lee}>
      <div className={`${im} bg-no-repeat bg-cover`}></div>
      <div className={`flex items-center ${left_bg}`}>
        <div className={`pl-[63px] max-w-[500px] ${txt_col}`}>
          {sale}
          <h1 className={`${size}`}>{title.name}</h1>
          <p className='mt-2 mb-5'>{title.dis}</p>
          <button className={`${button}`}>{title.but}</button>
        </div>
      </div>
    </div>
  )
}

export default Hero