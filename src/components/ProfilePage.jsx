import React from 'react';
import image from '../assets/photo_2024-01-28_15-49-04.jpg';

const ProfilePage = ({ goToContactPage }) => {
  return (
    <div
      id='profile-page'
      className='flex flex-col justify-center items-center'
    >
      <img
        src={image}
        alt=''
        className='mb-4 max-w-[180px] rounded-full mx-auto border-4 border-yellow-500'
      />
      <h1 className='text-gray-200 text-4xl font-bold'>Mohsen Kazemi</h1>
      <h3 className='mb-4 text-2xl font-bold text-yellow-500'>Web Developer</h3>
      <div id='social-media' className='mb-4'>
        <a
          href='#'
          className='fill-yellow-500 hover:fill-gray-800 hover:bg-yellow-500 duration-300 inline-flex h-10 w-10 mx-1 bg-transparent border-2 border-yellow-500 justify-center items-center rounded-full '
        >
          <svg width='24px' height='24px' viewBox='0 0 24 24' id='github'>
            <path
              d='M20.116 5.901a3.883 3.883 0 0 0-.26-.31 4.413 4.413 0 0 0 .21-.76 5.284 5.284 0 0 0-.35-2.8s-1.12-.35-3.69 1.38a12.477 12.477 0 0 0-3.35-.45 12.604 12.604 0 0 0-3.36.45c-2.57-1.75-3.69-1.38-3.69-1.38a5.263 5.263 0 0 0-.35 2.77 4.21 4.21 0 0 0 .22.79c-.09.1-.18.21-.26.31a5.14 5.14 0 0 0-1.12 3.3 7.686 7.686 0 0 0 .04.85c.32 4.43 3.27 5.46 6.08 5.78a2.558 2.558 0 0 0-.77 1.39 4.022 4.022 0 0 0-.13 1.09v1.31c-1.119.1-2.267-.063-2.623-1.061a5.695 5.695 0 0 0-1.834-2.413 1.179 1.179 0 0 1-.17-.112 1.001 1.001 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.003.812.81 1.337 1.143 1.515a4.466 4.466 0 0 1 .923 1.359c.364 1.023 1.429 2.578 4.466 2.376l.002.098.004.268a1 1 0 0 0 1 1H15.026a1 1 0 0 0 1-1s.008-3.16.008-3.69a4.024 4.024 0 0 0-.13-1.09l-.002-.006.004.006c-.009-.035-.022-.063-.032-.097a2.532 2.532 0 0 0-.74-1.293l.012.021-.02-.02c2.81-.32 5.74-1.37 6.06-5.78a7.687 7.687 0 0 0 .04-.85 5.23 5.23 0 0 0-1.11-3.3Z'
              data-name='Brand Logos'
            ></path>
          </svg>
        </a>
        <a
          href='#'
          className='fill-yellow-500 hover:fill-gray-800 hover:bg-yellow-500 duration-300 inline-flex h-10 w-10 mx-1 bg-transparent border-2 border-yellow-500 justify-center items-center rounded-full cursor-pointer'
        >
          <svg width='24px' height='24px' viewBox='0 0 30 30'>
            <path d='M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z'></path>
          </svg>
        </a>
        <a
          href='#'
          className='fill-yellow-500 hover:fill-gray-800 hover:bg-yellow-500 duration-300 inline-flex h-10 w-10 mx-1 bg-transparent border-2 border-yellow-500 justify-center items-center rounded-full'
        >
          <svg width='24px' height='24px' viewBox='0 0 30 30'>
            <path d='M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z'></path>
          </svg>
        </a>
        <a
          href='#'
          className='fill-yellow-500 hover:fill-gray-800 hover:bg-yellow-500 duration-300 inline-flex h-10 w-10 mx-1 bg-transparent border-2 border-yellow-500 justify-center items-center rounded-full cursor-pointer'
        >
          <svg width='24px' height='24px' viewBox='0 0 64 64'>
            <path d='M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z'></path>
          </svg>
        </a>
      </div>
      <p className='text-gray-200 text-left mb-4'>
        Hi I am Mohsen Kazemi a Web Developer. Skilled React Developer, focused
        on user-centric, responsive web solutions. Adept in JavaScript and
        React, passionate about innovation and collaborative growth.
      </p>
      <div className='w-full flex justify-evenly my-auto'>
        <button className='bg-yellow-500 shadow-sm border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500 transition duration-300 ease-in-out text-gray-800'>
          Download CV
        </button>
        <button
          onClick={goToContactPage}
          className='bg-transparent shadow-sm border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-800 transition duration-300 ease-in-out text-yellow-500'
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
