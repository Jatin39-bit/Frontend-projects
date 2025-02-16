import React, { useEffect } from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { Linear, gsap } from "gsap";
import { useGSAP } from '@gsap/react';

function Landing() {
        useGSAP(()=>{
            gsap.fromTo(".maskerimg",
                { scaleX: 0, width: 0, transformOrigin: 'left' },
                { scaleX: 1, width: '9vw', duration: 1,delay:1, ease: 'power3.out' }
            )
        })
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.6" className='w-full h-[80vh] bg-zinc-900'>
        <div className="textstructure mt-20 px-14">
            {["we create","eye opening","presentations"].map((item,index)=>(<div key={index} className="masker">
                <div className="w-fit flex items-center ">
                    {index === 1 && (<div className=' h-[5.4vw]  bg-green-500 top-[.35vw] relative rounded-md  maskerimg'></div>)}
                <h1 className='font-["Test Founders Grotesk "] font-semibold leading-[6.3vw] tracking-tighter uppercase text-[7.5vw]'>{item}</h1>
                </div>
            </div>
            ))}
        </div>
        <div className="border-t-[1px] border-zinc-700 mt-28 flex justify-between items-center px-14 py-6">
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
                <p key={index} className='text-md font-light tracking-light leading-none text-white'>{item}</p>)
            )}
            <div className="start flex gap-3">
                <div className="px-4 py-2 border-[2px] border-zinc-500 font-light text-sm uppercase rounded-full">Start the project</div>
                <div className="w-10 h-10 border-[2px] border-zinc-500 text-gray-300 rounded-full flex items-center justify-center text-2xl font-thin"><FiArrowUpRight/></div>
            </div>
        </div>
    </div>
  )
}

export default Landing