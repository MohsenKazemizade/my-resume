const WorkExperiencePage = ({ next }) => {
  return (
    <div
      id="page-front"
      className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-700 to-slate-950 py-6 px-8 pageFront "
      // className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-700 to-slate-950 rotate-y-0 py-6 px-8 translate-z-0.5'
    >
      <h1 className="text-gray-200 text-4xl font-bold mb-8">Work Experience</h1>
      <div
        id="workeduc-box"
        className="flex flex-col h-fit gap-3 border-l-[3px] border-yellow-500"
      >
        <div
          id="workeduc-content"
          className='text-left fill-yellow-500 relative pl-6 before:content-[""] before:absolute before:-top-[0.1rem] before:w-7 before:h-7 before:rounded-full before:bg-yellow-500 before:-left-[0.968rem]'
        >
          <svg
            className="inline-flex"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12.7913043,0.000921190481 C13.1700421,0.024610814 13.4622585,0.349231578 13.4521739,0.735075786 L13.4521739,0.735075786 L13.4521739,1.76996841 C16.4608696,2.0618612 18,3.72476559 18,6.71445539 L18,6.71445539 L18,14.9847511 C18,18.3105599 16.1043478,20 12.373913,20 L12.373913,20 L5.62608696,20 C1.89565217,20 7.10542736e-15,18.3105599 7.10542736e-15,14.9847511 L7.10542736e-15,14.9847511 L7.10542736e-15,6.71445539 C7.10542736e-15,4.72427726 0.67826087,3.30019425 2.06956522,2.46874206 L2.06956522,2.46874206 L2.16715693,2.41312234 C2.36884406,2.31898498 2.60539781,2.32761318 2.80201659,2.44176226 C3.03140516,2.57493618 3.16686608,2.82876197 3.15169222,3.09698216 C3.13651835,3.36520235 2.97332734,3.6015464 2.73043478,3.70707511 C1.80869565,4.25547975 1.37391304,5.21076525 1.37391304,6.71445539 L1.37391304,6.71445539 L1.37391304,6.97981247 L14.0608696,6.97981247 C14.4402652,6.97981247 14.7478261,7.29266409 14.7478261,7.67858612 C14.7478261,8.06450815 14.4402652,8.37735977 14.0608696,8.37735977 L14.0608696,8.37735977 L1.37391304,8.37735977 L1.37391304,14.9847511 C1.37391304,17.5233339 2.60869565,18.575917 5.62608696,18.5936075 L5.62608696,18.5936075 L12.373913,18.5936075 C15.3478261,18.5936075 16.6173913,17.5144887 16.6173913,14.9759059 L16.6173913,14.9759059 L16.6173913,6.70561015 C16.6173913,4.49430113 15.6521739,3.42402756 13.4521739,3.16751571 L13.4521739,3.16751571 L13.4521739,3.83975366 C13.4014368,4.19806168 13.0930261,4.4596374 12.7373953,4.44598651 C12.3817646,4.43233563 12.093611,4.14786081 12.0695652,3.78668224 L12.0695652,3.78668224 L12.0695652,0.673159134 L12.0822793,0.562556646 C12.1105979,0.417619044 12.1836163,0.284496342 12.2921431,0.183413025 C12.4278015,0.057058878 12.6076087,-0.00867808513 12.7913043,0.000921190481 Z M13.187,14.197 L13.2977157,14.2041252 C13.4875835,14.2279348 13.6656459,14.3150005 13.8031132,14.4534479 C13.9680738,14.6195849 14.0608696,14.8459179 14.0608696,15.0820487 C14.0608696,15.5705576 13.671552,15.9665723 13.1913043,15.9665723 C12.7110567,15.9665723 12.3217391,15.5705576 12.3217391,15.0820487 C12.3217391,14.5935398 12.7110567,14.1975251 13.1913043,14.1975251 L13.187,14.197 Z M9.0173913,14.1975251 L9.12646772,14.2044168 C9.55523028,14.2589978 9.88695652,14.6311174 9.88695652,15.0820487 C9.88695652,15.5705576 9.49763891,15.9665723 9.0173913,15.9665723 C8.5371437,15.9665723 8.14782609,15.5705576 8.14782609,15.0820487 C8.14782609,14.5935398 8.5371437,14.1975251 9.0173913,14.1975251 L9.0173913,14.1975251 Z M4.848,14.197 L4.95858525,14.2041252 C5.14845304,14.2279348 5.3265155,14.3150005 5.46398272,14.4534479 C5.62894339,14.6195849 5.72173913,14.8459179 5.72173913,15.0820487 C5.72173913,15.5705576 5.33242152,15.9665723 4.85217391,15.9665723 C4.3719263,15.9665723 3.9826087,15.5705576 3.9826087,15.0820487 C3.9826087,14.5935398 4.3719263,14.1975251 4.85217391,14.1975251 L4.848,14.197 Z M13.187,10.615 L13.2977157,10.6218046 C13.4875835,10.6456142 13.6656459,10.7326798 13.8031132,10.8711273 C13.9680738,11.0372643 14.0608696,11.2635973 14.0608696,11.4997281 C14.0608696,11.988237 13.671552,12.3842517 13.1913043,12.3842517 C12.7110567,12.3842517 12.3217391,11.988237 12.3217391,11.4997281 C12.3217391,11.0112192 12.7110567,10.6152045 13.1913043,10.6152045 L13.187,10.615 Z M9.0173913,10.6152045 L9.12646772,10.6220962 C9.55523028,10.6766771 9.88695652,11.0487968 9.88695652,11.4997281 C9.88695652,11.988237 9.49763891,12.3842517 9.0173913,12.3842517 C8.5371437,12.3842517 8.14782609,11.988237 8.14782609,11.4997281 C8.14782609,11.0112192 8.5371437,10.6152045 9.0173913,10.6152045 L9.0173913,10.6152045 Z M4.848,10.615 L4.95858525,10.6218046 C5.14845304,10.6456142 5.3265155,10.7326798 5.46398272,10.8711273 C5.62894339,11.0372643 5.72173913,11.2635973 5.72173913,11.4997281 C5.72173913,11.988237 5.33242152,12.3842517 4.85217391,12.3842517 C4.3719263,12.3842517 3.9826087,11.988237 3.9826087,11.4997281 C3.9826087,11.0112192 4.3719263,10.6152045 4.85217391,10.6152045 L4.848,10.615 Z M5.23913043,0.106447383 C5.5932794,0.106447383 5.89090164,0.377086205 5.93043478,0.735075786 L5.93043478,0.735075786 L5.93043478,1.69920652 L9.86086957,1.69920652 C10.2402652,1.69920652 10.5478261,2.01205814 10.5478261,2.39798017 C10.5478261,2.7839022 10.2402652,3.09675382 9.86086957,3.09675382 L9.86086957,3.09675382 L5.91304348,3.09675382 L5.91304348,3.79552747 C5.9130582,3.98239654 5.83949018,4.16148607 5.70877399,4.29278881 C5.57805779,4.42409155 5.40108546,4.49666656 5.2173913,4.49430113 L5.2173913,4.49430113 L5.11694017,4.48426677 C4.78964175,4.42674447 4.54338377,4.13445405 4.54776707,3.78668224 L4.54776707,3.78668224 L4.54776707,0.735075786 L4.56718412,0.630482723 C4.64744894,0.325664829 4.92039637,0.106447383 5.23913043,0.106447383 Z"
              transform="translate(3 2)"
            ></path>
          </svg>
          <span className="text-yellow-500 ml-1 align-top text-xl font-semibold">
            2024 - Present
          </span>
          <h3 className="text-gray-200 font-bold">
            Full Stack Developer Using NextJS at Asa masir navgan
          </h3>
          <p className="text-gray-200 text-start">
            Built a fully functional automation system for LPG gas
            transportation, optimizing workflows and operational efficiency.
          </p>
        </div>
        <div
          id="workeduc-content"
          className='text-left fill-yellow-500 relative pl-6 before:content-[""] before:absolute before:-top-[0.1rem] before:w-7 before:h-7 before:rounded-full before:bg-yellow-500 before:-left-[0.968rem]'
        >
          <svg
            className="inline-flex"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12.7913043,0.000921190481 C13.1700421,0.024610814 13.4622585,0.349231578 13.4521739,0.735075786 L13.4521739,0.735075786 L13.4521739,1.76996841 C16.4608696,2.0618612 18,3.72476559 18,6.71445539 L18,6.71445539 L18,14.9847511 C18,18.3105599 16.1043478,20 12.373913,20 L12.373913,20 L5.62608696,20 C1.89565217,20 7.10542736e-15,18.3105599 7.10542736e-15,14.9847511 L7.10542736e-15,14.9847511 L7.10542736e-15,6.71445539 C7.10542736e-15,4.72427726 0.67826087,3.30019425 2.06956522,2.46874206 L2.06956522,2.46874206 L2.16715693,2.41312234 C2.36884406,2.31898498 2.60539781,2.32761318 2.80201659,2.44176226 C3.03140516,2.57493618 3.16686608,2.82876197 3.15169222,3.09698216 C3.13651835,3.36520235 2.97332734,3.6015464 2.73043478,3.70707511 C1.80869565,4.25547975 1.37391304,5.21076525 1.37391304,6.71445539 L1.37391304,6.71445539 L1.37391304,6.97981247 L14.0608696,6.97981247 C14.4402652,6.97981247 14.7478261,7.29266409 14.7478261,7.67858612 C14.7478261,8.06450815 14.4402652,8.37735977 14.0608696,8.37735977 L14.0608696,8.37735977 L1.37391304,8.37735977 L1.37391304,14.9847511 C1.37391304,17.5233339 2.60869565,18.575917 5.62608696,18.5936075 L5.62608696,18.5936075 L12.373913,18.5936075 C15.3478261,18.5936075 16.6173913,17.5144887 16.6173913,14.9759059 L16.6173913,14.9759059 L16.6173913,6.70561015 C16.6173913,4.49430113 15.6521739,3.42402756 13.4521739,3.16751571 L13.4521739,3.16751571 L13.4521739,3.83975366 C13.4014368,4.19806168 13.0930261,4.4596374 12.7373953,4.44598651 C12.3817646,4.43233563 12.093611,4.14786081 12.0695652,3.78668224 L12.0695652,3.78668224 L12.0695652,0.673159134 L12.0822793,0.562556646 C12.1105979,0.417619044 12.1836163,0.284496342 12.2921431,0.183413025 C12.4278015,0.057058878 12.6076087,-0.00867808513 12.7913043,0.000921190481 Z M13.187,14.197 L13.2977157,14.2041252 C13.4875835,14.2279348 13.6656459,14.3150005 13.8031132,14.4534479 C13.9680738,14.6195849 14.0608696,14.8459179 14.0608696,15.0820487 C14.0608696,15.5705576 13.671552,15.9665723 13.1913043,15.9665723 C12.7110567,15.9665723 12.3217391,15.5705576 12.3217391,15.0820487 C12.3217391,14.5935398 12.7110567,14.1975251 13.1913043,14.1975251 L13.187,14.197 Z M9.0173913,14.1975251 L9.12646772,14.2044168 C9.55523028,14.2589978 9.88695652,14.6311174 9.88695652,15.0820487 C9.88695652,15.5705576 9.49763891,15.9665723 9.0173913,15.9665723 C8.5371437,15.9665723 8.14782609,15.5705576 8.14782609,15.0820487 C8.14782609,14.5935398 8.5371437,14.1975251 9.0173913,14.1975251 L9.0173913,14.1975251 Z M4.848,14.197 L4.95858525,14.2041252 C5.14845304,14.2279348 5.3265155,14.3150005 5.46398272,14.4534479 C5.62894339,14.6195849 5.72173913,14.8459179 5.72173913,15.0820487 C5.72173913,15.5705576 5.33242152,15.9665723 4.85217391,15.9665723 C4.3719263,15.9665723 3.9826087,15.5705576 3.9826087,15.0820487 C3.9826087,14.5935398 4.3719263,14.1975251 4.85217391,14.1975251 L4.848,14.197 Z M13.187,10.615 L13.2977157,10.6218046 C13.4875835,10.6456142 13.6656459,10.7326798 13.8031132,10.8711273 C13.9680738,11.0372643 14.0608696,11.2635973 14.0608696,11.4997281 C14.0608696,11.988237 13.671552,12.3842517 13.1913043,12.3842517 C12.7110567,12.3842517 12.3217391,11.988237 12.3217391,11.4997281 C12.3217391,11.0112192 12.7110567,10.6152045 13.1913043,10.6152045 L13.187,10.615 Z M9.0173913,10.6152045 L9.12646772,10.6220962 C9.55523028,10.6766771 9.88695652,11.0487968 9.88695652,11.4997281 C9.88695652,11.988237 9.49763891,12.3842517 9.0173913,12.3842517 C8.5371437,12.3842517 8.14782609,11.988237 8.14782609,11.4997281 C8.14782609,11.0112192 8.5371437,10.6152045 9.0173913,10.6152045 L9.0173913,10.6152045 Z M4.848,10.615 L4.95858525,10.6218046 C5.14845304,10.6456142 5.3265155,10.7326798 5.46398272,10.8711273 C5.62894339,11.0372643 5.72173913,11.2635973 5.72173913,11.4997281 C5.72173913,11.988237 5.33242152,12.3842517 4.85217391,12.3842517 C4.3719263,12.3842517 3.9826087,11.988237 3.9826087,11.4997281 C3.9826087,11.0112192 4.3719263,10.6152045 4.85217391,10.6152045 L4.848,10.615 Z M5.23913043,0.106447383 C5.5932794,0.106447383 5.89090164,0.377086205 5.93043478,0.735075786 L5.93043478,0.735075786 L5.93043478,1.69920652 L9.86086957,1.69920652 C10.2402652,1.69920652 10.5478261,2.01205814 10.5478261,2.39798017 C10.5478261,2.7839022 10.2402652,3.09675382 9.86086957,3.09675382 L9.86086957,3.09675382 L5.91304348,3.09675382 L5.91304348,3.79552747 C5.9130582,3.98239654 5.83949018,4.16148607 5.70877399,4.29278881 C5.57805779,4.42409155 5.40108546,4.49666656 5.2173913,4.49430113 L5.2173913,4.49430113 L5.11694017,4.48426677 C4.78964175,4.42674447 4.54338377,4.13445405 4.54776707,3.78668224 L4.54776707,3.78668224 L4.54776707,0.735075786 L4.56718412,0.630482723 C4.64744894,0.325664829 4.92039637,0.106447383 5.23913043,0.106447383 Z"
              transform="translate(3 2)"
            ></path>
          </svg>
          <span className="text-yellow-500 ml-1 align-top text-xl font-semibold">
            2020 - 2024
          </span>
          <h3 className="text-gray-200 font-bold">
            Freelance Front-End Developer Using React
          </h3>
          <p className="text-gray-200 text-start">
            As a Freelance Front-End Developer, I excelled in developing
            dynamic, responsive web applications using React, focusing on user
            experience, performance, and scalable, maintainable codebases.
          </p>
        </div>
        <div
          id="workeduc-content"
          className='text-left fill-yellow-500 relative pl-6 before:content-[""] before:absolute before:-top-[0.1rem] before:w-7 before:h-7 before:rounded-full before:bg-yellow-500 before:-left-[0.968rem]'
        >
          <svg
            className="inline-flex"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12.7913043,0.000921190481 C13.1700421,0.024610814 13.4622585,0.349231578 13.4521739,0.735075786 L13.4521739,0.735075786 L13.4521739,1.76996841 C16.4608696,2.0618612 18,3.72476559 18,6.71445539 L18,6.71445539 L18,14.9847511 C18,18.3105599 16.1043478,20 12.373913,20 L12.373913,20 L5.62608696,20 C1.89565217,20 7.10542736e-15,18.3105599 7.10542736e-15,14.9847511 L7.10542736e-15,14.9847511 L7.10542736e-15,6.71445539 C7.10542736e-15,4.72427726 0.67826087,3.30019425 2.06956522,2.46874206 L2.06956522,2.46874206 L2.16715693,2.41312234 C2.36884406,2.31898498 2.60539781,2.32761318 2.80201659,2.44176226 C3.03140516,2.57493618 3.16686608,2.82876197 3.15169222,3.09698216 C3.13651835,3.36520235 2.97332734,3.6015464 2.73043478,3.70707511 C1.80869565,4.25547975 1.37391304,5.21076525 1.37391304,6.71445539 L1.37391304,6.71445539 L1.37391304,6.97981247 L14.0608696,6.97981247 C14.4402652,6.97981247 14.7478261,7.29266409 14.7478261,7.67858612 C14.7478261,8.06450815 14.4402652,8.37735977 14.0608696,8.37735977 L14.0608696,8.37735977 L1.37391304,8.37735977 L1.37391304,14.9847511 C1.37391304,17.5233339 2.60869565,18.575917 5.62608696,18.5936075 L5.62608696,18.5936075 L12.373913,18.5936075 C15.3478261,18.5936075 16.6173913,17.5144887 16.6173913,14.9759059 L16.6173913,14.9759059 L16.6173913,6.70561015 C16.6173913,4.49430113 15.6521739,3.42402756 13.4521739,3.16751571 L13.4521739,3.16751571 L13.4521739,3.83975366 C13.4014368,4.19806168 13.0930261,4.4596374 12.7373953,4.44598651 C12.3817646,4.43233563 12.093611,4.14786081 12.0695652,3.78668224 L12.0695652,3.78668224 L12.0695652,0.673159134 L12.0822793,0.562556646 C12.1105979,0.417619044 12.1836163,0.284496342 12.2921431,0.183413025 C12.4278015,0.057058878 12.6076087,-0.00867808513 12.7913043,0.000921190481 Z M13.187,14.197 L13.2977157,14.2041252 C13.4875835,14.2279348 13.6656459,14.3150005 13.8031132,14.4534479 C13.9680738,14.6195849 14.0608696,14.8459179 14.0608696,15.0820487 C14.0608696,15.5705576 13.671552,15.9665723 13.1913043,15.9665723 C12.7110567,15.9665723 12.3217391,15.5705576 12.3217391,15.0820487 C12.3217391,14.5935398 12.7110567,14.1975251 13.1913043,14.1975251 L13.187,14.197 Z M9.0173913,14.1975251 L9.12646772,14.2044168 C9.55523028,14.2589978 9.88695652,14.6311174 9.88695652,15.0820487 C9.88695652,15.5705576 9.49763891,15.9665723 9.0173913,15.9665723 C8.5371437,15.9665723 8.14782609,15.5705576 8.14782609,15.0820487 C8.14782609,14.5935398 8.5371437,14.1975251 9.0173913,14.1975251 L9.0173913,14.1975251 Z M4.848,14.197 L4.95858525,14.2041252 C5.14845304,14.2279348 5.3265155,14.3150005 5.46398272,14.4534479 C5.62894339,14.6195849 5.72173913,14.8459179 5.72173913,15.0820487 C5.72173913,15.5705576 5.33242152,15.9665723 4.85217391,15.9665723 C4.3719263,15.9665723 3.9826087,15.5705576 3.9826087,15.0820487 C3.9826087,14.5935398 4.3719263,14.1975251 4.85217391,14.1975251 L4.848,14.197 Z M13.187,10.615 L13.2977157,10.6218046 C13.4875835,10.6456142 13.6656459,10.7326798 13.8031132,10.8711273 C13.9680738,11.0372643 14.0608696,11.2635973 14.0608696,11.4997281 C14.0608696,11.988237 13.671552,12.3842517 13.1913043,12.3842517 C12.7110567,12.3842517 12.3217391,11.988237 12.3217391,11.4997281 C12.3217391,11.0112192 12.7110567,10.6152045 13.1913043,10.6152045 L13.187,10.615 Z M9.0173913,10.6152045 L9.12646772,10.6220962 C9.55523028,10.6766771 9.88695652,11.0487968 9.88695652,11.4997281 C9.88695652,11.988237 9.49763891,12.3842517 9.0173913,12.3842517 C8.5371437,12.3842517 8.14782609,11.988237 8.14782609,11.4997281 C8.14782609,11.0112192 8.5371437,10.6152045 9.0173913,10.6152045 L9.0173913,10.6152045 Z M4.848,10.615 L4.95858525,10.6218046 C5.14845304,10.6456142 5.3265155,10.7326798 5.46398272,10.8711273 C5.62894339,11.0372643 5.72173913,11.2635973 5.72173913,11.4997281 C5.72173913,11.988237 5.33242152,12.3842517 4.85217391,12.3842517 C4.3719263,12.3842517 3.9826087,11.988237 3.9826087,11.4997281 C3.9826087,11.0112192 4.3719263,10.6152045 4.85217391,10.6152045 L4.848,10.615 Z M5.23913043,0.106447383 C5.5932794,0.106447383 5.89090164,0.377086205 5.93043478,0.735075786 L5.93043478,0.735075786 L5.93043478,1.69920652 L9.86086957,1.69920652 C10.2402652,1.69920652 10.5478261,2.01205814 10.5478261,2.39798017 C10.5478261,2.7839022 10.2402652,3.09675382 9.86086957,3.09675382 L9.86086957,3.09675382 L5.91304348,3.09675382 L5.91304348,3.79552747 C5.9130582,3.98239654 5.83949018,4.16148607 5.70877399,4.29278881 C5.57805779,4.42409155 5.40108546,4.49666656 5.2173913,4.49430113 L5.2173913,4.49430113 L5.11694017,4.48426677 C4.78964175,4.42674447 4.54338377,4.13445405 4.54776707,3.78668224 L4.54776707,3.78668224 L4.54776707,0.735075786 L4.56718412,0.630482723 C4.64744894,0.325664829 4.92039637,0.106447383 5.23913043,0.106447383 Z"
              transform="translate(3 2)"
            ></path>
          </svg>
          <span className="text-yellow-500 ml-1 align-top text-xl font-semibold">
            2019 - 2020
          </span>
          <h3 className="text-gray-200 font-bold">
            Freelance Teacher in Web Development
          </h3>
          <p className="text-gray-200 text-start">
            As a Freelance Teacher, I equipped teenagers with the fundamentals
            of web development, teaching basic HTML, CSS, and JavaScript,
            fostering creativity and problem-solving skills in a supportive
            learning environment.
          </p>
        </div>
        <div
          id="workeduc-content"
          className='text-left fill-yellow-500 relative pl-6 before:content-[""] before:absolute before:-top-[0.1rem] before:w-7 before:h-7 before:rounded-full before:bg-yellow-500 before:-left-[0.968rem]'
        >
          <svg
            className="inline-flex"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12.7913043,0.000921190481 C13.1700421,0.024610814 13.4622585,0.349231578 13.4521739,0.735075786 L13.4521739,0.735075786 L13.4521739,1.76996841 C16.4608696,2.0618612 18,3.72476559 18,6.71445539 L18,6.71445539 L18,14.9847511 C18,18.3105599 16.1043478,20 12.373913,20 L12.373913,20 L5.62608696,20 C1.89565217,20 7.10542736e-15,18.3105599 7.10542736e-15,14.9847511 L7.10542736e-15,14.9847511 L7.10542736e-15,6.71445539 C7.10542736e-15,4.72427726 0.67826087,3.30019425 2.06956522,2.46874206 L2.06956522,2.46874206 L2.16715693,2.41312234 C2.36884406,2.31898498 2.60539781,2.32761318 2.80201659,2.44176226 C3.03140516,2.57493618 3.16686608,2.82876197 3.15169222,3.09698216 C3.13651835,3.36520235 2.97332734,3.6015464 2.73043478,3.70707511 C1.80869565,4.25547975 1.37391304,5.21076525 1.37391304,6.71445539 L1.37391304,6.71445539 L1.37391304,6.97981247 L14.0608696,6.97981247 C14.4402652,6.97981247 14.7478261,7.29266409 14.7478261,7.67858612 C14.7478261,8.06450815 14.4402652,8.37735977 14.0608696,8.37735977 L14.0608696,8.37735977 L1.37391304,8.37735977 L1.37391304,14.9847511 C1.37391304,17.5233339 2.60869565,18.575917 5.62608696,18.5936075 L5.62608696,18.5936075 L12.373913,18.5936075 C15.3478261,18.5936075 16.6173913,17.5144887 16.6173913,14.9759059 L16.6173913,14.9759059 L16.6173913,6.70561015 C16.6173913,4.49430113 15.6521739,3.42402756 13.4521739,3.16751571 L13.4521739,3.16751571 L13.4521739,3.83975366 C13.4014368,4.19806168 13.0930261,4.4596374 12.7373953,4.44598651 C12.3817646,4.43233563 12.093611,4.14786081 12.0695652,3.78668224 L12.0695652,3.78668224 L12.0695652,0.673159134 L12.0822793,0.562556646 C12.1105979,0.417619044 12.1836163,0.284496342 12.2921431,0.183413025 C12.4278015,0.057058878 12.6076087,-0.00867808513 12.7913043,0.000921190481 Z M13.187,14.197 L13.2977157,14.2041252 C13.4875835,14.2279348 13.6656459,14.3150005 13.8031132,14.4534479 C13.9680738,14.6195849 14.0608696,14.8459179 14.0608696,15.0820487 C14.0608696,15.5705576 13.671552,15.9665723 13.1913043,15.9665723 C12.7110567,15.9665723 12.3217391,15.5705576 12.3217391,15.0820487 C12.3217391,14.5935398 12.7110567,14.1975251 13.1913043,14.1975251 L13.187,14.197 Z M9.0173913,14.1975251 L9.12646772,14.2044168 C9.55523028,14.2589978 9.88695652,14.6311174 9.88695652,15.0820487 C9.88695652,15.5705576 9.49763891,15.9665723 9.0173913,15.9665723 C8.5371437,15.9665723 8.14782609,15.5705576 8.14782609,15.0820487 C8.14782609,14.5935398 8.5371437,14.1975251 9.0173913,14.1975251 L9.0173913,14.1975251 Z M4.848,14.197 L4.95858525,14.2041252 C5.14845304,14.2279348 5.3265155,14.3150005 5.46398272,14.4534479 C5.62894339,14.6195849 5.72173913,14.8459179 5.72173913,15.0820487 C5.72173913,15.5705576 5.33242152,15.9665723 4.85217391,15.9665723 C4.3719263,15.9665723 3.9826087,15.5705576 3.9826087,15.0820487 C3.9826087,14.5935398 4.3719263,14.1975251 4.85217391,14.1975251 L4.848,14.197 Z M13.187,10.615 L13.2977157,10.6218046 C13.4875835,10.6456142 13.6656459,10.7326798 13.8031132,10.8711273 C13.9680738,11.0372643 14.0608696,11.2635973 14.0608696,11.4997281 C14.0608696,11.988237 13.671552,12.3842517 13.1913043,12.3842517 C12.7110567,12.3842517 12.3217391,11.988237 12.3217391,11.4997281 C12.3217391,11.0112192 12.7110567,10.6152045 13.1913043,10.6152045 L13.187,10.615 Z M9.0173913,10.6152045 L9.12646772,10.6220962 C9.55523028,10.6766771 9.88695652,11.0487968 9.88695652,11.4997281 C9.88695652,11.988237 9.49763891,12.3842517 9.0173913,12.3842517 C8.5371437,12.3842517 8.14782609,11.988237 8.14782609,11.4997281 C8.14782609,11.0112192 8.5371437,10.6152045 9.0173913,10.6152045 L9.0173913,10.6152045 Z M4.848,10.615 L4.95858525,10.6218046 C5.14845304,10.6456142 5.3265155,10.7326798 5.46398272,10.8711273 C5.62894339,11.0372643 5.72173913,11.2635973 5.72173913,11.4997281 C5.72173913,11.988237 5.33242152,12.3842517 4.85217391,12.3842517 C4.3719263,12.3842517 3.9826087,11.988237 3.9826087,11.4997281 C3.9826087,11.0112192 4.3719263,10.6152045 4.85217391,10.6152045 L4.848,10.615 Z M5.23913043,0.106447383 C5.5932794,0.106447383 5.89090164,0.377086205 5.93043478,0.735075786 L5.93043478,0.735075786 L5.93043478,1.69920652 L9.86086957,1.69920652 C10.2402652,1.69920652 10.5478261,2.01205814 10.5478261,2.39798017 C10.5478261,2.7839022 10.2402652,3.09675382 9.86086957,3.09675382 L9.86086957,3.09675382 L5.91304348,3.09675382 L5.91304348,3.79552747 C5.9130582,3.98239654 5.83949018,4.16148607 5.70877399,4.29278881 C5.57805779,4.42409155 5.40108546,4.49666656 5.2173913,4.49430113 L5.2173913,4.49430113 L5.11694017,4.48426677 C4.78964175,4.42674447 4.54338377,4.13445405 4.54776707,3.78668224 L4.54776707,3.78668224 L4.54776707,0.735075786 L4.56718412,0.630482723 C4.64744894,0.325664829 4.92039637,0.106447383 5.23913043,0.106447383 Z"
              transform="translate(3 2)"
            ></path>
          </svg>
          <span className="text-yellow-500 ml-1 align-top text-xl font-semibold">
            2018 - 2019
          </span>
          <h3 className="text-gray-200 font-bold">
            Android Developer at Shamim Golshan Company
          </h3>
          <p className="text-gray-200 text-start">
            As an Android Developer at Shamim Golshan Company, I specialized in
            crafting innovative mobile applications, focusing on user
            experience, performance optimization, and leveraging the latest
            Android technologies.
          </p>
        </div>
      </div>
      <span
        id="number-page"
        className="text-gray-200 absolute bottom-[1.2rem] -translate-x-1/2"
      >
        1
      </span>
      <span
        onClick={next}
        className="absolute fill-arrow hover:fill-arrowhover duration-300 w-6 h-6 bottom-4 right-6 cursor-pointer justify-center items-center inline-flex nextprev-btn"
        data-page="turn-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="chevron-right"
        >
          <g data-name="Layer 2">
            <g data-name="chevron-right">
              <rect
                width="24"
                height="24"
                opacity="0"
                transform="rotate(-90 12 12)"
              ></rect>
              <path d="M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z"></path>
            </g>
          </g>
        </svg>
      </span>
    </div>
  );
};

export default WorkExperiencePage;
