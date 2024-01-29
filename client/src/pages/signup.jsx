import { Label, TextInput, Button } from 'flowbite-react';
function Signup() {
  return(
    <div className="mt-10 p-5">
      <div>
        <span className="text-4xl">
          My Blog
        </span>
      </div>
      <div className="mt-6">
        <form className="flex flex-col gap-4">
          <Label 
            value="Your Username"
            className="text-xl"
          />
          <TextInput 
            type="text"
            placeholder="Username"
            id="username"
          />
          <Label 
            value="Email"
            className="text-xl"
          />
          <TextInput 
            type="text"
            placeholder="Email"
            id="email"
          />
          <Label 
            value="Password"
            className="text-xl"
          />
          <TextInput 
            type="text"
            placeholder="Password"
            id="password"
          />
          <Button 
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Signup;
