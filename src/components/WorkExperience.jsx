import React from 'react';

const WorkExperience = ({ next }) => {
  return (
    <div
      id='page-front'
      className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-700 to-slate-950 py-6 px-8 pageFront'
      // className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-700 to-slate-950 rotate-y-0 py-6 px-8 translate-z-0.5'
    >
      <h1 className='text-gray-200 text-4xl font-bold mb-8'>Work Experience</h1>
      <div
        id='workeduc-box'
        className='flex flex-col h-fit gap-5 border-l-[3px] border-yellow-500'
      >
        <div
          id='workeduc-content'
          className='text-left relative pl-6 before:content-[""] before:absolute before:-top-[0.1rem] before:w-7 before:h-7 before:rounded-full before:bg-yellow-500 before:-left-[0.968rem]'
        >
          <box-icon
            size='sm'
            name='calendar'
            type='solid'
            color='#eab308'
          ></box-icon>
          <span className='text-yellow-500 ml-1 align-top text-xl font-semibold'>
            2020 - 2021
          </span>
          <h3 className='text-gray-200 font-bold'>Web Developer</h3>
          <p className='text-gray-200 text-start'>
            dar modat sarbazi dar in time dar khane mashghule yadgiri react
            budam va dar kenar oon react redux ro yad gereftam bedardam nakhord
            raftam reduxtoolkit yad gereftam
          </p>
        </div>
        <div
          id='workeduc-content'
          className='text-left relative pl-6 before:content-[""] before:absolute before:-top-[0.1rem] before:w-7 before:h-7 before:rounded-full before:bg-yellow-500 before:-left-[0.968rem]'
        >
          <box-icon
            size='sm'
            name='calendar'
            type='solid'
            color='#eab308'
          ></box-icon>
          <span className='text-yellow-500 ml-1 align-top text-xl font-semibold'>
            2020 - 2021
          </span>
          <h3 className='text-gray-200 font-bold'>Web Developer</h3>
          <p className='text-gray-200 text-start'>
            dar modat sarbazi dar in time dar khane mashghule yadgiri react
            budam va dar kenar oon react redux ro yad gereftam bedardam nakhord
            raftam reduxtoolkit yad gereftam
          </p>
        </div>
        <div
          id='workeduc-content'
          className='text-left relative pl-6 before:content-[""] before:absolute before:-top-[0.1rem] before:w-7 before:h-7 before:rounded-full before:bg-yellow-500 before:-left-[0.968rem]'
        >
          <box-icon
            size='sm'
            name='calendar'
            type='solid'
            color='#eab308'
          ></box-icon>
          <span className='text-yellow-500 ml-1 align-top text-xl font-semibold'>
            2020 - 2021
          </span>
          <h3 className='text-gray-200 font-bold'>Web Developer</h3>
          <p className='text-gray-200 text-start'>
            dar modat sarbazi dar in time dar khane mashghule yadgiri react
            budam va dar kenar oon react redux ro yad gereftam bedardam nakhord
            raftam reduxtoolkit yad gereftam
          </p>
        </div>
      </div>
      <span
        id='number-page'
        className='text-gray-200 absolute bottom-[1.2rem] -translate-x-1/2'
      >
        1
      </span>
      <span
        onClick={next}
        className='absolute w-6 h-6 bottom-4 right-6 cursor-pointer justify-center items-center inline-flex nextprev-btn'
        data-page='turn-1'
      >
        <box-icon name='chevron-right' color='#e5e7eb'></box-icon>
      </span>
    </div>
  );
};

export default WorkExperience;
