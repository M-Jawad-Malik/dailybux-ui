import React from 'react'
import { day, hour, min, sec } from '../../assets'

const Event = () => {
    return (
        <section className='bg-galaxy bg-cover bg-no-repeat bg-center w-screen sm:w-screen md:w-[97.7vw] lg:w-[98.7vw]'>
            <div className='flex flex-col px-5 py-44 justify-center items-center text-center'>
                <h1 className='text-5xl font-bold text-white'>Our Next Farming Event <br className='hidden sm:hidden md:inline-block' />
                    Starts in Just 2 Weeks!</h1>
                <div className='flex my-20 flex-col lg:flex-row space-x-0 sm:space-x-0 lg:space-x-12 space-y-10 sm:space-y-10 lg:space-y-0'>
                    <img src={day} alt="" />
                    <img src={hour} alt="" />
                    <img src={min} alt="" />
                    <img src={sec} alt="" />
                </div>
                <p className='text-white text-xl'>
                    Mark your calendars! In just two weeks, we're launching an exclusive farming event
                    <br className='hidden sm:hidden md:inline-block' />
                    designed to supercharge your assets. This is your golden opportunity to participate in a <br className='hidden sm:hidden md:inline-block' />
                    farming experience that not only rewards your engagement but also deepens your
                    <br className='hidden sm:hidden md:inline-block' />connection with our thriving community.
                </p>
            </div>
        </section>
    )
}

export default Event