// import React from 'react';
// import { Pie } from 'react-chartjs-2';

// const PieChart = () => {
//   const data = {
//     labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
//     datasets: [
//       {
//         data: [30, 20, 25, 15],
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#66BB6A'],
//         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#66BB6A'],
//       },
//     ],
//   };

//   const options = {
//     cutoutPercentage: 70, // Adjust the size of the center hole
//     tooltips: {
//       enabled: false, // Disable tooltips
//     },
//   };

//   return (
//     <div>
//       <Pie data={data} options={options} />
//       <div className="center-label">
//         <p>Total</p>
//         <p>100%</p>
//       </div>
//     </div>
//   );
// };

// export default PieChart;



import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Piechart = () => {
  const series = [44, 55, 41, 17, 15];

  const options = {
    chart: {
      type: 'donut',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
            outerHeight :300,
            height :500
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
};

export default Piechart;

