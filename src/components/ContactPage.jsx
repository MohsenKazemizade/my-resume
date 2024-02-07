import React from 'react';
import { useState } from 'react';

const ContactMe = ({ backToProfilePage, previousPage }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleFullNameChange = e => {
    let newfullname = e.target.value;
    setFullName(newfullname);
  };
  const handleEmailChange = e => {
    let newEmail = e.target.value;
    setEmail(newEmail);
  };
  const handleMsgChange = e => {
    let newMsg = e.target.value;
    setMsg(newMsg);
  };
  const handleSend = () => {
    setFullName('');
    setEmail('');
    setMsg('');
  };
  return (
    <div
      id='page-back3'
      className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-700 to-slate-950 rotate-y-180 -translate-z-px py-6 px-8'
    >
      <h1 id='title' className='text-gray-200 text-4xl font-bold mb-4'>
        Contact Me
      </h1>
      <div id='skills-box' className='flex flex-wrap gap-6'>
        <div className='relative  w-full mt-6'>
          <input
            type='text'
            value={fullName}
            onChange={handleFullNameChange}
            className={`peer text-md w-full h-10 bg-transparent duration-150 ease-linear outline-none pl-2  focus:border-yellow-500 ' ${
              fullName.length === 0
                ? 'border-b-2'
                : 'border-b-2 border-yellow-500'
            } `}
          />
          <label
            className={`absolute translate-y-0 duration-100 ease-linear left-0 pt-1 pl-1 peer-focus-within:text-sm peer-focus-within:-translate-y-5 peer-focus-within:text-yellow-500 ${
              fullName.length === 0
                ? 'font-bold'
                : ' font-bold text-sm -translate-y-5 text-yellow-500'
            } `}
            // className='absolute translate-y-0 duration-100 ease-linear font-bold left-0 mt-1 '
          >
            Full Name
          </label>
          <div className='relative mt-10'>
            <input
              type='email'
              value={email}
              onChange={handleEmailChange}
              className={`peer text-md w-full h-10 bg-transparent duration-150 ease-linear outline-none pl-2 focus:border-b-2 focus:border-yellow-500 ' ${
                email.length === 0
                  ? 'border-b-2'
                  : 'border-b-2 border-yellow-500'
              } `}
            />
            <label
              className={`absolute translate-y-0 duration-100 ease-linear left-0 pt-1 pl-1 peer-focus-within:text-sm peer-focus-within:-translate-y-5 peer-focus-within:text-yellow-500 ${
                email.length === 0
                  ? 'font-bold'
                  : ' font-bold text-sm -translate-y-5 text-yellow-500'
              } `}
              // className='absolute translate-y-0 duration-100 ease-linear font-bold left-0 mt-1 '
            >
              Email Address
            </label>
          </div>
          <div className='relative mt-10'>
            <textarea
              value={msg}
              rows={6}
              maxLength={255}
              onChange={handleMsgChange}
              className={`peer pt-4 text-left text-md w-full bg-transparent duration-150 ease-linear outline-none pl-2 focus:border-b-2 focus:border-yellow-500 ' ${
                msg.length === 0 ? 'border-b-2' : 'border-b-2 border-yellow-500'
              } `}
            ></textarea>

            <label
              className={`absolute translate-y-0 duration-100 ease-linear left-0 pt-1 pl-1 peer-focus-within:text-sm peer-focus-within:-translate-y-5 peer-focus-within:text-yellow-500 ${
                msg.length === 0
                  ? 'font-bold'
                  : ' font-bold text-sm -translate-y-5 text-yellow-500'
              } `}
              // className='absolute translate-y-0 duration-100 ease-linear font-bold left-0 mt-1 '
            >
              Tell me what is it in you mind...
            </label>
          </div>
        </div>
        <div>
          <button
            onClick={handleSend}
            className='h-10 py-0 text-sm bg-transparent shadow-sm border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-800 hover:border-yellow-500 text-yellow-500 transition duration-300 ease-in-out'
          >
            SEND
          </button>
        </div>
      </div>
      <span
        id='number-page'
        className='text-gray-200 absolute bottom-[1.2rem] -translate-x-1/2'
      >
        6
      </span>
      <span
        onClick={previousPage}
        className='absolute w-6 h-6 bottom-4 left-6 cursor-pointer justify-center items-center inline-flex nextprev-btn'
        data-page='turn-3'
      >
        <box-icon name='chevron-left' color='#e5e7eb'></box-icon>
      </span>
      <div
        onClick={backToProfilePage}
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
        </span>
        <p className='absolute opacity-0 transition-transform duration-500 group-hover:opacity-100 ease-out group-hover:-translate-y-9 group-hover:text-yellow-500'>
          Profile
        </p>
      </div>
    </div>
  );
};

export default ContactMe;
