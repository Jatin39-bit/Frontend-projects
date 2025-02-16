import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate,setRotate]=useState(0)
    useEffect(()=>{
        document.querySelector(".eyes").addEventListener("mousemove",function(e){
            let mouseX=e.clientX;
            let mouseY=e.clientY;

            let deltaX=mouseX-window.innerWidth/2;
            let deltaY=mouseY-window.innerHeight/2;

            var angle=Math.atan2(deltaY,deltaX)* (180/Math.PI);
            setRotate(angle-180)
        })
    },[])
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div  data-scroll  data-scroll-speed="-.6" className=" relative w-full h-full  bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute top-1/4 left-1/4 gap-10 flex  translate-x-[30%] translate-y-[25%]">
            <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100  flex items-center justify-center'>
                <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center">
                <div style={{transform:` rotate(${rotate}deg)`}} className="line w-full h-10 flex relative">
                <div className="w-1/4 h-full rounded-full bg-zinc-100"></div>
                </div>
                </div>
            </div>
            <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center'>
                <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center" >
                <div style={{transform:` rotate(${rotate}deg)`}} className="line w-full h-10 flex relative">
                <div className="w-1/4 h-full rounded-full bg-zinc-100"></div>
                {/* <p className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-2xl'>Play</p> */}
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Eyes