import React from 'react';
import SliderProjects from './SliderProjects';

const LastProjectPage = ({ next }) => {
  return (
    <div
      id='page-front3'
      className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-700 to-slate-950 rotate-y-0 translate-z-px py-6 px-8'
    >
      <h1 className='text-gray-200 text-4xl font-bold mb-6'>Latest Projects</h1>
      <SliderProjects />
      <span className='text-gray-200 absolute bottom-[1.2rem] -translate-x-1/2'>
        5
      </span>
      <span
        onClick={next}
        className='absolute fill-white hover:fill-yellow-500 duration-300 w-6 h-6 bottom-4 right-6 cursor-pointer justify-center items-center inline-flex nextprev-btn'
        data-page='turn-1'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          id='chevron-right'
        >
          <g data-name='Layer 2'>
            <g data-name='chevron-right'>
              <rect
                width='24'
                height='24'
                opacity='0'
                transform='rotate(-90 12 12)'
              ></rect>
              <path d='M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z'></path>
            </g>
          </g>
        </svg>
      </span>
    </div>
  );
};

export default LastProjectPage;
