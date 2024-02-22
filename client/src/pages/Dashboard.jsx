import DashboardProfile from "../components/DashboardProfile.jsx";
import DashboardSidebar from "../components/DashboardSidebar.jsx";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import DashPosts from "../components/DashPosts.jsx";
import DashUsers from "../components/DashUsers.jsx";
import DashboardComments from '../components/DashboardComments.jsx';

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
      <div>
        <DashboardSidebar />
      </div>
      {tab === 'profile' && <DashboardProfile />}
      {tab === 'posts' && <DashPosts />}
      {tab === 'users' && <DashUsers />}
      {tab === 'comments' && <DashboardComments />}
    </div>
  )
}

export default Dashboard
