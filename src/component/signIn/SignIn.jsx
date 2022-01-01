import React, { useContext, useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Link, useHistory } from 'react-router-dom';
import { auth, FirebaseContext } from '../context/FireContext';
import './signin.css';

function SignIn() {
  const { firebase, usersCollection } = useContext(FirebaseContext);
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const signIn = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(user => {
        user ? history.push('/Entrypage') : alert('Log in Please');
      })
      .catch(err => {
        throw err;
      });
  };
  const history = useHistory();
  const handleLoginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(data =>
        data ? history.push('/Entrypage') : alert('please sign in')
      )
      .catch(err => {
        throw ('There is error happend', err);
      });
  };
  const [users] = useCollectionData(usersCollection, { idField: 'id' });
  useEffect(() => {}, [users]);
  return (
    <section className='mt-5'>
      <div className='container-fluid h-custom'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-md-9 col-lg-6 col-xl-5'>
            <img
              src='https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png'
              className='img-fluid'
              alt='Sample'
            />
          </div>
          <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1'>
            <form>
              <div className='d-flex flex-row align-items-center justify-content-center justify-content-lg-start'>
                <p className='lead fw-normal mb-0 me-3'>Sign in with</p>
                {/* <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button> */}

                <button
                  type='button'
                  className='btn btn-primary btn-floating mx-1 google'
                  onClick={handleLoginWithGoogle}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-google'
                    viewBox='0 0 16 16'
                  >
                    <path d='M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z' />
                  </svg>
                </button>
              </div>

              <div className='divider d-flex align-items-center my-4'>
                <p className='text-center fw-bold mx-3 mb-0'>Or</p>
              </div>

              {/* <!-- Email input --> */}
              <div className='form-outline mb-4'>
                <label className='form-label' htmlFor='form3Example3'>
                  Email address
                </label>
                <input
                  type='email'
                  id='form3Example3'
                  className='form-control form-control-lg'
                  placeholder='Enter a valid email address'
                  ref={emailRef}
                />
              </div>

              {/* <!-- Password input --> */}
              <div className='form-outline mb-3'>
                <label className='form-label' htmlFor='form3Example4'>
                  Password
                </label>
                <input
                  type='password'
                  id='form3Example4'
                  className='form-control form-control-lg'
                  placeholder='Enter password'
                  ref={passwordRef}
                />
              </div>

              <div className='text-center text-lg-start mt-4 pt-2'>
                <button
                  type='button'
                  className='btn btn-primary btn-lg'
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                  onClick={signIn}
                >
                  Login
                </button>
                <p className='small fw-bold mt-2 pt-1 mb-4'>
                  Don't have an account?
                  <Link to='/SignUp' className='link-danger'>
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <i className='fab fa-500px'></i>
    </section>
  );
}

export default SignIn;
