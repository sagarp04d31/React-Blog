import Header from "./header.jsx";
import { Link } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import { Navbar, Button, Label, TextInput } from 'flowbite-react';

function Register() {
  return(
    <div>
      <Header />
      <h1 className="text-2xl font-mono text-center"> Register </h1>
      <Button className="font-mono"> Submit </Button>
    </div>
  )
}

export default Register
