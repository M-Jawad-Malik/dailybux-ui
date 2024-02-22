import React from 'react'
import { howC1, howC2, howC3 } from '../../assets'

const Process3 = () => {
    return (
        <section>
            <div className='px-5 py-44 text-center bg-layer-3'>
                <div className='flex flex-wrap sm:flex-wrap md:flex-nowrap justify-center items-end'>
                    <img src={howC3} alt="" className='w-auto' />
                    {/* <div></div> */}
                    <div>

                        <div className='flex flex-col justify-end relative'>

                            <img src={howC1} alt="" className='w-1/4 invisible' />
                            <img src={howC1} alt="" className='w-1/4 absolute z-50 left-64 sm:left-64 md:left-48 bottom-32 sm:bottom-32 md:bottom-72' />
                            <img src={howC2} alt="" className='w-full sm:w-full md:w-[80%] absolute left-0 sm:left-0 md:-left-20 bottom-0 sm:bottom-0 md:bottom-40' />
                            <img src={howC2} alt="" className='md:w-1/2 lg:w-full invisible' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process3