import Brands from '@/components/brands/Brands'
import Hero from '@/components/hero/Hero'
import Products from '@/components/products/Products'
import { useFetch } from '@/hooks/useFetch'
import React, { useEffect } from 'react'
import Category from '@/components/category/Category'
import Collection from '../../components/collection/Collection'
import Winter from '../../components/winter/Winter'
import Latest from '../../components/latest/Latest'
import Instagram from '../../components/instagram/Instagram'
import FreeShipping from '../../components/FreeShipping/FreeShipping'
import Footer from '../../components/footer/Footer'

const Home = () => {
  const {data,error,loading} = useFetch("/product/get")
  const {data: categories}= useFetch("/product-category/get")
  return (
    <div>
      <Hero style = {{
        lee:"h-[820px] grid grid-cols-2",
        im:"bg-hero",
        left_bg:"bg-[#171D28]",
        button:"px-14 py-3 bg-blue-500 rounded-md hover:opacity-70",
        size:"text-7xl",
        txt_col:"text-white",
        }}
        title = {{name:"Bring the warmth.",dis:"Everyone needs a good winter jacket. Find yours with our collection and more.", but:"Shop Now"}}
        sale = ""
        />
      <Brands/>
      <Products  
        title  = {{name:"Just in " , style: "",status:"NEW"}}
        style={{parent:"flex gap-3 overflow-auto ",child: "w-full min-w-[262px]"}} 
        isAdmin={false}
        data={data}/>
      <Category data= {categories}/>
      <Collection/>
      <Products 
        title  = {{name:"Best seller" , style: "text-center",status:"HOT"}}
        style={{parent:"grid grid-cols-4 gap-6",child: ""}}
        isAdmin={false}
        data={data}/>

      <Hero 
        style ={{
          lee:"h-[532px] grid grid-cols-2 ",
          im:"bg-hero2",
          left_bg:"bg-[#F4F5F7]",
          button:"flex gap-1 items-center border-b w-[98px] text-black",
          size:"text-5xl",
          txt_col:"text-black",
          
          }}
        title = {{name:"Hundeds of New lover price",dis:"Hurry up!! Winter is coming!", but:"Shop Now"}}
        sale = {<div className='font-semibold text-blue-700 '>
          <p>SALE UP TO 35% OFF</p>
        </div>} 
          />
      <Winter/>
      <Latest/>
      <Instagram/>
      <FreeShipping/>
      <Footer/>
    </div>
  )
}

export default Home