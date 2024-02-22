import React from 'react'
import { partner1, partner2, partner3, partner4, partner5 } from '../../assets'

const Partner = () => {
    return (
        <section className='bg-black'>
            <div className='flex flex-col py-44 justify-center items-center'>
                <h1 className='text-4xl sm:text-4xl md:text-7xl font-bold text-white'>Partners</h1>
                <hr class="h-px sm:h-px md:h-2 my-12 sm:my-12 md:my-24 bg-white border-2 w-1/4 sm:w-1/4 md:w-1/12 " />
                <div className='flex flex-col space-y-8 sm:space-y-8 md:space-y-16 mx-auto'>
                    <div className='flex flex-col md:flex-row space-x-0 sm:space-x-0 md:space-x-16  space-y-8 sm:space-y-8 md:space-y-0 mx-auto w-full justify-center items-center'>
                        <img src={partner1} alt="" className='w-[80%] sm:w-[80%] md:w-1/4 xl:w-1/4 2xl:w-[33%]' />
                        <img src={partner2} alt="" className='w-[80%] sm:w-[80%] md:w-1/4 xl:w-1/4 2xl:w-[33%]' />
                    </div>
                    <div className=' flex flex-col md:flex-row space-x-0 sm:space-x-0 md:space-x-16  space-y-8 sm:space-y-8 md:space-y-0 mx-auto w-full justify-center items-center'>
                        <img src={partner3} alt="" className='w-[80%] sm:w-[80%] md:w-1/4 xl:w-1/4 2xl:w-full' />
                        <img src={partner4} alt="" className='w-[80%] sm:w-[80%] md:w-1/4 xl:w-1/4 2xl:w-full' />
                        <img src={partner5} alt="" className='w-[80%] sm:w-[80%] md:w-1/4 xl:w-1/4 2xl:w-full' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partner