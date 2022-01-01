import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth, createUserDocument } from '../context/FireContext';
const SignUp = () => {
  const [userSignUp, setuserSignUp] = useState({
    displayName: '',
    photoURL:
      'https://www.seekpng.com/png/full/966-9665317_placeholder-image-person-jpg.png',
    email: '',
    password: '',
  });
  const DisplayName = React.createRef();
  const Email = React.createRef();
  const Password = React.createRef();

  const handleChange = e => {
    setuserSignUp({
      displayName: DisplayName.current.value,
      photoURL:
        'https://www.seekpng.com/png/full/966-9665317_placeholder-image-person-jpg.png',
      email: Email.current.value,
      password: Password.current.value,
    });
  };
  const history = useHistory();
  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password, displayName, photoURL } = userSignUp;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocument(user, { displayName }, photoURL).then(x =>
        history.push('/Entrypage')
      );
    } catch (error) {
      throw ('error', error);
    }
  };

  const { displayName, email, password } = userSignUp;

  return (
    <section className='mt-5'>
      <div className='container h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-lg-12 col-xl-11'>
            <div
              className='card text-black border-0'
              style={{ borderRadius: '25px' }}
            >
              <div className='card-body p-md-5'>
                <div className='row justify-content-center'>
                  <div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
                    <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                      Sign up
                    </p>

                    <form className='mx-1 mx-md-4' onSubmit={handleSubmit}>
                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fas fa-user fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <label
                            className='form-label'
                            htmlFor='form3Example1c'
                          >
                            Your Name
                          </label>
                          <input
                            type='name'
                            name='displayName'
                            value={displayName}
                            onChange={handleChange}
                            ref={DisplayName}
                            placeholder='Name'
                            className='form-control'
                          />
                        </div>
                      </div>

                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fas fa-envelope fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <label
                            className='form-label'
                            htmlFor='form3Example3c'
                          >
                            Your Email
                          </label>
                          <input
                            type='email'
                            name='email'
                            value={email}
                            ref={Email}
                            onChange={handleChange}
                            placeholder='Email'
                            className='form-control'
                          />
                        </div>
                      </div>

                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fas fa-lock fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <label
                            className='form-label'
                            htmlFor='form3Example4c'
                          >
                            Password
                          </label>
                          <input
                            type='password'
                            name='password'
                            ref={Password}
                            value={password}
                            onChange={handleChange}
                            placeholder='Password'
                            className='form-control'
                          />
                        </div>
                      </div>

                      {/* <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        id="form3Example4cd"
                        className="form-control"
                      />
                      <label className="form-label" for="form3Example4cd">
                        Repeat your password
                      </label>
                    </div>
                  </div> */}

                      <div className='form-check d-flex justify-content-center mb-5'>
                        <input
                          className='form-check-input me-2'
                          type='checkbox'
                          value=''
                          id='form2Example3c'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='form2Example3'
                        >
                          I agree all statements in{' '}
                          <a href='#!'>Terms of service</a>
                        </label>
                      </div>

                      <div className='d-flex flex-column justify-content-center mx-4 mb-3 mb-lg-4'>
                        <button
                          type='submit'
                          className='btn btn-primary btn-lg'
                        >
                          Register
                        </button>
                        <p className='small fw-bold mt-2 pt-1 mb-0 text-center'>
                          Already have an account?
                          <Link to='/signIn' className='link-danger'>
                            Login
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                  <div className='col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2'>
                    <img
                      src='https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png'
                      className='img-fluid'
                      alt='Sample '
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
