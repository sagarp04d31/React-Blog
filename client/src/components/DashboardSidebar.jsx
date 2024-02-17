import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { signoutSuccess } from '../redux/user/userSlice.js';
import { useDispatch } from 'react-redux';

function DashboardSidebar() {
  const dispatch = useDispatch();

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
    <div className="flex flex-col">
      <Link to="/dashboard?tab=profile">
        <Button> 
          Profile 
        </Button>
      </Link>
      <Button onClick={handleSignout}> Sign Out </Button>
    </div>
  )
}

export default DashboardSidebar
