import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Link } from 'react-router-dom';
import { auth, FirebaseContext } from '../context/FireContext';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const NavbarCom = () => {
  const { usersCollection } = useContext(FirebaseContext);
  // const { userData } = useContext(currentUser);
  const [userData] = useAuthState(auth);
  const query =
    userData?.uid && usersCollection.where('uid', '==', userData.uid);
  const [currentUser] = useCollectionData(query, { idField: 'id' });
  var hidden = currentUser ? 'hidden' : '';
  var hiddenLogout = !currentUser ? 'hidden' : '';
  var x;
  var z;
  currentUser ? (x = currentUser[0]?.photoURL) : (x = null);
  currentUser ? (z = currentUser[0]?.displayName) : (z = null);
  return (
    <div>
      <Navbar className='nav py-0' collapseOnSelect expand='lg' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              className='nav-logo'
              src='../../assets/logo final 00.png'
              alt=''
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse
            className='justify-content-end'
            id='responsive-navbar-nav'
          >
            <Nav>
              <Link
                className='text-decoration-none text-uppercase navList-color list-item list-menu-item1 text-center mt-4 mt-lg-0 py-1 px-3'
                to='/'
              >
                home
              </Link>
              <ScrollLink
                to='features'
                smooth={true}
                duration={500}
                className='pointer text-decoration-none text-uppercase navList-color list-item list-menu-item2 sm-shadow text-center py-1 px-3'
              >
                features
              </ScrollLink>
              <ScrollLink
                to='footer'
                smooth={true}
                duration={100}
                className='pointer text-decoration-none text-uppercase navList-color list-item list-menu-item3 sm-shadow text-center py-1 px-3'
              >
                contact us
              </ScrollLink>

              <Link
                className={`text-decoration-none text-uppercase navList-color list-item list-menu-item4 sm-shadow text-center py-1 px-3 ${hidden}`}
                to='/SignUp'
              >
                sign up
              </Link>
              <Link
                className={`text-decoration-none text-uppercase navList-color list-item list-menu-item4 sm-shadow text-center py-1 px-3 ${hidden}`}
                to='/signIn'
              >
                log in
              </Link>

              <Link
                className={`text-decoration-none text-uppercase navList-color list-item list-menu-item5 sm-shadow text-center py-1 px-3 ${hiddenLogout}`}
                to='/Entrypage'
              >
                Board
              </Link>

              <Link
                className={`text-decoration-none text-uppercase navList-color list-item list-menu-item2 sm-shadow text-center py-1 px-3 border-0 bg-transparent ${hiddenLogout}`}
                to="/"
                onClick={() => auth.signOut()}
              >
                Logout
              </Link>
              <img
                src={x}
                alt=''
                className={`width ${hiddenLogout}`}
                title={z}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarCom;
