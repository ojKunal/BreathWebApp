import React from 'react'
import logo from '../../Assets/favicon.ico'
import './Inhale.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Inhale = () => {


    const [flag, setFlag] = useState(true);
    const [value, setvalue] = useState("00:00")
    const [first, setfirst] = useState(0)
    const [secons, setSecons] = useState(0)
    const handleStart = () => {
        console.log(flag);
        if(flag) setFlag(false);
        else setFlag(true);
        
    }
 

        useEffect(()=>{
            if(!flag){
           const intv =  setInterval(() => {
                if(secons===59){
                    setfirst(first => first+1)
                    setSecons(0);
                }
                setSecons(secons => secons+1)
                console.log(secons);
                if(secons < 10 && first < 10)
                setvalue("0" + (first)+":" + "0" + (secons));
                else if(secons < 10)
                setvalue((first)+":" + "0" + (secons));
                else if(first < 10)
                setvalue("0" + (first)+":" + (secons));
                else
                setvalue((first)+":" + (secons));
                // setfirst(first => first+1)
                // console.log(first)
            }, 1000);

            return () => clearInterval(intv);
        }
            
            
        })
        
    

  return (
    <>
        <div>
            <Link to='/'>
                <img className='h-12 m-4' src={logo} alt="Inhale" />
            </Link>
        </div>
        <div className='w-full h-full justify-center flex flex-col items-center'>
            <h2 className='text-4xl '>Time to Breathing</h2>
            <div className={'border-4 border-gray-300 mt-12 h-80 w-80 rounded-full flex  justify-center' + (flag?'':' anima')}>
                <div>

                <div className='flex m-4'>
                    <div className='w-14 h-7 rounded-b-full border-t-0 border-4 mt-16 m-6 border-gray-300'></div>
                    <div className='w-14 h-7 rounded-b-full border-t-0 border-4 m-6 mt-16 ml-8 border-gray-300'></div>
                </div>
                <div className='w-full justify-center items-center flex'>
                <div   onClick={handleStart} className={"bg-yellow-400 hover:bg-yellow-500 rounded-full justify-center items-center " + (flag ? "flex":"hidden")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="m-3 w-6 h-6">
                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                    </svg>

                </div>
                {/* <div>
                    <h1 className='hidden'>Inhale</h1>
                    <h1 className=''>Exhale</h1>
                </div> */}
                </div>
                </div>
            </div>
            <div className='mt-12 text-5xl '>
                <h1 className='text-gray-500'>{value}</h1>
            </div>
            <h2 className='font-mono m-4 mt-16'>You can press <span><span className='bg-gray-200 p-1 px-3 m-2 hover:bg-gray-300 rounded-full' to='/'>space</span></span> for start / stop</h2>
        </div>
    </>
  )
}

export default Inhale
