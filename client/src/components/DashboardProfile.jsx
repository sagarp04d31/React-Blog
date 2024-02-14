import { useSelector } from "react-redux";
import { TextInput, Button } from "flowbite-react";

function DashboardProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return(
    <div className="flex flex-col gap-4 mx-auto w-1/2 my-10 font-mono text-2xl">
      <img
        src={ currentUser.profilePicture } 
        className="rounded-full w-20 self-center"
      />
      <form className="flex flex-col gap-4 w-full">
        <TextInput 
          id="username"
          placeholder="username" 
          defaultValue={currentUser.username}
        />
        <TextInput 
          id="email"
          placeholder="email" 
          defaultValue={currentUser.email}
        />
        <TextInput 
          id="password"
          placeholder="password"/>
        <Button> Save </Button>
      </form>
      <div className="flex flex-row justify-between">
        <span className="text-sm cursor-pointer text-red-600"> Delete </span>
        <span className="text-sm cursor-pointer"> SignOut </span>
      </div>
    </div>
  )
}

export default DashboardProfile
