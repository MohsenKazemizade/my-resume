import React from 'react';

const ServicesPage = ({ next }) => {
  return (
    <div
      id='page-front2'
      className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-700 to-slate-950 py-6 px-8 pageFront'
      // className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-700 to-slate-950 py-6 px-8 rotate-y-0 translate-z-px'
    >
      <h1 className='text-gray-200 text-4xl font-bold mb-8'>My Services</h1>
      <div id='services-box' className='flex flex-wrap gap-6'>
        <div
          id='services-content'
          className='services-content justify-center items-center text-center border-2 border-yellow-500 hover:shadow-yellow-500 p-4 shadow-sm rounded hover:shadow-lg transition duration-300 ease-in-out'
        >
          <box-icon size='lg' name='code-alt' color='#eab308'></box-icon>
          <h3 className='text-gray-200 font-bold'>Web Development</h3>
          <p className='text-gray-200 text-sm m-2'>
            i am a good developer acording to my self and yes i am selfish
          </p>
          <button className='h-10 py-0 bg-transparent shadow-sm border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-800 text-yellow-500 transition duration-300 ease-in-out'>
            Read More
          </button>
        </div>
        <div
          id='services-content'
          className='services-content justify-center items-center text-center border-2 border-yellow-500 hover:shadow-yellow-500 p-4 shadow-sm rounded hover:shadow-lg transition duration-300 ease-in-out'
        >
          <box-icon
            size='lg'
            type='logo'
            color='#eab308'
            name='tailwind-css'
          ></box-icon>
          <h3 className='text-gray-200 font-bold'>Tailwind Css Master</h3>
          <p className='text-gray-200 text-sm m-2'>
            Tailwind CSS is the only framework that I've seen scale on large
            teams.
          </p>
          <button className='h-10 py-0 bg-transparent shadow-sm border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-800 text-yellow-500 transition duration-300 ease-in-out'>
            Read More
          </button>
        </div>
        <div
          id='services-content'
          className='services-content justify-center items-center text-center border-2 border-yellow-500 hover:shadow-yellow-500 p-4 shadow-sm rounded hover:shadow-lg transition duration-300 ease-in-out'
        >
          <box-icon
            size='lg'
            type='logo'
            color='#eab308'
            name='react'
          ></box-icon>
          <h3 className='text-gray-200 font-bold'>React Developer</h3>
          <p className='text-gray-200 text-sm m-2'>
            React lets you build user interfaces out of individual pieces.
          </p>
          <button className='h-10 py-0 bg-transparent shadow-sm border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-800 text-yellow-500 transition duration-300 ease-in-out'>
            Read More
          </button>
        </div>
        <div
          id='services-content'
          className='services-content justify-center items-center text-center border-2 border-yellow-500 hover:shadow-yellow-500 p-4 shadow-sm rounded hover:shadow-lg transition duration-300 ease-in-out'
        >
          <box-icon
            size='lg'
            name='javascript'
            type='logo'
            color='#eab308'
          ></box-icon>
          <h3 className='text-gray-200 font-bold'>Javascript Developer</h3>
          <p className='text-gray-200 text-sm m-2'>
            JavaScript is a lightweight interpreted programming language
          </p>
          <button className='h-10 py-0 bg-transparent shadow-sm border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-800 text-yellow-500 transition duration-300 ease-in-out'>
            Read More
          </button>
        </div>
      </div>
      <span className='text-gray-200 absolute bottom-[1.2rem] -translate-x-1/2'>
        3
      </span>
      <span
        onClick={next}
        className='absolute w-6 h-6 bottom-4 right-6 cursor-pointer justify-center items-center inline-flex nextprev-btn'
        data-page='turn-2'
      >
        <box-icon name='chevron-right' color='#e5e7eb'></box-icon>{' '}
      </span>
    </div>
  );
};

export default ServicesPage;
