import React from 'react'
import Ticker from "framer-motion-ticker";
import '../../assets/styles/banner.css'
const Banner = () => {
    const brand1 = ['WHY', 'WHY', 'WHY', 'WHY', 'WHY', 'WHY', 'WHY', 'WHY', 'WHY', 'WHY', 'WHY', 'WHY'];
    const brand2 = ['Daily', 'Daily', 'Daily', 'Daily', 'Daily', 'Daily', 'Daily', 'Daily', 'Daily', 'Daily', 'Daily', 'Daily'];
    const brand3 = ['bux?', 'bux?', 'bux?', 'bux?', 'bux?', 'bux?', 'bux?', 'bux?', 'bux?', 'bux?', 'bux?', 'bux?'];
    return (
        <div className='bg-black py-44 sm:py-44 md:py-[300px] lg:py-[400px]'>
            <div className={`flex items-center justify-center w-full h-[100px] md:h-24`}>
                <Ticker speed={20}>
                    {brand1.map((item, index) => (
                        <div
                            key={index}
                            className='pr-1 w-full'
                        >
                            {index == 10 || index == 5 ?
                                <span className='text-stroke-invert text-7xl sm:text-7xl md:text-[100px] font-bold'>{item}</span> :
                                <span className='text-stroke text-7xl sm:text-7xl md:text-[100px] font-bold'>{item}</span>
                            }
                        </div>
                    ))}
                </Ticker>
            </div>
            <div className={`flex items-center justify-center w-full h-[100px] md:h-24 my-5`}>
                <Ticker speed={20} direction={1}>
                    {brand2.map((item, index) => (
                        <div
                            key={index}
                            className='pr-1 w-full'
                        >
                            {index == 11 || index == 6 ?
                                <span className='text-stroke-invert text-7xl sm:text-7xl md:text-[100px] font-bold'>{item}</span> :
                                <span className='text-stroke text-7xl sm:text-7xl md:text-[100px] font-bold'>{item}</span>
                            }
                        </div>
                    ))}
                </Ticker>
            </div>
            <div className={`flex items-center justify-center w-full h-[100px] md:h-24`}>
                <Ticker speed={20} direction={1}>
                    {brand3.map((item, index) => (
                        <div
                            key={index}
                            className='pr-1 w-full'
                        >
                            {index == 12 || index == 7 ?
                                <span className='text-stroke-invert text-7xl sm:text-7xl md:text-[100px] font-bold'>{item}</span> :
                                <span className='text-stroke text-7xl sm:text-7xl md:text-[100px] font-bold'>{item}</span>
                            }
                        </div>
                    ))}
                </Ticker>
            </div>
        </div>
    )
}

export default Banner