import { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const ContactMe = ({ backToProfilePage, previousPage }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const form = useRef();
  // console.log(fullName, email, msg);
  const sendEmail = e => {
    e.preventDefault();
    if (!fullName || !email || !msg) {
      return console.log('not valid');
    } else {
      emailjs
        .sendForm('service_wfm6fts', 'template_jxouvbo', form.current, {
          publicKey: 'LUNcmCY5SVymHR3Dh',
        })
        .then(
          setTimeout(() => {
            toast.success('Your Message has been sent successfully');
          }, 500),
          error => {
            setTimeout(() => {
              toast.error('Sending message Failed');
            }, 500);
          }
        );
    }
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
            className={`peer/name mb-10 text-gray-200 text-md w-full h-10 bg-transparent duration-150 ease-linear outline-none pl-2  focus:border-yellow-500 ' ${
              !fullName ? 'border-b-2' : 'border-b-2 border-yellow-500'
            } `}
          />
          <label
            className={`absolute text-gray-200 duration-100 ease-linear left-0 pt-1 pl-1 peer-focus-within/name:text-sm peer-focus-within/name:-translate-y-3.5 peer-focus-within/name:text-yellow-500 ${
              !fullName
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
            className={`peer/email mb-10 text-gray-200 text-md w-full  invalid:border-red-400  invalid:text-red-400 h-10 bg-transparent duration-150 ease-linear outline-none pl-2 focus:border-b-2 focus:border-yellow-500 ' ${
              !email ? 'border-b-2' : 'border-b-2 border-yellow-500'
            } `}
          />
          <label
            className={`absolute text-gray-200 duration-100 ease-linear left-0 pt-1 pl-1 peer-focus-within/email:text-sm peer-focus-within/email:-translate-y-3.5 peer-focus-within/email:text-yellow-500 peer-invalid/email:text-red-400  ${
              !email
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
            className={`peer/text mb-10 pt-4 text-gray-200 text-left text-md w-full bg-transparent duration-150 ease-linear outline-none pl-2 focus:border-b-2 focus:border-yellow-500 ' ${
              !msg ? 'border-b-2' : 'border-b-2 border-yellow-500'
            } `}
          ></textarea>
          <label
            className={`absolute text-gray-200 duration-100 ease-linear left-0 pt-1 pl-1 peer-focus-within/text:text-sm peer-focus-within/text:-translate-y-3.5 peer-focus-within/text:text-yellow-500 ${
              !msg
                ? 'font-bold'
                : ' font-bold text-sm -translate-y-3.5 text-yellow-500'
            } `}
            // className='absolute translate-y-0 duration-100 ease-linear font-bold left-0 mt-1 '
          >
            Tell me what is it in you mind...
          </label>

          <input
            type='submit'
            disabled={!fullName || !email || !msg ? true : false}
            className='h-10 py-0 justify-center text-center text-sm bg-transparent shadow-sm border-2 disabled:cursor-not-allowed border-yellow-500 hover:bg-yellow-500 disabled:bg-transparent peer-invalid/email:cursor-not-allowed hover:text-gray-800 disabled:text-yellow-500 hover:border-yellow-500 text-yellow-500 transition duration-300 ease-in-out disabled:opacity-75'
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
        className='absolute fill-gray-200 hover:fill-yellow-500 duration-300 w-6 h-6 bottom-4 left-6 cursor-pointer justify-center items-center inline-flex nextprev-btn'
        data-page='turn-1'
      >
        <svg viewBox='0 0 24 24' id='chevron-left'>
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
            <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
            <g
              id='SVGRepo_tracerCarrier'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></g>
            <g id='SVGRepo_iconCarrier'>
              <g id='style=fill'>
                <g id='profile'>
                  <path
                    id='vector (Stroke)'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M6.75 6.5C6.75 3.6005 9.1005 1.25 12 1.25C14.8995 1.25 17.25 3.6005 17.25 6.5C17.25 9.3995 14.8995 11.75 12 11.75C9.1005 11.75 6.75 9.3995 6.75 6.5Z'
                  ></path>
                  <path
                    id='rec (Stroke)'
                    fillRule='evenodd'
                    clipRule='evenodd'
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
