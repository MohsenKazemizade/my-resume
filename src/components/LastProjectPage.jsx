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
        className='absolute w-6 h-6 bottom-4 right-6 cursor-pointer justify-center items-center inline-flex nextprev-btn'
        data-page='turn-2'
      >
        <box-icon name='chevron-right' color='#e5e7eb'></box-icon>{' '}
      </span>
    </div>
  );
};

export default LastProjectPage;
