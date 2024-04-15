import React from 'react'
import { frameBtn } from '../utils/frameBtn';
import photo from "../assets/photo.png"
import first from "../assets/first.png"
import second from "../assets/second.png"
import third from "../assets/third.png"


function Frame() {
  return (
    <>
    <div className="w-screen h-screen">
        <h2 className="text-7xl max-w-2xl text-center	mx-96	">
            The complete platform for smart contracts
        </h2>
            <img src={photo}  alt=""  className='absolute top-0 left-0 z-[-10] w-screen'/>
        <div className=" text-sky-900 w-2/6	  mt-36  float-right pr-32">
            <img src={first} alt="" />
            <h3 className="text-6xl	">Forget friction</h3>
            <p className="mt-8 mb-4 text-lg	">Experience a truly digital contract process that makes creating, signing, and managing agreements quick, smooth, and effortless. Contracts without trickery.</p>
            <div className=" flex justify-between w-1/4">
                {frameBtn.map((btn) =>(
                    <button 
                    className="rounded-md h-8 text-base w-72	"
                        style={{
                            backgroundColor: btn.bgColor,
                            border: btn.border,
                            color: btn.color,
                        }}
                        key={btn.id}
                        > Take a tour
                    </button>
                ))}

            </div>
        </div>

        <div className="max-w-5xl text-sky-900 w-96 ml-36 pt-96 mt-96	 ">
            <img src={second} alt="" />
            <h3 className="text-6xl	">Unleash data</h3>
            <p className="mt-8	mb-4 text-lg">Get faster and smarter with automated processes and intelligent insights that unlock the data inside your agreements. Leave behind the limitations of paper and PDFs. Just like that.</p>
            <div className=" flex justify-between w-1/4">
                {frameBtn.map((btn) =>(
                    <button 
                    className="rounded-md h-8 text-xs w-72"
                        style={{
                            backgroundColor: btn.bgColor,
                            width: btn.width,
                            border: btn.border,
                            color: btn.color,
                        }}
                        key={btn.id}
                        > Take a tour
                    </button>
                ))}

            </div>
        </div>
        <div className="text-sky-900 w-2/6	  mt-36  float-right pr-32">
            <img src={third} alt="" />
            <h3 className="text-6xl	">Take control</h3>
            <p className="mt-8	mb-4 text-lg">Know what’s happening in real-time with a complete overview of all your contracts, all in one place. It’s all the visibility and transparency you need, at your fingertips.</p>
            <div className=" flex justify-between w-1/4">
                {frameBtn.map((btn) =>(
                    <button 
                    className="rounded-md h-8 text-xs w-72"
                        style={{
                            backgroundColor: btn.bgColor,
                            width: btn.width,
                            border: btn.border,
                            color: btn.color,
                        }}
                        key={btn.id}
                        > Take a tour
                    </button>
                ))}

            </div>
        </div>
        
    </div>
    </>
  );
}
export default Frame;
