import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = ({ backToProfilePage, previousPage }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm('service_wfm6fts', 'template_jxouvbo', form.current, {
        publicKey: 'LUNcmCY5SVymHR3Dh',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        error => {
          console.log('FAILED...', error.text);
        }
      );

    setFullName('');
    setEmail('');
    setMsg('');
  };

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
  // const handleSend = () => {
  //   setFullName('');
  //   setEmail('');
  //   setMsg('');
  // };
  return (
    <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-700 to-slate-950 rotate-y-180 -translate-z-px py-6 px-8'>
      <h1 className='text-gray-200 text-4xl font-bold mb-4'>Contact Me</h1>
      <div className='flex flex-wrap gap-6'>
        <form ref={form} onSubmit={sendEmail} className='relative  w-full mt-6'>
          <input
            type='text'
            value={fullName}
            name='user_name'
            onChange={handleFullNameChange}
            className={`peer/name mb-10 text-md w-full h-10 bg-transparent duration-150 ease-linear outline-none pl-2  focus:border-yellow-500 ' ${
              fullName.length === 0
                ? 'border-b-2'
                : 'border-b-2 border-yellow-500'
            } `}
          />
          <label
            className={`absolute translate-y-0 duration-100 ease-linear left-0 pt-1 pl-1 peer-focus-within/name:text-sm peer-focus-within/name:-translate-y-3.5 peer-focus-within/name:text-yellow-500 ${
              fullName.length === 0
                ? 'font-bold'
                : ' font-bold text-sm -translate-y-3.5 text-yellow-500'
            } `}
          >
            Full Name
          </label>

          <input
            type='email'
            value={email}
            name='user_email'
            onChange={handleEmailChange}
            className={`peer/email mb-10 text-md w-full h-10 bg-transparent duration-150 ease-linear outline-none pl-2 focus:border-b-2 focus:border-yellow-500 ' ${
              email.length === 0 ? 'border-b-2' : 'border-b-2 border-yellow-500'
            } `}
          />
          <label
            className={`absolute translate-y-0 duration-100 ease-linear left-0 pt-1 pl-1 peer-focus-within/email:text-sm peer-focus-within/email:-translate-y-3.5 peer-focus-within/email:text-yellow-500 ${
              email.length === 0
                ? 'font-bold'
                : ' font-bold text-sm -translate-y-3.5 text-yellow-500'
            } `}
          >
            Email Address
          </label>

          <textarea
            value={msg}
            rows={6}
            name='message'
            maxLength={255}
            onChange={handleMsgChange}
            className={`peer/text mb-10 pt-4 text-left text-md w-full bg-transparent duration-150 ease-linear outline-none pl-2 focus:border-b-2 focus:border-yellow-500 ' ${
              msg.length === 0 ? 'border-b-2' : 'border-b-2 border-yellow-500'
            } `}
          ></textarea>
          <label
            className={`absolute translate-y-0 duration-100 ease-linear left-0 pt-1 pl-1 peer-focus-within/text:text-sm peer-focus-within/text:-translate-y-3.5 peer-focus-within/text:text-yellow-500 ${
              msg.length === 0
                ? 'font-bold'
                : ' font-bold text-sm -translate-y-3.5 text-yellow-500'
            } `}
            // className='absolute translate-y-0 duration-100 ease-linear font-bold left-0 mt-1 '
          >
            Tell me what is it in you mind...
          </label>

          <input
            type='submit'
            className='h-10 py-0 justify-center text-center text-sm bg-transparent shadow-sm border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-800 hover:border-yellow-500 text-yellow-500 transition duration-300 ease-in-out'
            value='Send Message'
          />
        </form>
      </div>
      <span
        id='number-page'
        className='text-gray-200 absolute bottom-[1.2rem] -translate-x-1/2'
      >
        6
      </span>
      <span
        onClick={previousPage}
        className='absolute fill-white hover:fill-yellow-500 duration-300 w-6 h-6 bottom-4 left-6 cursor-pointer justify-center items-center inline-flex nextprev-btn'
        data-page='turn-1'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          id='chevron-left'
        >
          <g data-name='Layer 2'>
            <path
              d='M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z'
              data-name='chevron-left'
            ></path>
          </g>
        </svg>
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
