import { request } from '@/api';
import React from 'react'
import { FaRegHeart, FaTrashAlt  } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import "./Products.css"
import { useNavigate } from 'react-router-dom';

const Products = ({data, isAdmin, style:{parent,child} , title}) => {
  const navigate = useNavigate()

  const handleDelete = id => {
    if(confirm("are you sure ?")){
      request
        .delete(`/product/delete/${id}`)
        .then(res => {
        })
    }
  }

  const productItems = data?.map((product)=> (
    <div key={product.id} className={child}>
      <div className='h-[349px] relative overflow-hidden product-image'>
        <img src={product.image} onClick={()=>{
          navigate(`/prodact/${product.id}`)
        }} className='w-full h-full object-cover' alt="" />
        <span className='absolute top-4 left-4 font-medium py-1 px-[14px] rounded shadow bg-white'>{title.status}</span>
        {
          isAdmin ?
          <button className='absolute top-btn duration-300 top-[-32px] right-4 bg-white w-8 h-8 rounded-full grid place-items-center' onClick={()=> handleDelete(product.id)}><FaTrashAlt/></button>
          :
          <button className='absolute top-btn duration-300 top-[-32px] right-4 bg-white w-8 h-8 rounded-full grid place-items-center'><FaRegHeart/></button>
        }
        <button className='cart-btn absolute w-[230px] left-4 bottom-[-46px] h-[46px] bg-black text-white font-medium rounded-lg duration-300'>Add to cart</button>
      </div>
      <div className='pt-3'>
        <div className='flex pb-1'>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
        </div>
        <h3 className='font-medium line-clamp-2' title={product.name}>{product.name}</h3>
        <p className='font-medium'>${Number(product.price)?.brm()}</p>
      </div>
    </div>
  ))
  return (
    <div className='container py-12'>
      <p className={`mb-12 text-[40px] font-medium ${title.style}`}>{title.name}</p>
      <div id='products' className={parent}>{productItems}</div>
    </div>
  )
}

export default Products