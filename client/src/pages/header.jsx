import { 
  Navbar, 
  TextInput, 
  Button,
  Dropdown,
  Avatar
} from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IoMdSearch } from 'react-icons/io';
import { toggleTheme } from '../redux/theme/themeSlice.js';

function Header() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  return(
    <Navbar className="border border-cyan">
      <Link to="/">
        <span className="text-2xl font-mono hover:text-orange-500">
          My Blogs
        </span>
      </Link>
      <form className="flex flex-row">
        <TextInput 
          type="text"
          placeholder='Search...'
          rightIcon={IoMdSearch}
        />
      </form>
      <Button
        onClick={() => dispatch(toggleTheme())}
      >
        { theme === 'light' ? "Light" : "Dark" }
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
            <Dropdown.Item>
              Profile
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              Sign Out
            </Dropdown.Item>

          </Dropdown>
        ) :
        (
          <Button>
            Sign In
          </Button>
        )
      }
    </Navbar>
  )
}

export default Header
