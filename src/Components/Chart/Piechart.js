// import React from 'react';
// import DonutChart from 'react-donut-chart';

// const DonutChartWithLabel = () => {
//   return (
//     <div>
//       <DonutChart
//         data={[{
//           label: 'Customers',
//           value: 65,
//         }]}
//         height={150}
//         width={150}
//       />
//       <div className="center-label">
//         <p>65% Customers</p>
//       </div>
//     </div>
//   );
// };

// export default DonutChartWithLabel;






import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Piechart = () => {
  const series = [65,35];

  const options = {
    chart: {
      type: 'donut',
      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return (
    <div className="text-center">
  <div className="pie-chart-container">
    <ReactApexChart options={options} series={series} type="donut" />
    <div className="chart-label">
      65%<br />
      Total New<br />
      Customers
    </div>
  </div>
</div>

  );
};

export default Piechart;


