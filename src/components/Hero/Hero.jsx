import React from 'react'
import { apple, appleStore, google, hero, playstore } from '../../assets'

const Hero = () => {
    return (
        <section className='bg-layer-8'>
            <div className='flex flex-wrap sm:flex-wrap md:flex-nowrap py-0 pt-44 sm:pt-44 md:pt-0 justify-between items-center w-full space-y-24 sm:space-y-24 md:space-y-20'>
                <div className='md:pl-12 pl-0 sm:pl-0'>
                    <h1 className='text-4xl sm:text-4xl md:text-5xl 2xl:text-6xl font-bold px-6 leading-normal sm:leading-normal md:leading-normal lg:leading-normal xl:leading-normal 2xl:leading-normal pb-[30px] heading'>Shape Your Journey: <br className='hidden sm:hidden md:inline-block' />
                        Earn, Play, and Grow Your <br className='hidden sm:hidden md:inline-block' />
                        Identity On-the-Go</h1>
                    <p className='pl-6 font-semibold text-base sm:text-base md:text-xl pb-[50px]'>Your Go-to Web3 Lifestyle Application</p>
                    <div className='flex space-x-4 pl-6'>
                        <img src={appleStore} alt="" className='cursor-pointer w-1/3 sm:w-1/3 md:w-1/5' />
                        <img src={google} alt="" className='cursor-pointer w-1/3 sm:w-1/3 md:w-1/5' />
                    </div>
                    {/* <div className='pl-6 flex flex-wrap sm:flex-wrap md:flex-nowrap space-x-4 sm:space-x-4 md:space-x-4'>
                        <button className='flex items-center space-x-1 sm:space-x-1 md:space-x-1 border-[1px] border-black bg-black/70 md:px-7 px-2.5 sm:px-2.5 py-1.5 rounded-[10px]'>
                            <img src={apple} alt="" className='w-1/6 sm:w-1/6 md:w-[22%]' />
                            <div className='w-full text-white flex flex-col justify-start items-start leading-none'>
                                <span className='text-[6px] sm:text-[6px] md:text-[9px] leading-none'>Sign up with Apple</span>
                                <span className='md:text-lg text-base sm:text-base leading-none'>App Store</span>
                            </div>
                        </button>
                        <button className='flex items-center space-x-1 sm:space-x-1 md:space-x-1 border-[1px] border-black bg-black/70 md:px-7 px-2.5 sm:px-2.5 py-1.5 rounded-[10px]'>
                            <img src={playstore} alt="" className='w-1/6 sm:w-1/6 md:w-[22%]' />
                            <div className='text-white flex flex-col justify-start items-start'>
                                <span className='text-[6px] sm:text-[6px] md:text-[9px] leading-none'>GET IT ON</span>
                                <span className='md:text-xl text-base sm:text-base leading-none'>Google Play</span>
                            </div>
                        </button>
                    </div> */}
                </div>
                <div className='relative flex justify-center items-end pb-44 w-full sm:w-full md:w-[40%] 2xl:w-[36%]'>
                    <div className='bg-black absolute w-full h-[30rem] sm:h-[30rem] md:h-[51rem] 2xl:h-[62rem] -top-0 sm:-top-0 md:-top-[16rem] right-0 rounded-b-full'></div>
                    <img src={hero} alt="" className='z-50 md:w-[90%] relative' />
                    {/* <h3 className='text-7xl font-bold pb-5 text-white z-50 text-center relative'>Dailybux</h3> */}
                </div>
            </div>
        </section>
    )
}

export default Hero