import React, { useEffect, useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';

function DashboardChart(props) {
  const [chartData, setChartData] = useState({});
  const [chartOption, setChartOption] = useState({});
  const chartColors = ["#336699", "#99CCFF", "#999933", "#666699", "#CC9933", "#006666", "#3399FF", "#993300", "#CCCC99", "#666666", "#FFCC66", "#6699CC", "#663366", "#9999CC",];
  
  useEffect(() => {
    console.log(props.data)
    switch (props.data.id) {
      /* case 'user':{
        let labels = props.data.dimension.map(row => `${row.substring(4, 6)}. ${row.substring(6, 8)}`);
       setChartData({
        labels: labels,
        datasets: [
          {
            label: '1dayUser',
            data: props.data.metrics[0],
            fill: false,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
          },
          {
            label: '7dayUser',
            data: props.data.metrics[1],
            fill: false,
            backgroundColor: 'rgba(65, 192, 192, 0.2)',
            borderColor: 'rgba(65, 192, 192, 1)',
          },
          {
            label: '28dayUser',
            data: props.data.metrics[2],
            fill: false,
            backgroundColor: 'rgba(55, 192, 192, 0.2)',
            borderColor: 'rgba(55, 192, 192, 1)',
          },
        ],
       });
       break;
      } */
      case 'browser':{
        setChartData({
          labels: props.data.dimension,
          datasets: [
            {
              label: 'browser',
              data: props.data.metrics,
              backgroundColor: chartColors,
            },
          ],
        });
        setChartOption({
          plugins: {
            legend: {
              display: true,
              position: 'right',
            },
          },
          elements: {
            arc: {
              borderWidth: 0,
            },
          },
        });
        break;
      }
      default:
        break;
    }
  }, []);

  return (
    <>
    {props.data.id === 'user' ? (
      <Line data={chartData} />
    ) : (
      <Pie data={chartData} options={chartOption} />      
    )}
    </>
  )
}

export default DashboardChart