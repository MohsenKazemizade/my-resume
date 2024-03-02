import { useState } from 'react';
import 'boxicons';
import './App.css';
import ContactPage from './components/ContactPage';
import ProfilePage from './components/ProfilePage';
import WorkExperiencePage from './components/WorkExperiencePage';
import ServicesPage from './components/ServicesPage';
import CertificationsPage from './components/CertificationsPage';
import SkillsPage from './components/SkillsPage';
import LastProjectPage from './components/LastProjectPage';

function App() {
  const [pageCount, setPageCount] = useState(1);

  const onNextPage = () => {
    let num = pageCount;
    if (pageCount == 4) return;
    setPageCount(num + 1);
  };
  const onPreviousPage = () => {
    let num = pageCount;
    if (pageCount == 1) return;
    setPageCount(num - 1);
  };
  const backToProfilePage = () => {
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
  const goToContactPage = () => {
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
            <ProfilePage goToContactPage={goToContactPage} />
          </div>
          <div
            id='turn-1'
            className={`absolute h-full w-6/12 flex shadow-lg p-[2rem] right-0 transform-style-3d origin-left duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)] ${turnOnePageOne}${turnTwoPageOne}${turnThreePageOne}${turnFourPageOne}`}
          >
            <WorkExperiencePage next={onNextPage} />
            <CertificationsPage previousPage={onPreviousPage} />
          </div>
          <div
            id='turn-2'
            className={`absolute h-full w-6/12 flex shadow-lg p-[2rem] right-0 transform-style-3d origin-left duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)] ${turnOnePageTwo}${turnTwoPageTwo}${turnThreePageTwo}${turnFourPageTwo}`}
          >
            <ServicesPage next={onNextPage} />
            <SkillsPage previousPage={onPreviousPage} />
          </div>
          <div
            id='turn-3'
            className={`absolute h-full w-6/12 flex shadow-lg p-[2rem] right-0 transform-style-3d origin-left duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)] ${turnOnePageThree}${turnTwoPageThree}${turnThreePageThree}${turnFourPageThree}`}
          >
            <LastProjectPage next={onNextPage} />
            <ContactPage
              previousPage={onPreviousPage}
              backToProfilePage={backToProfilePage}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
