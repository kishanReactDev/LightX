import React from 'react'
import { FaChevronDown } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='h-[73px] w-[1519px] bg-[white] bg-opacity-95 backdrop-blur-[6px]
     px-[12px] sticky top-0' >
      <div className="w-[1495px] h-full mx-auto flex">
        <div className="w-[1495.73px] h-full m-auto flex items-center">

          <div className="">
            <img src="/images/logo.png" alt="" className='w-[104px] h-[40px]' />
          </div>

          <div className="xl:w-[545.99px] xl:h-[73px] xl:text-[13px] xl:font-bold xl:ml-[40px] ">
            <ul className='flex items-center justify-center h-full gap-5 text-black
          '>
              <li>AI Tools <FaChevronDown className='inline ml-1' /></li>
              <li>Editor Tools<FaChevronDown className='inline ml-1' /></li>
              <li>Editor Tools<FaChevronDown className='inline ml-1' /></li>
              <li>Design</li>
              <li className='w-[54px]'>API <img className='inline' src="/images/newbadge.svg" alt="new" /></li>
              <li>Blog</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center ">
          <button className='hover:bg-[#f6f6fc] w-[92px] h-[34px] text-black py-[6px] px-[12px] text-[1rem] font-semibold'>Login</button>
          <button className='hover:bg-[#4d55d2] text-white bg-[#626adf] w-[100px] px-[16px] h-[46px] text-[1rem]  rounded-lg ml-[10px] font-semibold'>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
