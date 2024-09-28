import React from 'react'

const Content = () => {
    return (
        <div className='bg-[url("/images/left-shadow.svg")] bg-contain bg-no-repeat'>
            {/* <div className='w-[1519px] h-[810px] pt-[16px] bg-[#edf1f9]'> */}
            <div className='w-[1519px] h-[810px] pt-[16px] bg-[url("/images/right-shadow.svg")] bg-no-repeat bg-right-top bg-contain'>

                {/* upper fonts */}
                <div className="w-[980px] h-[193px] pt-[24px] px-[16px] text-black mx-[253px]">
                    {/* <div className="w-full h-[133px] my-[60px]"> */}
                    <p className='text-[48px] leading-[60px] font-semibold text-center ml-[35px]'>Create LinkedIn Profile Picture Online</p>
                    <p className='text-[1.25rem] leading-[28.8px] font-semibold mt-[16px] w-[980px] text-center'>Professionalize your LinkedIn presence. Upload your photo, choose a formal template, and create a polished profile picture suited for networking.</p>
                    {/* </div> */}
                </div>

                {/* upload image and linkedin profile photo */}
                <div className="w-[1246px] h-[520px] mx-auto px-[60px] mt-[20px] flex justify-center items-center gap-[118px] ">

                    {/* left upload image box */}
                    <div className="w-[401px] h-[412px] px-[32px] bg-[#fff] rounded-[19px] ml-[20px] mr-[69px] shadow-lg ">
                        <div className="w-[332px]">
                            <button className='w-full h-[58px] px-[16px] mb-[16px] text-[22px] bg-[#626adf] mt-10 py-[8px] text-white rounded-[7px] leading-[1.5]  font-semibold'>Upload Image</button>
                        </div>
                        <div className="text-center">
                            <p className='font-semibold'>or drag & drop an image</p>
                            <hr className='my-[23px] ' />
                        </div>
                        <div className="text-center flex flex-col gap-4">
                            <p className='font-semibold'>No Image? try one of these:</p>
                            <div className="flex gap-5 justify-center">
                                <img src="/images/001.webp" alt="first img" className='w-[56px] h-[56px] rounded-md' />
                                <img src="/images/002.webp" alt="second img" className='w-[56px] h-[56px] rounded-md' />
                                <img src="/images/003.webp" alt="third img" className='w-[56px] h-[56px] rounded-md' />
                                <img src="/images/004.webp" alt="forth img" className='w-[56px] h-[56px] rounded-md' />
                            </div>
                            <p className=''>By uploading an image, you agree to our <a href="#" className='text-[rgb(99,107,223)]'>Terms of Service.</a></p>
                        </div>
                    </div>
                    {/* right linked profile photo */}
                    <div className="w-[520px] h-[520px]">
                        <img src="/images/linked-profile.webp" alt="linked profile picture" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
