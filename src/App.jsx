import { useState } from 'react';
import image from './assets/photo_2024-01-28_15-49-04.jpg';
import 'boxicons';
import './App.css';

function App() {
  const [pageCount, setPageCount] = useState(1);

  const onNextPage = () => {
    let num = pageCount;
    if (pageCount == 4) return;
    setPageCount(num + 1);
  };
  const onPrevusPage = () => {
    let num = pageCount;
    if (pageCount == 1) return;
    setPageCount(num - 1);
  };
  const turnOnePageOne = pageCount == 1 ? 'z-30' : '';
  const turnTwoPageOne = pageCount == 2 ? '-rotate-y-180 z-20' : '';
  const turnThreePageOne = pageCount == 3 ? '-rotate-y-180 z-10' : '';
  const turnFourPageOne = pageCount == 4 ? '-rotate-y-180 z-10' : '';
  const turnOnePageTwo = pageCount == 1 ? 'z-20' : '';
  const turnTwoPageTwo = pageCount == 2 ? 'z-30' : '';
  const turnThreePageTwo = pageCount == 3 ? '-rotate-y-180 z-20' : '';
  const turnFourPageTwo = pageCount == 4 ? '-rotate-y-180 z-20' : '';
  const turnOnePageThree = pageCount == 1 ? 'z-10' : '';
  const turnTwoPageThree = pageCount == 2 ? 'z-10' : '';
  const turnThreePageThree = pageCount == 3 ? 'z-30' : '';
  const turnFourPageThree = pageCount == 4 ? '-rotate-y-180 z-30' : '';

  return (
    <>
      <div id='wrapper' className='relative w-[66rem] h-[45rem] p-[2rem]'>
        <div
          id='cover cover-left'
          className='absolute shadow-md rounded-tl-lg rounded-bl-lg w-6/12 h-full origin-right bg-gradient-to-r from-yellow-600 to-yellow-500 top-0 left-0 cover-left'
        ></div>
        <div
          id='cover cover-right turn'
          className='absolute shadow-md rounded-tl-lg rounded-bl-lg w-6/12 h-full origin-right bg-gradient-to-r from-yellow-600 to-yellow-500 rotate-y-180 top-0 left-0'
        ></div>
        <div
          id='book'
          className='relative flex w-full h-full perspective-[250rem]'
        >
          <div
            id='book-page page-left'
            className='absolute h-full w-6/12 flex bg-gradient-to-r from-slate-700 to-slate-950 shadow-lg p-[2rem]'
          >
            <div
              id='profile-page'
              className='flex flex-col justify-center items-center'
            >
              <img
                src={image}
                alt=''
                className='mb-4 max-w-[180px] rounded-full mx-auto border-4 border-yellow-500'
              />
              <h1 className='text-gray-200 text-4xl font-bold'>
                Mohsen Kazemi
              </h1>
              <h3 className='mb-4 text-2xl font-bold text-yellow-500'>
                Web Developer
              </h3>
              <div id='social-media' className='mb-4'>
                <a
                  href='#'
                  className='inline-flex h-10 w-10 mx-1 bg-transparent border-2 border-yellow-500 justify-center items-center rounded-full '
                >
                  <box-icon
                    name='facebook'
                    type='logo'
                    color='#eab308'
                  ></box-icon>
                </a>
                <a
                  href='#'
                  className='inline-flex h-10 w-10 mx-1 bg-transparent border-2 border-yellow-500 justify-center items-center rounded-full'
                >
                  <box-icon
                    name='twitter'
                    type='logo'
                    color='#eab308'
                  ></box-icon>
                </a>
                <a
                  href='#'
                  className='inline-flex h-10 w-10 mx-1 bg-transparent border-2 border-yellow-500 justify-center items-center rounded-full'
                >
                  <box-icon
                    name='linkedin'
                    type='logo'
                    color='#eab308'
                  ></box-icon>
                </a>
                <a
                  href='#'
                  className='inline-flex h-10 w-10 mx-1 bg-transparent border-2 border-yellow-500 justify-center items-center rounded-full'
                >
                  <box-icon
                    name='instagram-alt'
                    type='logo'
                    color='#eab308'
                  ></box-icon>
                </a>
              </div>
              <p className='text-gray-200 text-justify mb-4'>
                Hi I am Mohsen Kazemi a Web Developer. Skilled React Developer,
                focused on user-centric, responsive web solutions. Adept in
                JavaScript and React, passionate about innovation and
                collaborative growth.
              </p>
              <div className='w-full flex justify-evenly my-auto'>
                <button className='bg-yellow-500 shadow-sm border-2 border-yellow-500 hover:bg-gray-600 hover:text-yellow-500 transition duration-300 ease-in-out text-gray-600'>
                  Download CV
                </button>
                <button className='bg-yellow-500 shadow-sm border-2 border-yellow-500 hover:bg-gray-600 hover:text-yellow-500 transition duration-300 ease-in-out text-gray-600'>
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div
            id='turn-1'
            className={`absolute h-full w-6/12 flex shadow-lg p-[2rem] right-0 transform-style-3d origin-left duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)] ${turnOnePageOne}${turnTwoPageOne}${turnThreePageOne}${turnFourPageOne}`}
          >
            <div
              id='page-front'
              className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-700 to-slate-950 py-6 px-8 pageFront'
              // className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-700 to-slate-950 rotate-y-0 py-6 px-8 translate-z-0.5'
            >
              <h1 className='text-gray-200 text-4xl font-bold mb-8'>
                Work Experience
              </h1>
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
                  <p className='text-gray-200 text-justify'>
                    dar modat sarbazi dar in time dar khane mashghule yadgiri
                    react budam va dar kenar oon react redux ro yad gereftam
                    bedardam nakhord raftam reduxtoolkit yad gereftam
                  </p>
                </div>
                <div
                  id='workeduc-content'
                  className='text-left relative pl-6 before:content-[""] before:absolute before:top-[0.1rem] before:w-7 before:h-7 before:rounded-full before:bg-yellow-500 before:-left-[0.968rem]'
                >
                  <box-icon
                    name='calendar'
                    type='solid'
                    color='#eab308'
                  ></box-icon>
                  <span className='text-yellow-500 ml-1 align-top text-xl font-semibold'>
                    2020 - 2021
                  </span>
                  <h3 className='text-gray-200 font-bold'>Web Developer</h3>
                  <p className='text-gray-200 text-justify'>
                    dar modat sarbazi dar in time dar khane mashghule yadgiri
                    react budam va dar kenar oon react redux ro yad gereftam
                    bedardam nakhord raftam reduxtoolkit yad gereftam
                  </p>
                </div>
                <div
                  id='workeduc-content'
                  className='text-left relative pl-6 before:content-[""] before:absolute before:top-[0.1rem] before:w-7 before:h-7 before:rounded-full before:bg-yellow-500 before:-left-[0.968rem]'
                >
                  <box-icon
                    name='calendar'
                    type='solid'
                    color='#eab308'
                  ></box-icon>
                  <span className='text-yellow-500 ml-1 align-top text-xl font-semibold'>
                    2020 - 2021
                  </span>
                  <h3 className='text-gray-200 font-bold'>Web Developer</h3>
                  <p className='text-gray-200 text-justify'>
                    dar modat sarbazi dar in time dar khane mashghule yadgiri
                    react budam va dar kenar oon react redux ro yad gereftam
                    bedardam nakhord raftam reduxtoolkit yad gereftam
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
                onClick={onNextPage}
                className='absolute w-6 h-6 bottom-4 right-6 cursor-pointer justify-center items-center inline-flex nextprev-btn'
                data-page='turn-1'
              >
                <box-icon name='chevron-right' color='#e5e7eb'></box-icon>
              </span>
            </div>
            <div
              id='page-back'
              className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-700 to-slate-950 rotate-y-180 py-6 px-8 pageBack'
              // className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-700 to-slate-950 rotate-y-180 py-6 px-8 -translate-z-px'
            >
              <h1 id='title' className='text-gray-200 text-4xl font-bold mb-4'>
                Education
              </h1>
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
                  <p className='text-gray-200 text-justify'>
                    dar modat sarbazi dar in time dar khane mashghule yadgiri
                    react budam va dar kenar oon react redux ro yad gereftam
                    bedardam nakhord raftam reduxtoolkit yad gereftam
                  </p>
                </div>
                <div
                  id='workeduc-content'
                  className='text-left relative pl-6 before:content-[""] before:absolute before:top-[0.1rem] before:w-7 before:h-7 before:rounded-full before:bg-yellow-500 before:-left-[0.968rem]'
                >
                  <box-icon
                    name='calendar'
                    type='solid'
                    color='#eab308'
                  ></box-icon>
                  <span className='text-yellow-500 ml-1 align-top text-xl font-semibold'>
                    2020 - 2021
                  </span>
                  <h3 className='text-gray-200 font-bold'>Web Developer</h3>
                  <p className='text-gray-200 text-justify'>
                    dar modat sarbazi dar in time dar khane mashghule yadgiri
                    react budam va dar kenar oon react redux ro yad gereftam
                    bedardam nakhord raftam reduxtoolkit yad gereftam
                  </p>
                </div>
                <div
                  id='workeduc-content'
                  className='text-left relative pl-6 before:content-[""] before:absolute before:top-[0.1rem] before:w-7 before:h-7 before:rounded-full before:bg-yellow-500 before:-left-[0.968rem]'
                >
                  <box-icon
                    name='calendar'
                    type='solid'
                    color='#eab308'
                  ></box-icon>
                  <span className='text-yellow-500 ml-1 align-top text-xl font-semibold'>
                    2020 - 2021
                  </span>
                  <h3 className='text-gray-200 font-bold'>Web Developer</h3>
                  <p className='text-gray-200 text-justify'>
                    dar modat sarbazi dar in time dar khane mashghule yadgiri
                    react budam va dar kenar oon react redux ro yad gereftam
                    bedardam nakhord raftam reduxtoolkit yad gereftam
                  </p>
                </div>
              </div>
              <span
                id='number-page'
                className='text-gray-200 absolute bottom-[1.2rem] -translate-x-1/2'
              >
                2
              </span>
              <span
                onClick={onPrevusPage}
                className='absolute w-6 h-6 bottom-4 left-6 cursor-pointer justify-center items-center inline-flex nextprev-btn'
                data-page='turn-1'
              >
                <box-icon name='chevron-left' color='#e5e7eb'></box-icon>
              </span>
            </div>
          </div>
          <div
            id='turn-2'
            className={`absolute h-full w-6/12 flex shadow-lg p-[2rem] right-0 transform-style-3d origin-left duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)] ${turnOnePageTwo}${turnTwoPageTwo}${turnThreePageTwo}${turnFourPageTwo}`}
          >
            <div
              id='page-front2'
              className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-700 to-slate-950 py-6 px-8 pageFront'
              // className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-700 to-slate-950 py-6 px-8 rotate-y-0 translate-z-px'
            >
              <h1 className='text-gray-200 text-4xl font-bold mb-8'>
                My Services
              </h1>
              <div id='services-box' className='flex flex-wrap gap-6'>
                <div
                  id='services-content'
                  className='services-content justify-center items-center text-center border-2 border-yellow-500 hover:shadow-yellow-500 p-4 shadow-sm rounded hover:shadow-lg transition duration-300 ease-in-out'
                >
                  <box-icon
                    size='lg'
                    name='code-alt'
                    color='#eab308'
                  ></box-icon>
                  <h3 className='text-gray-200 font-bold'>Web Development</h3>
                  <p className='text-gray-200 text-sm m-2'>
                    i am a good developer acording to my self and yes i am
                    selfish
                  </p>
                  <button className='h-10 py-0 bg-yellow-500 shadow-sm border-2 border-yellow-500 hover:bg-gray-600 hover:text-yellow-500 text-gray-600 transition duration-300 ease-in-out'>
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
                  <h3 className='text-gray-200 font-bold'>
                    Tailwind Css Master
                  </h3>
                  <p className='text-gray-200 text-sm m-2'>
                    Tailwind CSS is the only framework that I've seen scale on
                    large teams.
                  </p>
                  <button className='h-10 py-0 bg-yellow-500 shadow-sm border-2 border-yellow-500 hover:bg-gray-600 hover:text-yellow-500 text-gray-600 transition duration-300 ease-in-out'>
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
                    React lets you build user interfaces out of individual
                    pieces.
                  </p>
                  <button className='h-10 py-0 bg-yellow-500 shadow-sm border-2 border-yellow-500 hover:bg-gray-600 hover:text-yellow-500 text-gray-600 transition duration-300 ease-in-out'>
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
                  <h3 className='text-gray-200 font-bold'>
                    Javascript Developer
                  </h3>
                  <p className='text-gray-200 text-sm m-2'>
                    JavaScript is a lightweight interpreted programming language
                  </p>
                  <button className='h-10 py-0 bg-yellow-500 shadow-sm border-2 border-yellow-500 hover:bg-gray-600 hover:text-yellow-500 text-gray-600 transition duration-300 ease-in-out'>
                    Read More
                  </button>
                </div>
              </div>
              <span className='text-gray-200 absolute bottom-[1.2rem] -translate-x-1/2'>
                3
              </span>
              <span
                onClick={onNextPage}
                className='absolute w-6 h-6 bottom-4 right-6 cursor-pointer justify-center items-center inline-flex nextprev-btn'
                data-page='turn-2'
              >
                <box-icon name='chevron-right' color='#e5e7eb'></box-icon>{' '}
              </span>
            </div>
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
                onClick={onPrevusPage}
                className='absolute w-6 h-6 bottom-4 left-6 cursor-pointer justify-center items-center inline-flex nextprev-btn'
                data-page='turn-2'
              >
                <box-icon name='chevron-left' color='#e5e7eb'></box-icon>
              </span>
            </div>
          </div>
          <div
            id='turn-3'
            className={`absolute h-full w-6/12 flex shadow-lg p-[2rem] right-0 transform-style-3d origin-left duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)] ${turnOnePageThree}${turnTwoPageThree}${turnThreePageThree}${turnFourPageThree}`}
          >
            <div
              id='page-front3'
              className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-700 to-slate-950 rotate-y-0 translate-z-px py-6 px-8'
            >
              <h1 className='text-gray-200 text-4xl font-bold mb-8'>
                page-front3
              </h1>
              <div id='services-box' className='flex flex-wrap gap-6'>
                <div
                  id='services-content'
                  className='services-content justify-center items-center text-center border-2 border-yellow-500 hover:shadow-yellow-500 p-4 shadow-sm rounded hover:shadow-lg transition duration-300 ease-in-out'
                >
                  <box-icon
                    size='lg'
                    name='code-alt'
                    color='#eab308'
                  ></box-icon>
                  <h3 className='text-gray-200 font-bold'>Web Development</h3>
                  <p className='text-gray-200 text-sm m-2'>
                    i am a good developer acording to my self and yes i am
                    selfish
                  </p>
                  <button className='h-10 py-0 bg-yellow-500 shadow-sm border-2 border-yellow-500 hover:bg-gray-600 hover:text-yellow-500 text-gray-600 transition duration-300 ease-in-out'>
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
                  <h3 className='text-gray-200 font-bold'>
                    Tailwind Css Master
                  </h3>
                  <p className='text-gray-200 text-sm m-2'>
                    Tailwind CSS is the only framework that I've seen scale on
                    large teams.
                  </p>
                  <button className='h-10 py-0 bg-yellow-500 shadow-sm border-2 border-yellow-500 hover:bg-gray-600 hover:text-yellow-500 text-gray-600 transition duration-300 ease-in-out'>
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
                    React lets you build user interfaces out of individual
                    pieces.
                  </p>
                  <button className='h-10 py-0 bg-yellow-500 shadow-sm border-2 border-yellow-500 hover:bg-gray-600 hover:text-yellow-500 text-gray-600 transition duration-300 ease-in-out'>
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
                  <h3 className='text-gray-200 font-bold'>
                    Javascript Developer
                  </h3>
                  <p className='text-gray-200 text-sm m-2'>
                    JavaScript is a lightweight interpreted programming language
                  </p>
                  <button className='h-10 py-0 bg-yellow-500 shadow-sm border-2 border-yellow-500 hover:bg-gray-600 hover:text-yellow-500 text-gray-600 transition duration-300 ease-in-out'>
                    Read More
                  </button>
                </div>
              </div>
              <span className='text-gray-200 absolute bottom-[1.2rem] -translate-x-1/2'>
                5
              </span>
              <span
                onClick={onNextPage}
                className='absolute w-6 h-6 bottom-4 right-6 cursor-pointer justify-center items-center inline-flex nextprev-btn'
                data-page='turn-2'
              >
                <box-icon name='chevron-right' color='#e5e7eb'></box-icon>{' '}
              </span>
            </div>
            <div
              id='page-back3'
              className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-700 to-slate-950 rotate-y-180 -translate-z-px py-6 px-8'
            >
              <h1 id='title' className='text-gray-200 text-4xl font-bold mb-4'>
                page-back3
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
                6
              </span>
              <span
                onClick={onPrevusPage}
                className='absolute w-6 h-6 bottom-4 left-6 cursor-pointer justify-center items-center inline-flex nextprev-btn'
                data-page='turn-3'
              >
                <box-icon name='chevron-left' color='#e5e7eb'></box-icon>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
