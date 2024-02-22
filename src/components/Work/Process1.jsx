import React from 'react'
import { howA1, howA2, howA3 } from '../../assets'
const Process1 = () => {
    return (
        <section>
            <div className='px-5 pb-44 text-center bg-layer-1'>
                <h1 className='text-4xl sm:text-4xl md:text-7xl font-bold py-32 pb-24 sm:pb-24 md:pb-32 m-0 p-0 heading'>How its works</h1>
                <div className='flex flex-wrap sm:flex-wrap md:flex-nowrap justify-center items-end'>
                    <img src={howA3} alt="" className='w-auto' />
                    {/* <div></div> */}
                    <div>

                        <div className='flex flex-col justify-end relative'>

                            <img src={howA1} alt="" className='w-1/4 invisible' />
                            <img src={howA1} alt="" className='w-1/4 absolute z-50 left-64 sm:left-64 md:left-40 bottom-32 sm:bottom-32 md:bottom-72' />
                            <img src={howA2} alt="" className='w-full sm:w-full md:w-[80%] absolute left-0 sm:left-0 md:-left-20 bottom-0 sm:bottom-0 md:bottom-40' />
                            <img src={howA2} alt="" className='md:w-1/2 lg:w-full invisible' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process1