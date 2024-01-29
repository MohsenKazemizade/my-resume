import { useState } from 'react';
import image from './assets/photo_2024-01-28_15-49-04.jpg';
import 'boxicons';
import './App.css';

function App() {
  const [count, setCount] = useState(false);

  return (
    <>
      <div className='relative w-[66rem] h-[45rem] p-[2rem]'>
        <div className='absolute top-0 left-0 shadow-md rounded-tl-lg rounded-bl-lg w-6/12 h-full origin-right bg-gradient-to-r from-cyan-500 to-blue-500 -z-10'></div>
        <div className='absolute top-0 left-0 shadow-md rounded-tl-lg rounded-bl-lg w-6/12 h-full origin-right bg-gradient-to-r from-cyan-500 to-blue-500 rotate-180'></div>
        <div id='book' className='relative flex w-full h-full'>
          <div
            id='book-pagePage-left'
            className='absolute h-full w-6/12 flex bg-gradient-to-r from-slate-50 to-slate-300 shadow-lg p-[2rem]'
          >
            <div
              id='profile-page'
              className='flex flex-col justify-center items-center'
            >
              <img
                src={image}
                alt=''
                className='mb-4 max-w-[180px] rounded-full mx-auto border-4 border-cyan-500'
              />
              <h1 className='text-gray-800 text-4xl font-bold'>
                Mohsen Kazemi
              </h1>
              <h3 className='mb-4 text-2xl font-bold text-cyan-500'>
                Web Developer
              </h3>
              <div className='mb-4'>
                <a
                  href='#'
                  className='inline-flex h-10 w-10 mx-1 bg-transparent border-2 border-cyan-500 justify-center items-center rounded-full '
                >
                  <box-icon
                    name='facebook'
                    type='logo'
                    color='#06b5d4'
                  ></box-icon>
                </a>
                <a
                  href='#'
                  className='inline-flex h-10 w-10 mx-1 bg-transparent border-2 border-cyan-500 justify-center items-center rounded-full'
                >
                  <box-icon
                    name='twitter'
                    type='logo'
                    color='#06b5d4'
                  ></box-icon>
                </a>
                <a
                  href='#'
                  className='inline-flex h-10 w-10 mx-1 bg-transparent border-2 border-cyan-500 justify-center items-center rounded-full'
                >
                  <box-icon
                    name='linkedin'
                    type='logo'
                    color='#06b5d4'
                  ></box-icon>
                </a>
                <a
                  href='#'
                  className='inline-flex h-10 w-10 mx-1 bg-transparent border-2 border-cyan-500 justify-center items-center rounded-full'
                >
                  <box-icon
                    name='instagram-alt'
                    type='logo'
                    color='#06b5d4'
                  ></box-icon>
                </a>
              </div>
              <p className='text-gray-800 text-justify mb-4'>
                Hi I am Mohsen Kazemi a Web Developer. Skilled React Developer,
                focused on user-centric, responsive web solutions. Adept in
                JavaScript and React, passionate about innovation and
                collaborative growth.
              </p>
              <div className='w-full flex justify-evenly my-auto'>
                <button className='bg-cyan-500 shadow-sm border-2 border-cyan-500 hover:bg-white hover:text-cyan-500'>
                  Download CV
                </button>
                <button className='bg-cyan-500 shadow-sm border-2 border-cyan-500 hover:bg-white hover:text-cyan-500'>
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div
            id='turn-1'
            className='absolute h-full w-6/12 flex bg-slate-50 shadow-lg p-[2rem] right-0 transform-style-3d'
          >
            <div
              id='page-front'
              className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-50 to-slate-300 rotate-y-0 translate-z-1 py-6 px-8'
            >
              <h1 id='title' className='text-gray-800 text-4xl font-bold mb-8'>
                Work Experience
              </h1>
              <div
                id='workeduc-box'
                className='flex flex-col h-fit gap-5 border-l-[3px] border-cyan-500'
              >
                <div
                  id='workeduc-content'
                  className='text-left relative pl-6 before:content-[""] before:absolute before:-top-[0.1rem] before:w-7 before:h-7 before:rounded-full before:bg-cyan-500 before:-left-[0.968rem]'
                >
                  <box-icon
                    size='sm'
                    name='calendar'
                    type='solid'
                    color='#06b5d4'
                  ></box-icon>
                  <span className='text-cyan-500 ml-1 align-top text-xl font-semibold'>
                    2020 - 2021
                  </span>
                  <h3 className='text-gray-800 font-bold'>Web Developer</h3>
                  <p className='text-gray-800 text-justify'>
                    dar modat sarbazi dar in time dar khane mashghule yadgiri
                    react budam va dar kenar oon react redux ro yad gereftam
                    bedardam nakhord raftam reduxtoolkit yad gereftam
                  </p>
                </div>
                <div
                  id='workeduc-content'
                  className='text-left relative pl-6 before:content-[""] before:absolute before:top-[0.1rem] before:w-7 before:h-7 before:rounded-full before:bg-cyan-500 before:-left-[0.968rem]'
                >
                  <box-icon
                    name='calendar'
                    type='solid'
                    color='#06b5d4'
                  ></box-icon>
                  <span className='text-cyan-500 ml-1 align-top text-xl font-semibold'>
                    2020 - 2021
                  </span>
                  <h3 className='text-gray-800 font-bold'>Web Developer</h3>
                  <p className='text-gray-800 text-justify'>
                    dar modat sarbazi dar in time dar khane mashghule yadgiri
                    react budam va dar kenar oon react redux ro yad gereftam
                    bedardam nakhord raftam reduxtoolkit yad gereftam
                  </p>
                </div>
                <div
                  id='workeduc-content'
                  className='text-left relative pl-6 before:content-[""] before:absolute before:top-[0.1rem] before:w-7 before:h-7 before:rounded-full before:bg-cyan-500 before:-left-[0.968rem]'
                >
                  <box-icon
                    name='calendar'
                    type='solid'
                    color='#06b5d4'
                  ></box-icon>
                  <span className='text-cyan-500 ml-1 align-top text-xl font-semibold'>
                    2020 - 2021
                  </span>
                  <h3 className='text-gray-800 font-bold'>Web Developer</h3>
                  <p className='text-gray-800 text-justify'>
                    dar modat sarbazi dar in time dar khane mashghule yadgiri
                    react budam va dar kenar oon react redux ro yad gereftam
                    bedardam nakhord raftam reduxtoolkit yad gereftam
                  </p>
                </div>
              </div>
              <span
                id='number-page'
                className='text-gray-800 absolute bottom-[1.2rem] -translate-x-1/2'
              >
                1
              </span>
              <span
                id='nextprev-btn'
                className='absolute w-6 h-6 bottom-4 right-6 cursor-pointer justify-center items-center inline-flex'
                data-page='turn-1'
              >
                <box-icon name='chevron-right' color='#1f2937'></box-icon>
              </span>
            </div>
            <div
              id='page-back'
              className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-50 to-slate-300 rotate-y-180 translate-z-px  py-6 px-8'
            >
              <h1 id='title' className='text-gray-800 text-4xl font-bold mb-4'>
                Education
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
