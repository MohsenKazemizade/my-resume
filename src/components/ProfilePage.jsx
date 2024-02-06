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
          className='inline-flex h-10 w-10 mx-1 bg-transparent border-2 border-yellow-500 justify-center items-center rounded-full '
        >
          <box-icon name='facebook' type='logo' color='#eab308'></box-icon>
        </a>
        <a
          href='#'
          className='inline-flex h-10 w-10 mx-1 bg-transparent border-2 border-yellow-500 justify-center items-center rounded-full'
        >
          <box-icon name='twitter' type='logo' color='#eab308'></box-icon>
        </a>
        <a
          href='#'
          className='inline-flex h-10 w-10 mx-1 bg-transparent border-2 border-yellow-500 justify-center items-center rounded-full'
        >
          <box-icon name='linkedin' type='logo' color='#eab308'></box-icon>
        </a>
        <a
          href='#'
          className='inline-flex h-10 w-10 mx-1 bg-transparent border-2 border-yellow-500 justify-center items-center rounded-full'
        >
          <box-icon name='instagram-alt' type='logo' color='#eab308'></box-icon>
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
