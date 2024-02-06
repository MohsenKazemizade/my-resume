import React from 'react';

const SkillsPage = ({ previousPage }) => {
  return (
    <div
      id='page-back2'
      className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-700 to-slate-950 py-6 px-8 pageBack'
      // className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-700 to-slate-950 py-6 px-8 rotate-y-180 -translate-z-px'
    >
      <h1 id='title' className='text-gray-200 text-4xl font-bold mb-4'>
        My Skills
      </h1>
      <div id='skills-box' className='flex flex-wrap gap-6'>
        <div id='skills-content' className='flex-20rem'>
          <h3 className='text-gray-200 font-bold text-xl leading-4 mb-2.5'>
            Front End
          </h3>
          <div id='content' className='flex flex-wrap gap-3.5'>
            <span className='text-gray-200 w-24 h-20 inline-flex border-2 rounded border-yellow-500 hover:shadow-yellow-500 font-semibold flex-col justify-center items-center transition duration-300 ease-in-out hover:shadow-md cursor-pointer'>
              <box-icon
                size='lg'
                name='html5'
                type='logo'
                color='#eab308'
              ></box-icon>
              HTML
            </span>
            <span className='text-gray-200 w-24 h-20 inline-flex border-2 rounded border-yellow-500 hover:shadow-yellow-500 font-semibold flex-col justify-center items-center transition duration-300 ease-in-out hover:shadow-md cursor-pointer'>
              <box-icon
                size='lg'
                name='css3'
                type='logo'
                color='#eab308'
              ></box-icon>
              CSS
            </span>
            <span className='text-gray-200 w-24 h-20 inline-flex border-2 rounded border-yellow-500 hover:shadow-yellow-500 font-semibold flex-col justify-center items-center transition duration-300 ease-in-out hover:shadow-md cursor-pointer'>
              <box-icon
                size='lg'
                name='javascript'
                type='logo'
                color='#eab308'
              ></box-icon>
              JS
            </span>
            <span className='text-gray-200 w-24 h-20 inline-flex border-2 rounded border-yellow-500 hover:shadow-yellow-500 font-semibold flex-col justify-center items-center transition duration-300 ease-in-out hover:shadow-md cursor-pointer'>
              <box-icon
                size='lg'
                name='react'
                type='logo'
                color='#eab308'
              ></box-icon>
              ReacrJS
            </span>
            <span className='text-gray-200 w-24 h-20 inline-flex border-2 rounded border-yellow-500 hover:shadow-yellow-500 font-semibold flex-col justify-center items-center transition duration-300 ease-in-out hover:shadow-md cursor-pointer'>
              <box-icon
                size='lg'
                name='tailwind-css'
                type='logo'
                color='#eab308'
              ></box-icon>
              TailwindCSS
            </span>
          </div>
        </div>
        <div id='skills-content' className='flex-20rem'>
          <h3 className='text-gray-200 font-bold text-xl leading-4 mb-2.5'>
            Back End
          </h3>
          <div id='content' className='flex flex-wrap gap-3.5'>
            <span className='text-gray-200 w-24 h-20 inline-flex border-2 rounded border-yellow-500 hover:shadow-yellow-500 font-semibold flex-col justify-center items-center transition duration-300 ease-in-out hover:shadow-md cursor-pointer'>
              <box-icon
                size='lg'
                name='python'
                type='logo'
                color='#eab308'
              ></box-icon>
              Python
            </span>
            <span className='text-gray-200 w-24 h-20 inline-flex border-2 rounded border-yellow-500 hover:shadow-yellow-500 font-semibold flex-col justify-center items-center transition duration-300 ease-in-out hover:shadow-md cursor-pointer'>
              <box-icon
                size='lg'
                name='php'
                type='logo'
                color='#eab308'
              ></box-icon>
              PHP
            </span>
            <span className='text-gray-200 w-24 h-20 inline-flex border-2 rounded border-yellow-500 hover:shadow-yellow-500 font-semibold flex-col justify-center items-center transition duration-300 ease-in-out hover:shadow-md cursor-pointer'>
              <box-icon
                size='lg'
                name='java'
                type='logo'
                color='#eab308'
              ></box-icon>
              Java
            </span>
            <span className='text-gray-200 w-24 h-20 inline-flex border-2 rounded border-yellow-500 hover:shadow-yellow-500 font-semibold flex-col justify-center items-center transition duration-300 ease-in-out hover:shadow-md cursor-pointer'>
              <box-icon
                size='lg'
                name='nodejs'
                type='logo'
                color='#eab308'
              ></box-icon>
              NodeJS
            </span>
          </div>
        </div>
        <div id='skills-content' className='flex-20rem'>
          <h3 className='text-gray-200 font-bold text-xl leading-4 mb-2.5'>
            UI/UX Design
          </h3>
          <div id='content' className='flex flex-wrap gap-3.5'>
            <span className='text-gray-200 w-24 h-20 inline-flex border-2 rounded border-yellow-500 font-semibold flex-col justify-center items-center transition duration-300 ease-in-out hover:shadow-md hover:shadow-yellow-500 cursor-pointer'>
              <box-icon
                size='lg'
                name='figma'
                type='logo'
                color='#eab308'
              ></box-icon>
              Figma
            </span>
          </div>
        </div>
      </div>
      <span
        id='number-page'
        className='text-gray-200 absolute bottom-[1.2rem] -translate-x-1/2'
      >
        4
      </span>
      <span
        onClick={previousPage}
        className='absolute w-6 h-6 bottom-4 left-6 cursor-pointer justify-center items-center inline-flex nextprev-btn'
        data-page='turn-2'
      >
        <box-icon name='chevron-left' color='#e5e7eb'></box-icon>
      </span>
    </div>
  );
};

export default SkillsPage;
