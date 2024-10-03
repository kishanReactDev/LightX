'use client'
import React from 'react'
import ImageModal from './ImageModal'
import { useModalContext } from '@/contextApi/modalContext'
import Image from 'next/image'

const Secondsection = () => {
    const { isModalOpen, handleClose, handleOpen } = useModalContext();
    return (

        <div className='w-full  pt-[16px] bg-[url("/images/right-shadow.svg")] bg-no-repeat bg-right-top bg-cover relative bg-image z-10 pb-[55px] '>

            {/* upper fonts */}
            <div className="w-[95%] mx-auto pt-[24px] px-3  text-black lg:w-[65%] ">
                <div className="w-full  my-[60px]">
                    <p className='text-[48px] leading-[60px] font-semibold text-center '>Create LinkedIn Profile Picture Online</p>
                    <p className='text-[1.25rem] leading-[28.8px] font-semibold mt-[16px]  text-center'>Professionalize your LinkedIn presence. Upload your photo, choose a formal template, and create a polished profile picture suited for networking.</p>
                </div>
            </div>

            <div className="flex items-center justify-center">

                {/* upload image and linkedin profile photo */}
                <div className="w-[80%]  xmd:w-[90%] md:w-[90%]  sm:w-screen mt-[20px] flex justify-between items-center sm:flex-col-reverse">

                    {/* left upload image box */}
                    <div className="w-[430px] min-h-[412px] md:w-[45%] bg-[#fff] rounded-[19px] sm:max-w-[430px]  shadow-lg sm:w-[80%] xmd:w-[45%]">
                        <div className="w-[365px] mx-auto md:w-[80%] sm:w-[80%]">
                            <button onClick={() => handleOpen()} className='w-full h-[58px] px-[16px] mb-[16px] text-[22px] bg-[#626adf] mt-10 py-[8px] text-white rounded-[7px] leading-[1.5]  font-semibold'>Upload Image</button>
                        </div>

                        <ImageModal isModalOpen={isModalOpen} handleClose={handleClose} />

                        <div className="text-center">
                            <p className='font-semibold'>or drag & drop an image</p>
                            <hr className='my-[23px] ' />
                        </div>
                        <div className="text-center flex flex-col gap-4 ">
                            <p className='font-semibold'>No Image? try one of these:</p>
                            <div className="flex  justify-evenly">
                                <Image src={'/images/001.webp'} alt='fisrt img' width={56} height={56} className='rounded-md' />
                                <Image src={'/images/002.webp'} alt='second img' width={56} height={56} className='rounded-md' />
                                <Image src={'/images/003.webp'} alt='third img' width={56} height={56} className='rounded-md' />
                                <Image src={'/images/004.webp'} alt='forth img' width={56} height={56} className='rounded-md' />
                            </div>
                            <p className='w-[83%] mx-auto'>By uploading an image, you agree to our <a href="#" className='text-[rgb(99,107,223)]'>Terms of Service.</a></p>
                        </div>
                    </div>
                    {/* right linked profile photo */}
                    <div className="w-[45%] h-[45%]  xmd:h-[50%] md:w-[50%] md:h-[50%] sm:w-[90%] sm:h-auto sm:mb-[30px] relative">
                        <img src="/images/linked-profile.webp" alt="linked profile picture" className='w-full h-full ' />
                        {/* <Image src='/images/linked-profile.webp' alt='linked profile picture'  /> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Secondsection

