import { 
  Navbar, 
  TextInput, 
  Button,
  Dropdown,
  Avatar
} from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoMdSearch } from 'react-icons/io';

function Header() {
  const { currentUser } = useSelector((state) => state.user)

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
        {
          currentUser ? 
          (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt='user' img={currentUser.profilePicture} rounded />
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
