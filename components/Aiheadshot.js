import React from 'react'
import '../app/globals.css'

const Aiheadshot = () => {
    return (
        <>
            <div className='lg:h-[254px] bg-[url("/images/headshot.webp")] bg-cover '>
                <div className=" w-[85%] xmd:w-[92%] h-full ml-[10%] xmd:ml-[6%]  lg:flex-row flex justify-between flex-col-reverse ">
                    <div className=" w-[45%] h-full flex flex-col justify-center sm:w-full md:w-full sm:text-center md:text-center">
                        <p className='w-full sm:w-full md:w-full text-[2rem] text-white font-semibold '>Experience the Instant Transformation From Selfies to Professional Headshots
                        </p>
                        <div className="min-h-[50px] w-full mt-[4%] flex items-center sm:justify-center md:justify-center">
                            <button className='w-[200px] rounded-[10px] sm:min-h-[63px] md:min-h-[63px] sm:mb-7 md:mb-7 text-center  font-semibold text-white px-5  bg-[#ffffff40] h-full'>Create AI Headshot</button>
                        </div>
                    </div>
                    <div className="sm:max-w-[508px] md:max-w-[508px] sm:my-7 md:my-7 mx-auto">
                        <img src="/images/five-men.webp" alt="" className='h-full ' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aiheadshot
