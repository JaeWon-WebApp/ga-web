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

  const dataResult = (data) => {
    if(data.id === 'user'){
      let dimension = [];
      let metrics1 = [], metrics2 = [], metrics3 = [];
      data.info.rows.forEach(row => {
        dimension.push(row.dimensionValues[0].value);
        metrics1.push(row.metricValues[0].value);
        metrics2.push(row.metricValues[1].value);
        metrics3.push(row.metricValues[2].value);
      });
      return { id: data.id, dimension, metrics: [metrics1, metrics2, metrics3] }
    } else {
      let dimension = [];
      let metrics = [];
      data.info.rows.forEach(row => {
        dimension.push(row.dimensionValues[0].value);
        metrics.push(row.metricValues[0].value);
      });
      return { id: data.id, dimension, metrics }
    }
  }

  return (
    <>
      {isLoading ? (
        <div>
          대기중
        </div>
      ) : (
        <div>
          <div style={{width: '400px', height: '400px'}}>
            <DashboardChart data={dataResult(dashboardInfo.find(row => row.id === 'user'))} />
          </div>
          <div>
            <DashboardChart data={dataResult(dashboardInfo.find(row => row.id === 'device'))} />
          </div>
          <div>
            <DashboardChart data={dataResult(dashboardInfo.find(row => row.id === 'browser'))} />
          </div>
        </div>
      )}
    </>
  )
}

export default Dashboard
