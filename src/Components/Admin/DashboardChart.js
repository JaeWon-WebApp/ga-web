import React, { useEffect, useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';

function DashboardChart(props) {
  const [chartData, setChartData] = useState({});
  const [chartOption, setChartOption] = useState({});
  const chartColors = ["#3cb4c8", "#50a0c8", "#3c78c8", "#5050c8", "#666699", "#3399FF", "#666666", "#FFCC66", "#6699CC", "#663366", "#9999CC",];

  useEffect(() => {
    console.log(props.data);
    switch (props.data.id) {
      case 'user': {
        let labels = props.data.info.dimensions.date.map(row => `${row.substring(4, 6)}. ${row.substring(6, 8)}`);
        setChartData({
          labels: labels,
          datasets: [
            {
              label: '1dayUser',
              data: props.data.info.metrics.active1DayUser,
              fill: false,
              backgroundColor: 'rgba(80, 160, 200, 0.5)',
              borderColor: 'rgba(80, 160, 200, 1)',
            },
            {
              label: '7dayUser',
              data: props.data.info.metrics.active7DayUser,
              fill: false,
              backgroundColor: 'rgba(60, 120, 200, 0.5)',
              borderColor: 'rgba(60, 120, 200, 1)',
            },
            {
              label: '28dayUser',
              data: props.data.info.metrics.active28DayUser,
              fill: false,
              backgroundColor: 'rgba(80, 80, 200, 0.5)',
              borderColor: 'rgba(80, 80, 200, 1)',
            },
          ],
        });
        break;
      }
      case 'device': {
        setChartData({
          labels: props.data.info.dimensions.device,
          datasets: [
            {
              label: 'device',
              data: props.data.info.metrics.activeUser,
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
      case 'browser': {
        setChartData({
          labels: props.data.info.dimensions.browser,
          datasets: [
            {
              label: 'browser',
              data: props.data.info.metrics.activeUser,
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
      {props.data.id === 'user' ?
        <Line data={chartData} /> :
        <Pie data={chartData} options={chartOption} />
      }
    </>
  )
}

export default DashboardChart
