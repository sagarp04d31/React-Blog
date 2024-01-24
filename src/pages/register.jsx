import { Navbar, Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io'

function Register() {
  return(
    <div>
      <Navbar className="border border-cyan">
        <Link to="/">
          <span className="text-2xl font-mono hover:text-orange-500">
            Blog
          </span>
        </Link>
        <form className="flex flex-row">
          <TextInput 
            type="text"
            placeholder='Search...'
            rightIcon={IoMdSearch}
          />
        </form>
        <Button>
          Sign In
        </Button>
      </Navbar>
      <h1 className="text-2xl font-mono text-center"> Register </h1>
      <Button className="font-mono"> Submit </Button>
    </div>
  )
}

export default Register
