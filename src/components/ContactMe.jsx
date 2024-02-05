import React from 'react';
import { useState } from 'react';

const ContactMe = () => {
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
              email.length === 0 ? 'border-b-2' : 'border-b-2 border-yellow-500'
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
  );
};

export default ContactMe;
