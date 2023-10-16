import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: 'top',
          enabled: false, // Hide the values
        },
      },
    },
    dataLabels: {
      enabled: false, // Hide the data labels
    },
    xaxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
      position: 'bottom',
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
      crosshairs: {
        show: false, // Hide the crosshairs
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + '%';
        },
      },
    },
    grid: {
      show: false, // Hide horizontal grid lines
    },
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: 'Inflation',
      data: [9.3, 8.1, 9.0, 10.1, 7.0, 8.6, 9.2, 5.3, 6.4, 7.8, 6.9, 5.4],
      color: '#5A32EA', // Set the color for the highest value bar
    },
  ]);

  return (
    <div id="chart">
      <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
