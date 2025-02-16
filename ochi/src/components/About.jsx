import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.01" className='w-full pt-20 pb-16 bg-[#CDEA68] rounded-tl-3xl  rounded-tr-3xl'>
        <h1 className='text-zinc-900 text-[3.3rem] w-[80vw] leading-none pl-14'>Ochi is a strategic partner for fast-growing tech businesses that need to <u className='decoration-2 underline-offset-8'>raise funds</u>, <u className='decoration-2 underline-offset-8'>sell products</u>,<u className='decoration-2 underline-offset-8'>explain complex ideas</u>, and <u className='decoration-2 underline-offset-8'>hire great people</u>.</h1>
        <div className=' w-full h-[55vh] border-[#B3CC5D] border-[2px] mt-20 flex justify-between text-zinc-900 pl-14 text-base'>
            <div className='pr-[5%] w-[450px] pt-10'>What you can expect:</div>
            <div className='w-[300px] pt-10 flex flex-col gap-10'>
                <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</p>
                <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>
            <div className='w-[300px] mb-0 relative' >
                <div className='flex flex-col absolute bottom-[15.5vh] '>
                S:
                <a href=""><u className='underline-offset-4'>Instagram</u></a>
                <a href=""><u className='underline-offset-4'>Behance</u></a>
                <a href=""><u className='underline-offset-4'>Facebook</u></a>
                <a href=""><u className='underline-offset-4'>Linkedin</u></a>
                </div>
            </div>
        </div>
        <div className="w-full pt-4 flex">
            <div className="w-1/2 pl-14 text-zinc-900 text-6xl font-normal">
                <h1>Our Apporach:</h1>
                <button className='w-48 h-14 mt-16 rounded-3xl huppercase flex text-sm flex justify-center items-center bg-zinc-900 text-white text-xl relative pr-12'>Read more
                    <div className="w-10 h-10 border-none border-zinc-500 text-zinc-900 bg-white rounded-full flex items-center justify-center text-2xl font-thin absolute right-2"><FiArrowUpRight/></div>
                    </button>
            </div>
                <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" className='rounded-xl h-[70vh] w-1/2 mr-14' />
        </div>
    </div>
  )
}

export default About