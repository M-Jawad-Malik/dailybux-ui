import React from 'react'
import Card from './Card'
import { isolate1, isolate2, isolate3, isolate4, } from '../../assets'

const Main = () => {
    return (
        <section>
            <div className='flex justify-between w-full flex-wrap sm:flex-wrap lg:flex-nowrap'>
                <div className='bg-black w-full'>
                    <h1 className='text-white text-[33px] font-bold leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-relaxed 2xl:leading-relaxed px-5 sm:px-5 lg:px-28 text-center pt-44 sm:pt-44 lg:pt-[440px] pb-44 sm:pb-44 lg:pb-0'>
                        Connect all of your <br className='hidden sm:hidden md:inline-block' />
                        physical and digital <br className='hidden sm:hidden md:inline-block' />
                        journeys across Web2 and  <br className='hidden sm:hidden md:inline-block' />
                        <span className='bg-yellow-400 text-black'>Web3 in one platform</span>
                    </h1>
                </div>
                <div className='w-full'>
                    <Card styles="bg-layer-4" title="Delivery" image={isolate1} />
                    <Card styles="bg-layer-5" title="Social Media Engagement" image={isolate2} />
                    <Card styles="bg-layer-6" title="Driving" image={isolate3} />
                    <Card styles="bg-layer-7" title="Gaming" image={isolate4} />
                </div>
            </div>
        </section>
    )
}

export default Main