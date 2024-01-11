import React from 'react'
import alexey from '../../Assets/alexey.webp'
import christiana from '../../Assets/chrisitana.webp'
import kacey from '../../Assets/kacey.webp'
import mcd from '../../Assets/mcd.png'
import tweet from '../../Assets/tweet.png'
const Testimonials = () => {
  return (
    <div>
        {/* Kacey review */}
      <div className='flex flex-col lg:flex-row lg:w-4/5 lg:justify-center m-4 item-center lg:mx-48'>
        <div className="left  lg:w-1/2 ">
            <img className='p-2 lg:p-0 md:p-16' src={kacey} alt="alexeyimage" />
        </div>
        <div className="right  lg:w-1/2">
            <h2 className='lg:text-5xl lg:pl-0 md:pl-16 md:text-4xl text-2xl m-4'>"After the pandemic  began, I spent a long  time looking for a solution that would reduce the anxiety. I'm glad I finally found it."</h2>
            <img className='w-24 lg:-ml-2 md:ml-16 mt-8 -ml-2' src={mcd} alt="" />
            <h1 className='lg:text-3xl lg:pl-0 md:pl-16 md:text-2xl text-xl m-4'>Kacey Gillar</h1>
            <h2 className='lg:text-2xl lg:pl-0 md:pl-16  text-xl ml-4 bold text-gray-500'>Accounting Assistant at McDonalds</h2>
        </div>
        </div>

        {/* alexey review */}
      <div className='flex flex-col-reverse lg:flex-row lg:w-4/5 lg:justify-center mt-12 m-4 item-center lg:mx-48'>
        <div className="right  lg:w-1/2">
            <h2 className='lg:text-5xl lg:pl-0 md:pl-16 md:text-4xl text-2xl m-4'>“The issue of burnout is studied by many scientists every day. It is certainly encouraging that we are beginning to think seriously about solving this problem.”</h2>
            {/* <img className='w-24 lg:-ml-2 md:ml-16 mt-8 -ml-2' src={mcd} alt="" /> */}
            <h1 className='lg:text-3xl lg:pl-0 md:pl-16 md:text-2xl text-xl mt-8 m-4'>Alexey Markov</h1>
            <h2 className='lg:text-2xl lg:pl-0 md:pl-16  text-xl ml-4 bold text-gray-500'>Member of the National Consortium
for Psychiatric Genetics</h2>
        </div>
        <div className="left  lg:w-1/2 ">
            <img className='p-2 lg:p-0 md:p-16' src={alexey} alt="alexeyimage" />
        </div>
      </div>



      {/* Christiana review */}
      <div className='flex flex-col lg:flex-row lg:w-4/5 lg:justify-center m-4 mt-12 item-center lg:mx-48'>
        <div className="left  lg:w-1/2 ">
            <img className='p-2 lg:p-0 md:p-16' src={christiana} alt="alexeyimage" />
        </div>
        <div className="right  lg:w-1/2">
            <h2 className='lg:text-5xl lg:pl-0 md:pl-16 md:text-4xl text-2xl m-4'>“I am glad that I joined such a unique project. At the interview stage, I did not believe in the technology. However, now I am ready to share it with everyone!”</h2>
            <img className='w-8  mt-8 ml-6' src={tweet} alt="" />
            <h1 className='lg:text-3xl lg:pl-0 md:pl-16 md:text-2xl text-xl m-4'>Christiana Luna</h1>
            <h2 className='lg:text-2xl lg:pl-0 md:pl-16  text-xl ml-4 bold text-gray-500'>Communications Manager at inBreath</h2>
        </div>
        </div>
    </div>
  )
}

export default Testimonials
