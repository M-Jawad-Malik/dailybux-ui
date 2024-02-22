import React, { useState } from "react";
import { HiChevronDoubleRight } from "react-icons/hi";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { dropDown, language, logo, telegram, twitter } from '../../assets'
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (


        <nav className="bg-black/20 border-gray-200 fixed w-full z-50">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4 md:px-12 px-5 sm:px-5">
                <a href="#" className="flex items-center space-x-3">
                    <img src={logo} className="" alt="Logo" />
                </a>
                <div className="flex relative">
                    {toggleMenu ? (
                        <AiOutlineClose
                            fontSize={0}
                            className="text-black md:hidden cursor-pointer"
                            onClick={() => {
                                setToggleMenu(false);
                            }}
                        />
                    ) : (
                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"
                            onClick={() => {
                                setToggleMenu(true);
                            }}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>

                    )}
                    {toggleMenu && (
                        <ul className="z-10 fixed top-0 right-0 p-3 w-[100vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start bg-black/95 text-white items-center text-3xl animate-slide-in">
                            <li className="text-xl w-full my-2">
                                <AiOutlineClose
                                    fontSize={35}
                                    className="text-white md:hidden cursor-pointer"
                                    onClick={() => {
                                        setToggleMenu(false);
                                    }}
                                />
                            </li>
                            <li className="my-6 mt-12">
                                <a
                                    href="/"
                                    className="mr-4 font-semibold cursor-pointer p-2"
                                    id="btn"
                                >
                                    About
                                </a>
                            </li>
                            <li className="my-6">
                                <a
                                    href="#"
                                    className=" mr-2 font-semibold cursor-pointer p-2"
                                    id="btn"
                                >
                                    Partner
                                </a>
                            </li>
                            <li className="my-6">
                                <a
                                    href="#"
                                    className="mr-4 font-semibold cursor-pointer p-2"
                                    id="btn"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li className="my-6">
                                <a
                                    href="#"
                                    className="mr-4 font-semibold cursor-pointer p-2"
                                    id="btn"
                                >
                                    Farming
                                </a>
                            </li>
                        </ul>
                    )}
                </div>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded text-base sm:text-base md:text-lg md:p-0 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded text-base sm:text-base md:text-lg md:p-0 ">Partner</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded text-base sm:text-base md:text-lg md:p-0 ">FAQ</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded text-base sm:text-base md:text-lg md:p-0 ">Farming</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded text-base sm:text-base md:text-lg md:p-0">|</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded text-base sm:text-base md:text-lg md:p-0">
                                <img src={telegram} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded text-base sm:text-base md:text-lg md:p-0">
                                <img src={twitter} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex py-2 px-3 text-white rounded text-base sm:text-base md:text-lg md:p-0">
                                <img src={language} alt="" /> &nbsp; EN <img src={dropDown} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>

    )
}

export default Navbar