import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header id='header' className=''>
      <nav className='container h-[60px] flex items-center justify-between'>
        <NavLink to={"/"} className='text-2xl font-medium select-none'>3legant.</NavLink>
        <ul className='flex gap-10'>
          <li>
            <NavLink className={"hover:text-blue-500"} to={"/"}><span>Home</span></NavLink>
          </li>
          <li>
            <NavLink className={"hover:text-blue-500"} to={"/"}><span>Shop</span></NavLink>
          </li>
          <li>
            <NavLink className={"hover:text-blue-500"} to={"/"}><span>Product</span></NavLink>
          </li>
          <li>
            <NavLink className={"hover:text-blue-500"} to={"/"}><span>Contact Us</span></NavLink>
          </li>
        </ul>
        <div className='flex gap-4'>
          <NavLink to={"/"} className='text-[20px] hover:text-blue-500'><LuSearch/></NavLink>
          <NavLink to={"/login"} className='text-[20px] hover:text-blue-500'><FaRegUserCircle/></NavLink>
          <NavLink to={"/"} className='text-[20px] hover:text-blue-500'><IoBagOutline/></NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header