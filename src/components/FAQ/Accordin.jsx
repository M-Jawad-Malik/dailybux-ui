import React, { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { RiSubtractLine } from "react-icons/ri";

const Accordin = (props) => {
    const { question, ans, answer, boxBorder, buttonBorder } = props;
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div id="accordionExample" className='text-white'>
            <div
                className={`${boxBorder} border-y-[0.5px] border-x-0 border-neutral-100/20`}
                onClick={handleToggle}>
                <h2 className="mb-0" id="headingOne">
                    <button
                        className={`group relative flex w-full items-center ${buttonBorder} border-0 !border-y-0 px-8 sm:px-8 xl:px-80 2xl:px-[370px] py-9 text-left font-bold text-base sm:text-base md:text-[23px] transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-black [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-[#454545] [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-[#454545] dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] !bg-black !text-white`}
                        type="button"
                        data-te-collapse-init
                        data-te-target="#collapseOne"
                        aria-expanded={isExpanded}
                        aria-controls="collapseOne">
                        {question}
                        <span
                            onClick={handleToggle}
                            className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-black">
                            <AiOutlinePlus size={26} className={isExpanded ? "hidden" : ""} />
                            <RiSubtractLine size={26} className={isExpanded ? "text-layer-8" : "hidden"} />
                        </span>
                    </button>
                </h2>
                {isExpanded && (
                    <div
                        id="collapseOne"
                        // className="!visible"
                        data-te-collapse-item
                        data-te-collapse-show
                        aria-labelledby="headingOne"
                        data-te-parent="#accordionExample">
                        <div className="px-8 sm:px-8 xl:px-80 2xl:px-[370px] py-4">
                            <p className='leading-loose sm:leading-loose md:leading-loose lg:leading-loose xl:leading-loose 2xl:leading-loose text-base sm:text-base md:text-[23px] font-normal py-[40px] sm:py-[40px] md:py-[70px]'>{ans}</p>
                            {/* <ol style={{ listStyle: "auto" }}>
                                {answer?.length > 0 &&
                                    answer.map((item) => <li key={item}>{item}</li>)}
                            </ol> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accordin;
