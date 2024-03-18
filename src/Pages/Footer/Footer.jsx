import React from 'react'
import logo from '../../Assets/inhales.png'
const Navbar = () => {
  return (
    <>
    <div className='flex flex-col lg:flex-row md:flexx-row justify-between items-center px-48'>
      <div>
        <div>
           <img className='w-48' src={logo} alt="" />
        </div>
        <div className='flex'>
            <div className='rounded-full bg-gray-200 p-2 m-2'>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="24px" height="24px"><path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"/></svg></div>
            <div className='rounded-full bg-gray-200 p-2 m-2'>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="24px" height="24px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>
            </div>
            <div className='rounded-full bg-gray-200 p-2 m-2'>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path d="M14.5 12.129999999999999A12.5 12.5 0 1014.5 37.129999999999995 12.5 12.5 0 1014.5 12.129999999999999zM39.73 21.211c-.058-.36-.126-.713-.202-1.057-.152-.688-.338-1.342-.553-1.953-.108-.306-.223-.601-.345-.885-.489-1.136-1.09-2.089-1.77-2.797-.85-.885-1.824-1.388-2.86-1.388s-2.01.503-2.86 1.388c-.68.708-1.281 1.661-1.77 2.797-.122.284-.238.579-.345.885-.216.612-.401 1.266-.553 1.953-.076.344-.143.696-.202 1.057C28.094 22.291 28 23.44 28 24.63c0 6.351 2.686 11.5 6 11.5s6-5.149 6-11.5C40 23.44 39.906 22.291 39.73 21.211zM43.5 14.13c-1.381 0-2.5 4.701-2.5 10.5 0 .362.004.721.013 1.074.051 2.118.252 4.05.558 5.605.102.519.215.995.339 1.423.123.428.257.807.399 1.13.354.808.76 1.267 1.192 1.267s.837-.459 1.192-1.267c.142-.323.275-.702.399-1.13.123-.428.237-.905.339-1.423.306-1.556.507-3.487.558-5.605C45.996 25.351 46 24.993 46 24.63 46 18.831 44.881 14.13 43.5 14.13z"/></svg>
            </div>
        </div>
      </div>
      <div className='text-center w-screen md:w-auto mt-8 md:text-left'>
        <h2 className=' text-gray-400 mt-8 md:mt-0 mb-4 font-medium m-2'>PRODUCT</h2>
        <h2 className='font-medium m-2 '>inBreadth extention</h2>
        <h2 className='font-medium m-2'>inBreadth App</h2>
        <h2 className='font-medium m-2'>Other site</h2>
      </div>
      <div className='text-center w-screen md:w-auto mt-8 md:mt-0 md:text-left'>
        <h2 className='text-gray-400 font-medium  mb-4'>COMPANY</h2>
        <h2 className='font-medium'>Contact</h2>
        <h2 className='font-medium'>Partnership</h2>
        <h2 className='font-medium'>Media Kit</h2>
      </div>
      <div className='text-center w-screen md:w-auto mt-8 md:mt-0 md:text-left'>
        <h2 className='text-gray-400 font-medium mb-4'>HELP</h2>
        <h2 className='font-medium'>FAQs</h2>
        <h2 className='font-medium'>How it works</h2>
        <h2 className='font-medium'>Community</h2>
      </div>
    </div>
    <hr className='md:mx-48 mt-16' />
    <hr className='md:mx-48' />
    <div className='flex flex-col w-screen md:w-auto lg:flex-row md:flex-row justify-between lg:mx-48 md:mx-32 items-center text-center'>
        <div className='flex'>
            <h4 className='text-gray-400 m-6 text-xs'>©2024, Breadth</h4>
            <h4 className='text-gray-400 m-6 text-xs'>send feedback</h4>
        </div>
        <div className='flex'>
            <h4 className='text-gray-400 md:m-6 m-2 text-xs'>Terms of use</h4>
            <h4 className='text-gray-400 md:m-6 m-2 text-xs'>Privacy Policy</h4>
        </div>

    </div>
    </>
  )
}

export default Navbar
