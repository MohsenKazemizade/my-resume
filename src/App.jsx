import { useState } from 'react';
import image from './assets/photo_2024-01-28_15-49-04.jpg';
import { SliderLatestvWorks } from './components/SliderPrevWorks';
import 'boxicons';
import './App.css';
import ContactMe from './components/ContactMe';

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
  const backToProfile = () => {
    setTimeout(() => {
      let num = pageCount - 1;
      setPageCount(num);
      setTimeout(() => {
        let num = pageCount - 2;
        setPageCount(num);
        setTimeout(() => {
          let num = pageCount - 3;
          setPageCount(num);
        }, 100);
      }, 150);
    }, 200);
  };
  const goToContactMe = () => {
    setTimeout(() => {
      let num = pageCount + 1;
      setPageCount(num);
      setTimeout(() => {
        let num = pageCount + 2;
        setPageCount(num);
        setTimeout(() => {
          let num = pageCount + 3;
          setPageCount(num);
        }, 100);
      }, 150);
    }, 200);
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
              <p className='text-gray-200 text-left mb-4'>
                Hi I am Mohsen Kazemi a Web Developer. Skilled React Developer,
                focused on user-centric, responsive web solutions. Adept in
                JavaScript and React, passionate about innovation and
                collaborative growth.
              </p>
              <div className='w-full flex justify-evenly my-auto'>
                <button className='bg-yellow-500 shadow-sm border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500 transition duration-300 ease-in-out text-gray-800'>
                  Download CV
                </button>
                <button
                  onClick={goToContactMe}
                  className='bg-transparent shadow-sm border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-800 transition duration-300 ease-in-out text-yellow-500'
                >
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
                  <p className='text-gray-200 text-start'>
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
                  <p className='text-gray-200 text-start'>
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
                  <p className='text-gray-200 text-start'>
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
                  <p className='text-gray-200 text-start'>
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
                  <p className='text-gray-200 text-start'>
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
                  <p className='text-gray-200 text-start'>
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
                  <h3 className='text-gray-200 font-bold'>
                    Tailwind Css Master
                  </h3>
                  <p className='text-gray-200 text-sm m-2'>
                    Tailwind CSS is the only framework that I've seen scale on
                    large teams.
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
                    React lets you build user interfaces out of individual
                    pieces.
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
                  <h3 className='text-gray-200 font-bold'>
                    Javascript Developer
                  </h3>
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
              <h1 className='text-gray-200 text-4xl font-bold mb-6'>
                Latest Projects
              </h1>
              <SliderLatestvWorks />
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
                Contact Me
              </h1>
              <ContactMe />
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
              <div
                onClick={backToProfile}
                className='group absolute w-10 h-10 bottom-4 right-6 cursor-pointer justify-center items-center inline-flex nextprev-btn rounded border-2 border-yellow-500 hover:bg-yellow-500 hover:border-yellow-500'
              >
                <span className=' fill-yellow-500 group-hover:fill-gray-900 '>
                  <svg width='24px' height='24px' viewBox='0 0 24 24'>
                    <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      <g id='style=fill'>
                        <g id='profile'>
                          <path
                            id='vector (Stroke)'
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M6.75 6.5C6.75 3.6005 9.1005 1.25 12 1.25C14.8995 1.25 17.25 3.6005 17.25 6.5C17.25 9.3995 14.8995 11.75 12 11.75C9.1005 11.75 6.75 9.3995 6.75 6.5Z'
                          ></path>
                          <path
                            id='rec (Stroke)'
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M4.25 18.5714C4.25 15.6325 6.63249 13.25 9.57143 13.25H14.4286C17.3675 13.25 19.75 15.6325 19.75 18.5714C19.75 20.8792 17.8792 22.75 15.5714 22.75H8.42857C6.12081 22.75 4.25 20.8792 4.25 18.5714Z'
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  {/* <svg width='40px' height='40px' viewBox='0 0 24 24'>
                    <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      <path d='M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z'></path>
                      <path d='M12 6.92969C9.93 6.92969 8.25 8.60969 8.25 10.6797C8.25 12.7097 9.84 14.3597 11.95 14.4197C11.98 14.4197 12.02 14.4197 12.04 14.4197C12.06 14.4197 12.09 14.4197 12.11 14.4197C12.12 14.4197 12.13 14.4197 12.13 14.4197C14.15 14.3497 15.74 12.7097 15.75 10.6797C15.75 8.60969 14.07 6.92969 12 6.92969Z'></path>
                    </g>
                  </svg> */}
                </span>
                <p className='absolute opacity-0 transition-transform duration-500 group-hover:opacity-100 ease-out group-hover:-translate-y-9 group-hover:text-yellow-500'>
                  Profile
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
