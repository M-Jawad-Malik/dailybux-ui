import React from 'react'
import { invertTelegram, invertTwitter, invertlogo } from "../../assets/index"
const Footer = () => {
    return (
        <footer class="bg-layer-8 body-font">
            <div class="px-5 sm:px-5 md:px-48 lg:px-72 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col justify-between w-full">
                <div class="text-center md:text-left">
                    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img src={invertlogo} alt="" />
                    </a>
                    <p class="mt-7 text-base sm:text-base md:text-lg font-semibold">Contact</p>
                    <p class="mt-7 text-base sm:text-base md:text-lg font-normal underline">team@dailybux.io</p>
                    <div className='mt-7 flex space-x-7 justify-center sm:justify-center md:justify-start'>
                        <img src={invertTelegram} alt="" className='w-[8%] sm:w-[8%] md:w-1/6' />
                        <img src={invertTwitter} alt="" className='w-[8%] sm:w-[8%] md:w-1/6' />
                    </div>
                </div>
                <div class="flex flex-wrap sm:flex-wrap md:flex-nowrap md:pl-20 -mb-10 md:mt-0 mt-10 sm:mt-10 md:text-left text-center mx-auto sm:mx-auto md:mx-0 w-full sm:w-full md:w-1/2">
                    <div class="w-full px-4">
                        <nav class="list-none">
                            <li className='mb-6'>
                                <a class="text-base sm:text-base md:text-lg font-normal hover:cursor-pointer">About</a>
                            </li>
                            <li className='mb-6'>
                                <a class="text-base sm:text-base md:text-lg font-normal hover:cursor-pointer">Features</a>
                            </li>
                            <li className='mb-6'>
                                <a class="text-base sm:text-base md:text-lg font-normal hover:cursor-pointer">Partners</a>
                            </li>
                        </nav>
                    </div>
                    <div class="w-full px-4">
                        <nav class="list-none">
                            <li className='mb-6'>
                                <a class="text-base sm:text-base md:text-lg font-normal hover:cursor-pointer">FAQ</a>
                            </li>
                            <li className='mb-6'>
                                <a class="text-base sm:text-base md:text-lg font-normal hover:cursor-pointer">Whitepaper</a>
                            </li>
                            <li className='mb-6'>
                                <a class="text-base sm:text-base md:text-lg font-normal hover:cursor-pointer">How it works</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer