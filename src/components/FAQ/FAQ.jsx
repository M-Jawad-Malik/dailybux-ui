import React from 'react'
import Accordin from './Accordin'

const FAQ = () => {
    return (
        <section className='bg-black'>
            <div className='py-44'>
                <h1 className='flex flex-col justify-center items-center text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-[100px]'>FAQ</h1>

                <div className="mx-0">
                    <Accordin
                        ans="Dailybux is an innovative lifestyle application designed to seamlessly integrate the digital world with the real world. The platform allows users to earn rewards for their actions, whether it's everyday activities, community involvement, purchasing behavior, or personal development efforts. Dailybux offers more than just rewards; its ultimate goal is to build a strong digital identity and reputation for its users, which will help them carry their complete identity with them."
                        question="What is Dailybux?"
                    />
                    <Accordin
                        question="What is the vision behind Dailybux?"
                        ans="Dailybux is an innovative lifestyle application designed to seamlessly integrate the digital world with the real world. The platform allows users to earn rewards for their actions, whether it's everyday activities, community involvement, purchasing behavior, or personal development efforts. Dailybux offers more than just rewards; its ultimate goal is to build a strong digital identity and reputation for its users, which will help them carry their complete identity with them."
                    />
                    <Accordin
                        question="How does Dailybux plan to bridge the gap between Web2 and Web3?"
                        ans="Dailybux is an innovative lifestyle application designed to seamlessly integrate the digital world with the real world. The platform allows users to earn rewards for their actions, whether it's everyday activities, community involvement, purchasing behavior, or personal development efforts. Dailybux offers more than just rewards; its ultimate goal is to build a strong digital identity and reputation for its users, which will help them carry their complete identity with them."
                    />
                    <Accordin
                        question="What are the ways to earn rewards on Dailybux?"
                        ans="Dailybux is an innovative lifestyle application designed to seamlessly integrate the digital world with the real world. The platform allows users to earn rewards for their actions, whether it's everyday activities, community involvement, purchasing behavior, or personal development efforts. Dailybux offers more than just rewards; its ultimate goal is to build a strong digital identity and reputation for its users, which will help them carry their complete identity with them."
                    />
                    <Accordin
                        question="Is it free to use?"
                        ans="Dailybux is an innovative lifestyle application designed to seamlessly integrate the digital world with the real world. The platform allows users to earn rewards for their actions, whether it's everyday activities, community involvement, purchasing behavior, or personal development efforts. Dailybux offers more than just rewards; its ultimate goal is to build a strong digital identity and reputation for its users, which will help them carry their complete identity with them."
                    />
                </div>

            </div>
        </section>
    )
}

export default FAQ