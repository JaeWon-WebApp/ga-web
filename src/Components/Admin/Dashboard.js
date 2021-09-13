import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DashboardChart from './DashboardChart';

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardInfo, setDashboardInfo] = useState();

  useEffect(() => {
    const test = async () => {
      const dashboardInfo = await axios.get('/admins/dashboard');
      console.log(dashboardInfo.data.result);
      setDashboardInfo(dashboardInfo.data.result);
      setIsLoading(false);
    }
    test();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>
          대기중
        </div>
      ) : (
        <div>
          <div style={{width: '600px', height: '600px'}}>
            <DashboardChart data={dashboardInfo[0]} />
          </div>
          <div style={{width: '600px', height: '600px'}}>
            <DashboardChart data={dashboardInfo[1]} />
          </div>
          <div style={{width: '600px', height: '600px'}}>
            <DashboardChart data={dashboardInfo[2]} />
          </div>
        </div>
      )}
    </>
  )
}

export default Dashboard
