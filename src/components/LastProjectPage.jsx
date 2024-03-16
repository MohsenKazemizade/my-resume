import image2 from '../assets/2Free iMac Mockup.png';

const LastProjectPage = ({ next }) => {
  return (
    <div
      id='page-front3'
      className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-700 to-slate-950 rotate-y-0 translate-z-px py-6 px-8'
    >
      <h1 className='text-gray-200 text-4xl font-bold mb-6'>Latest Project</h1>
      {/* <SliderProjects /> */}
      <div className='bg-[url(./assets/Free iMac Mockup.png)] bg-cover w-full'>
        {/* <img src={image} alt='' /> */}
        <img src={image2} alt='' />
        <div className='flex justify-between items-center px-2'>
          <h3 className='text-gray-200 text-xl font-bold items-center'>
            Personal Website
          </h3>
          <a
            href='#'
            className='group hover:text-yellow-500 cursor-pointer text-gray-200 flex justify-center items-center gap-2 hover:underline'
          >
            Live preview
            <svg
              width='20px'
              height='20px'
              viewBox='0 0 32 32'
              fill='none'
              className='group-hover:stroke-yellow-500'
              stroke='#e5e7eb'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M22 3h7v7M27.5 4.5L20 12M17 5H8a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-9'
              />
            </svg>
          </a>
        </div>
        <div className='w-full flex justify-evenly my-14 '>
          <button
            onClick={() =>
              window.open('https://github.com/MohsenKazemizade/my-portfolio')
            }
            className='group flex bg-yellow-500 shadow-sm border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500 transition duration-300 ease-in-out text-gray-800 items-center justify-center gap-2'
          >
            Source Code
            <span className='fill-gray-800 group-hover:fill-yellow-500 transition duration-300 ease-in-out'>
              <svg
                width='20px'
                height='20px'
                viewBox='0 0 1920 1920'
                className='mx-auto my-1'
              >
                <path
                  d='M1821.63 637.76c0-130.027-43.627-236.373-116.054-319.68 11.627-30.187 50.347-151.36-11.2-315.307 0 0-94.72-32-310.4 122.134-90.133-26.454-186.773-39.68-282.773-40.107-96 .427-192.64 13.653-282.667 40.107C602.749-29.227 507.923 2.773 507.923 2.773c-61.547 163.947-22.72 285.12-11.094 315.307-72.32 83.307-116.266 189.653-116.266 319.68 0 456.533 263.68 558.72 514.453 588.8 0 0-180.267 111.68-180.267 299.413-64.32 30.507-336.533 123.947-437.333-58.133 0 0-59.627-114.347-173.013-122.773 0 0-110.294-1.494-7.787 72.426 0 0 74.027 36.694 125.44 174.294 0 0 57.173 289.92 489.067 159.68 4.373 2.24 1.6 140.266 1.6 168.533h777.173s1.28-277.013 1.28-365.12c0-216.64-144.64-292.48-185.28-329.28 251.627-29.44 515.733-130.133 515.733-587.84'
                  fillRule='evenodd'
                />
              </svg>
            </span>
          </button>
          <button className='bg-transparent shadow-sm border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-800 transition duration-300 ease-in-out text-yellow-500'>
            More Projects
          </button>
        </div>
      </div>

      <span className='text-gray-200 absolute bottom-[1.2rem] -translate-x-1/2'>
        5
      </span>
      <span
        onClick={next}
        className='absolute fill-gray-200 hover:fill-yellow-500 duration-300 w-6 h-6 bottom-4 right-6 cursor-pointer justify-center items-center inline-flex nextprev-btn'
        data-page='turn-1'
      >
        <svg viewBox='0 0 24 24' id='chevron-right'>
          <g data-name='Layer 2'>
            <g data-name='chevron-right'>
              <rect
                width='24'
                height='24'
                opacity='0'
                transform='rotate(-90 12 12)'
              ></rect>
              <path d='M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z'></path>
            </g>
          </g>
        </svg>
      </span>
    </div>
  );
};

export default LastProjectPage;
