import React from 'react';
import { Line } from 'react-chartjs-2';

function Landing(props) {
  const data = {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: '# of No Votes',
        data: [1, 2, 1, 1, 2, 2],
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  };
  
  const moveDashboard = () => {
    props.history.push({
      pathname: '/admin'
    })
  }

  return (
    <div>
      <button onClick={moveDashboard}>대시보드</button>
      <div style={{width: '400px', height: '400px'}}>
        <Line data={data}  />
      </div>
    </div>
  )
}

export default Landing
