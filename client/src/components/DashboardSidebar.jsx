import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

function DashboardSidebar() {
  return(
    <div className="flex flex-col">
      <Link to="/dashboard?tab=profile">
        <Button> 
          Profile 
        </Button>
      </Link>
      <Button> Sign Out </Button>
    </div>
  )
}

export default DashboardSidebar
