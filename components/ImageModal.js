'use client'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

const ImageModal = ({ isModalOpen, handleClose }) => {
    const modalPlace = typeof window !== 'undefined' ? document.body : null

    useEffect(() => {
        if (typeof document !== 'undefined') {

            if (isModalOpen) {
                document.body.style.overflow = 'hidden'
            }
            else {
                document.body.style.overflow = 'auto'
            }
        }

    }, [isModalOpen])

    if (!isModalOpen) return null;


    return ReactDOM.createPortal(
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-35 backdrop-blur-[20px] z-50  '>
            <div className="shadow-2xl w-[74%] h-[86%] flex justify-center rounded-[16px] bg-[#F8F9F9] relative flex-col items-center ">

                <p className='text-[25px] sm:max-h-[30px] font-semibold my-[40px]   sm:my-3'>Upload image</p>

                <div className="absolute right-[10px] top-[6px] w-[28px]">
                    <img onClick={handleClose} src="/images/closeModal.svg" className='w-full h-full' alt="" />
                </div>

                <div className="w-full  h-full flex justify-center gap-[10px] sm:flex-col sm:overflow-y-auto sm:items-center   sm:block  sm:pb-[20px]  sm:space-y-4">

                    <div className="w-[30%] sm:w-[90%] h-[93%] sm:py-[16px] bg-[#626adf0d]  border border-[#DCDBE6] rounded-[15px] flex items-center justify-center sm:h-auto sm:mx-auto sm:mt-[16px]">
                        <div className=" flex items-center justify-center flex-col gap-2 ">
                            <img src="/images/viadevice.svg" className='' alt="" />
                            <p className='text-[21px]'>via <p className='inline font-semibold'>Device</p></p>
                        </div>
                    </div>

                    <div className="w-[30%] sm:w-[90%]  sm:py-[16px] h-[93%]  bg-[#626adf0d]  border border-[#DCDBE6] rounded-[15px] flex items-center justify-center sm:h-auto sm:mx-auto">
                        <div className=" flex items-center justify-center flex-col gap-2">
                            <img src="/images/viastock.svg" alt="" className='' />
                            <p className='text-[21px]'>via <p className='inline font-semibold'>Stock</p></p>
                        </div>
                    </div>

                    <div className="w-[30%] sm:w-[90%]  sm:py-[16px] bg-[#626adf0d] h-[93%] sm:min-h-[237px] border border-[#DCDBE6] rounded-[15px] flex justify-center sm:h-auto sm:mx-auto ">

                        <div className="  flex items-center justify-evenly flex-col gap-2  mx-auto relative" >
                            <div className="">
                                <img src="/images/viauploads.svg" alt="" className=' mx-auto' />

                                <p className='text-[21px]  '>via <p className='inline font-semibold '>Uploads</p></p>
                            </div>
                            <div className="w-[90%]  sm:relative absolute bottom-[13%] sm:bottom-0">
                                <button className='w-full h-[14%]  min-h-[35px] flex items-center justify-center text-blue-700 font-medium rounded-[10px] border border-blue-600'>Login</button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div >
        , modalPlace
    )
}

export default ImageModal
