import React from 'react'
const Card = ({ styles, title, image }) => {
    return (
        <div className={`py-44 sm:py-44 md:80 bg-layer-4 w-full flex flex-col justify-center items-center ${styles}`}>
            <button className='bg-[#00EBFA] border-2 border-black rounded-xl font-semibold py-4 px-6 text-xl'>{title}</button>
            <img src={image} alt="isolate" className='w-[75%] sm:w-[75%] md:w-1/2 mt-24' />
        </div>
    )
}

export default Card