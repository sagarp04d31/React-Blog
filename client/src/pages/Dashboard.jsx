import DashboardProfile from "../components/DashboardProfile.jsx";
import DashboardSidebar from "../components/DashboardSidebar.jsx";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if(tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search])

  return(
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="md:w-56">
        <DashboardSidebar />
      </div>
      {tab === 'profile' && <DashboardProfile />}
    </div>
  )
}

export default Dashboard
