import { 
  Navbar, 
  TextInput, 
  Button,
  Dropdown,
  Avatar
} from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice.js';
import { signoutSuccess } from '../redux/user/userSlice.js';

function Header() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  
  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return(
    <Navbar className="flex flex-row justify-between border border-b-black">
      <Link to="/">
        <span className="text-2xl font-mono hover:text-orange-500">
          Blogs
        </span>
      </Link>
      <div>
      </div>
      <div>
      </div>
      <Button
        onClick={() => dispatch(toggleTheme())}
      >
      { theme === 'light' ? 
        (
          <div className="rounded-full">
            Light
          </div>
        ) : 
        (
          <div className="rounded-full">
            Dark
          </div>
        ) 
      }
      </Button>
      { 
        currentUser ? 
        (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded/>
            }
          >

            <Dropdown.Header>
              <span> {currentUser.username} </span>
            </Dropdown.Header>
            <Link to="/dashboard?tab=profile">
              <Dropdown.Item>
                Profile
              </Dropdown.Item>
            </Link>
            <Dropdown.Item onClick={handleSignout}>
              Sign Out
            </Dropdown.Item>
            <Dropdown.Divider />

          </Dropdown>
        ) :
        (
          <Link to="/signin">
            <Button>
              Sign In
            </Button>
          </Link>
        )
      }
    </Navbar>
  )
}

export default Header
