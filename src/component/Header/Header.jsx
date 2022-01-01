import React, { useState } from 'react';
import './header.css';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import { IframVideo } from './IframVideo';
import { Drawer } from '@mui/material';

function Header() {
  const [handelVideo, sethandelVideo] = useState(false);
  const playVideo = () => {
    sethandelVideo(true);
  };
  const closeVid = () => {
    sethandelVideo(false);
  };
  return (
    <>
      <header>
        <div className='container'>
          <div className='row align-items-center py-4'>
            <div className='col-lg-6 m-auto col-md-8'>
              <Fade left>
                <h1 className='mb-4'>
                  Work on big ideas , <br />
                  Without the busywork
                </h1>
                <p className='text-color-header my-4'>
                  Project management software shouldn’t be hard Plan your team’s
                  work, know who’s working on what , and deliver results
                  intuitively with minimal tracking
                </p>
              </Fade>
              <Fade bottom>
                <div className='btns mt-5'>
                  <button type='button' className='btn shadow btn2-hover me-4 '>
                    <Link
                      className='btn-link text-decoration-none '
                      to='/SignUp'
                    >
                      Start For free
                    </Link>
                  </button>
                  <button
                    type='button'
                    className='btn shadow bg-white text-color-header btn-hover'
                    onClick={playVideo}
                  >
                    Watch Video
                  </button>
                </div>
              </Fade>
            </div>
            <Fade right>
              <div className='col-lg-6 mt-lg-0 mt-4 d-flex justify-content-lg-end'>
                <img
                  className='header-img w-75'
                  src='../../assets/header.png'
                  alt=''
                />
              </div>
            </Fade>
          </div>
        </div>
        <Drawer
          anchor='top'
          open={handelVideo}
          onClose={() => sethandelVideo(false)}
        >
          <IframVideo trigger={handelVideo}>
            <div className='d-flex justify-content-end'>
              <span className='clear-icon' onClick={closeVid}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-x-lg'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z'
                  />
                  <path
                    fillRule='evenodd'
                    d='M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z'
                  />
                </svg>
              </span>
            </div>
          </IframVideo>
        </Drawer>
      </header>
    </>
  );
}

export default Header;
