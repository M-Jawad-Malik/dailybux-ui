import React from 'react'
import { Footer, Hero, Navbar, Banner, Process1, Process2, Process3, Main, Partner, Event, FAQ } from '../../components'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Banner />
            <div class="bg-hero2 bg-cover bg-no-repeat bg-center w-screen sm:w-screen md:w-[97.7vw] lg:w-[98.7vw] h-[50vh] sm:h-[50vh] md:h-[75vh] lg:h-screen relative">
                <h1 class="absolute bottom-2/4 left-[3.5rem] sm:left-[3.5rem] 2xl:left-[42rem] xl:left-[32rem] lg:left-[22rem] md:left-[16rem] text-white/50 font-semibold text-6xl sm:text-6xl md:text-7xl"> Dailybux</h1>
            </div>
            <Process1 />
            <Process2 />
            <Process3 />
            <Main />
            <Event />
            <Partner />
            <FAQ />
            <Footer />
        </div>
    )
}

export default Home