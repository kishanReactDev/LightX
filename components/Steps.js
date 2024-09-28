import React from 'react'

const Steps = () => {
    return (
        <div className="w-[1519px]  px-[100px] py-[40px] mx-auto bg-[#f8f8fb]">
            <div className=' justify-center text-[2rem] my-[40px] flex flex-col items-center  ' >
                <p className='font-semibold'>Steps to Make Profile Picture for LinkedIn</p>
                <div className="flex gap-[18px] mt-[60px]">

                    <div className="w-[372px] h-[254px] px-[24px] pb-[24px] pt-[40px] rounded-[24px] bg-[#fff] border border-solid border-[#EEEDF3] ">
                        <div style={{ background: "linear-gradient(90deg, #F3DEFF -4%, #E0E2FF 100%)" }} className="h-[40px] px-[20px] text-[1rem] rounded-[12px] shadow-lg text-[#626adf] font-semibold w-[86px] pt-[6px]">Step 1</div>
                        <div className="mt-[20px] text-[1.5rem] font-semibold leading-[33px]">
                            <p className='leading-[33px]  text-[#282a3a]'>Upload Image</p>
                        </div>
                        <div className="mt-[12px] text-[1rem] leading-[25.6px]  text-[#424452]">
                            <p>Upload your image by selecting or dragging and dropping media</p>
                        </div>
                    </div>

                    <div className="w-[372px] h-[254px] px-[24px] pb-[24px] pt-[40px] rounded-[24px] bg-[#fff] border border-solid border-[#EEEDF3] ">
                        <div style={{ background: "linear-gradient(90deg, #F3DEFF -4%, #E0E2FF 100%)" }} className="h-[40px] px-[20px] text-[1rem] rounded-[12px] shadow-lg text-[#626adf] font-semibold w-[86px] pt-[6px]">Step 2</div>
                        <div className="mt-[20px] text-[1.5rem] font-semibold leading-[33px]">
                            <p className='leading-[33px]  text-[#282a3a]'>Use the Profile Picture MakerTool</p>
                        </div>
                        <div className="mt-[12px] text-[1rem] leading-[25.6px]  text-[#424452]">
                            <p>Create your profile picture for LinkedIn using the Profile Picture Maker</p>
                        </div>
                    </div>

                    <div className="w-[372px] h-[254px] px-[24px] pb-[24px] pt-[40px] rounded-[24px] bg-[#fff] border border-solid border-[#EEEDF3] ">
                        <div style={{ background: "linear-gradient(90deg, #F3DEFF -4%, #E0E2FF 100%)" }} className="h-[40px] px-[20px] text-[1rem] rounded-[12px] shadow-lg text-[#626adf] font-semibold w-[86px] pt-[6px]">Step 3</div>
                        <div className="mt-[20px] text-[1.5rem] font-semibold leading-[33px]">
                            <p className='leading-[33px] text-[#282a3a]'>Download Image</p>
                        </div>
                        <div className="mt-[12px] text-[1rem] leading-[25.6px] text-[#424452] font-normal">
                            <p>Your image is ready to download now</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Steps
