import { useGSAP } from '@gsap/react'
import {gsap} from 'gsap'
import React, { useEffect } from 'react'


function Featured(){
  return (
    <div className='w-full py-10 bg-zinc-800 min-h-[1500px]'>
      <div className='w-full px-14 border-b-2 pb-12 border-zinc-600'>
        <h1 className='text-6xl font-["Neue Montreal"] tracking-light'>Featured Projects</h1>
      </div>
      <div className='px-14'>
      <div className="cards w-full flex grid grid-cols-2 gap-14 mt-14">
      <div className="cardcontainer1 w-full  h-[75vh]  ">
      <div class="text-sm uppercase flex items-center mb-4 ">
							<span class="w-3 h-3 flex-shrink-0 rounded-full bg-current mr-8"></span>
							<span>FYDE</span>
						</div>
            <div className="w-full h-full  rounded-lg overflow-hidden">
              <img className='w-full h-full cover ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
            <div className='flex'>{["audit","copywriting","sales desk","slides design"].map((item,index)=>(<button key={index} className=' px-2 py-1 flex justify-center items-center m-[3px] mt-[8px] border-zinc-600 border-2 rounded-3xl uppercase'>{item}</button>))}
            </div>
            </div>
              <div className="cardcontainer w-full h-[75vh]">
              <div class="text-sm uppercase flex items-center mb-4">
							<span class="w-3 h-3 flex-shrink-0 rounded-full bg-current mr-8"></span>
							<span>vise</span>
						</div>
              <div className="w-full h-full  rounded-lg overflow-hidden">
                <img className='w-full h-full cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
              </div>
              <div className='flex'>{["agency","company presentation"].map((item,index)=>(<button key={index} className=' px-2 py-1 flex justify-center items-center m-[3px] mt-[8px] border-zinc-600 border-2 rounded-3xl uppercase'>{item}</button>))}</div>
              </div>
          <div className="cardcontainer w-full h-[75vh]">
          <div class="text-sm uppercase flex items-center mb-4 mt-10">
							<span class="w-3 h-3 flex-shrink-0 rounded-full bg-current mr-8"></span>
							<span>Trawa</span>
						</div>
            <div className="w-full h-full  rounded-lg overflow-hidden">
              <img className='w-full h-full cover ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
            <div className='flex'>{["audit","copywriting","sales desk","slides design"].map((item,index)=>(<button key={index} className=' px-2 py-1 flex justify-center items-center m-[3px] mt-[8px] border-zinc-600 border-2 rounded-3xl uppercase'>{item}</button>))}
            </div>
            </div>
              <div className="cardcontainer w-full h-[75vh]">
              <div class="text-sm uppercase flex items-center mb-4 mt-10">
							<span class="w-3 h-3 flex-shrink-0 rounded-full bg-current mr-8"></span>
							<span>premium blend</span>
						</div>
              <div className="w-full h-full  rounded-lg overflow-hidden">
                <img className='w-full h-full cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
              </div>
              <div className='flex'>{["agency","company presentation"].map((item,index)=>(<button key={index} className=' px-2 py-1 flex justify-center items-center m-[3px] mt-[8px] border-zinc-600 border-2 rounded-3xl uppercase'>{item}</button>))}</div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Featured