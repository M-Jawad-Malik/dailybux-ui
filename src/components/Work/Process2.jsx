import React from 'react'
import { howB1, howB2, howB3, howB4, howB5, howB6 } from '../../assets'

const Process2 = () => {
    return (
        <section>
            <div className='px-5 py-44 text-center bg-layer-2'>
                <div className='flex flex-wrap sm:flex-col-reverse flex-col-reverse lg:flex-row sm:flex-wrap md:flex-nowrap justify-center items-center w-full'>
                    <div>
                        <div className='flex flex-col justify-end relative z-50'>

                            <img src={howB1} alt="" className='w-1/4 invisible' />
                            <img src={howB1} alt="" className='w-1/4 absolute z-50 -left-4 sm:-left-4 md:-left-28 bottom-28 sm:bottom-28 md:bottom-[17rem]' />
                            <img src={howB2} alt="" className='w-full sm:w-full md:w-[80%] absolute left-0 sm:left-0 md:-left-20 bottom-0 sm:bottom-0 md:bottom-40' />
                            <img src={howB2} alt="" className='md:w-1/2 lg:w-full invisible' />
                        </div>
                    </div>
                    <div className='hidden sm:hidden lg:flex relative'>
                        <img src={howB3} alt="" className='w-auto absolute -left-[22rem]' />
                        <img src={howB3} alt="" className='w-auto invisible' />
                        <img src={howB4} alt="" className='w-auto absolute -left-52 -bottom-20' />
                        <img src={howB5} alt="" className='w-auto absolute -left-1 -top-12' />
                        <img src={howB6} alt="" className='w-auto absolute z-50 -right-[10.5rem] -bottom-24' />

                    </div>
                    <div className='flex flex-col sm:flex lg:hidden relative'>
                        <img src={howB3} alt="" className='w-auto' />
                        <img src={howB4} alt="" className='w-auto' />
                        <img src={howB5} alt="" className='w-auto' />
                        <img src={howB6} alt="" className='w-auto' />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process2