'use client'
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHambergerOpen = () => {
    console.log('clicked');
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <>

      <div className='box-border h-[73px]  bg-[white] bg-opacity-95 backdrop-blur-[6px]
     px-[12px] sticky top-0 z-20 ' >
        <div className=" h-full m-auto flex items-center justify-between ">

          <div className="flex items-center">
            <div className="w-[104px] h-[40px] relative">
              <Image src='/images/logo.png' alt="Logo" layout="fill" />
              {/* <img src="/images/logo.png" alt="Logo" className="w-[104px] h-[40px]" /> */}
            </div>
            

            <div className="h-[73px] text-[14px] font-semibold ml-[40px] sm:hidden md:hidden">
              <ul className='flex items-center justify-center h-full gap-5 text-black     '>
                <li>AI Tools <FaChevronDown className='inline ml-1' /></li>
                <li>Editor Tools<FaChevronDown className='inline ml-1' /></li>
                <li>Design</li>
                <li className='min-w-[54px] flex gap-1 items-center justify-center'>API <Image src='/images/newbadge.svg' alt="new" width={30} height={30} /></li>
                <li>Blog</li>
                <li>Pricing</li>
              </ul>
            </div>
          </div>

          <div className="lg:hidden xmd:hidden flex items-center justify-center w-[50px]" onClick={handleHambergerOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect y="4" width="24" height="2" />
              <rect y="11" width="24" height="2" />
              <rect y="18" width="24" height="2" />
            </svg>
          </div>

          <div className="lg:flex items-center hidden">
            <button className='hover:bg-[#f6f6fc] w-[92px] h-[34px] text-black py-[6px] px-[12px] text-[1rem] font-semibold'>Login</button>
            <button className='hover:bg-[#4d55d2] text-white bg-[#626adf] w-[100px] px-[16px] h-[46px] text-[1rem]  rounded-lg ml-[10px] font-semibold'>Sign up</button>
          </div>
        </div>
      </div>

      <div className={`w-[210px] fixed  overflow-y-auto scroll-smooth bg-[#30313c] transition-all duration-[300ms] ${isOpen ? 'top-0' : 'top-[-600px]'}  right-0  z-40 pb-[25px]`}>

        <div className="h-[42px] pl-[8px] w-full" >
          <Image onClick={handleClose} src='/images/close.svg' alt="close" width={30} height={30} />
        </div>


        <div className="flex w-full  flex-col items-center mt-2 justify-center gap-3 ">

          <div className="w-full flex justify-center">
            <button className='hover:bg-[#cacad6] text-black  bg-white w-[80%] px-[10px] h-[30px] text-[1rem]  rounded-sm ml-[10px] font-semibold'>Login</button>
          </div>

          <div className="w-full flex justify-center">
            <button className='hover:bg-[#4d55d2] text-white bg-[#626adf] w-[80%] px-[10px] h-[30px] text-[1rem]  rounded-sm ml-[10px] font-semibold'>Sign up</button>
          </div>
        </div>

        <ul className='text-[16px] w-full mt-5 text-white items-center justify-center  gap-5 flex flex-col '>
          <li >AI Tools <FaChevronDown className='inline ml-1' /></li>
          <li>Editor Tools<FaChevronDown className='inline ml-1' /></li>
          <li>Design</li>
          <li className='min-w-[54px] flex items-center gap-[5px]'>API  <Image src='/images/newbadge.svg' className="inline" alt="new" width={28} height={28} /></li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>
      </div>

    </>
  )
}

export default Navbar
