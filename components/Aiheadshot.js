import React from 'react'
import '.././app/globals.css'

const Aiheadshot = () => {
    return (
        <div className='w-[1519px] h-[254px] bg-[url("/images/headshot.webp")] bg-cover'>
            <div className=" mx-[76px] pl-[100px] h-full m-auto flex  ">
                <div className=" w-[633px] h-full flex flex-col justify-center">
                    <p className='w-[633px] h-[96px] text-[2rem] text-white font-semibold'>Experience the Instant Transformation From Selfies to Professional Headshots
                    </p>
                    <button className='w-[200px] rounded-[10px]  text-center  h-[50px] font-semibold text-white px-5 mt-[24px] bg-[#ffffff40]'>Create AI Headshot</button>
                </div>
                <div className=" h-[254px] ml-[128px]">
                    <img src="/images/five-men.webp" alt="" className='h-full' />
                </div>
            </div>
        </div>
    )
}

export default Aiheadshot
