import React from 'react';
import ReactECharts from 'echarts-for-react';


function BarChart() {
  // Specify the configuration items and data for the chart
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' }
    },
    legend: {},
    xAxis: [
      {
        name: 'malic_acid',
        type: 'category',
        position: 'bottom',
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          rotate: 30
        },
        data: [
          11.5, 12, 12.5, 13
        ]
      }
    ],
    yAxis: [
      {
        type: 'value',
        min: 0,
        max: 100,
        position: 'right',
      },
      {
        type: 'value',
        name: 'Alcohol',
        min: 0,
        max: 5,
        position: 'left',
      }
    ],
    series: [
      {
        type: 'bar',
        yAxisIndex: 0,
        data: [6, 32, 70, 86, 68.7, 100.7, 125.6, 112.2, 78.7, 48.8, 36.0, 19.3]
      },
    ]
  };

  return (
    <ReactECharts option={option} />
  );
}

export default BarChart;
