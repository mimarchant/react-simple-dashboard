import React from 'react';
import { Bar } from '@ant-design/charts';

const DemoBar = props => {
  const dummyData = [
    {
      year: '2021',
      value: 225,
    },
    {
      year: '2020',
      value: 180,
    },
    {
      year: '2019',
      value: 103,
    },
    {
      year: '2018',
      value: 45,
    },
    {
      year: '2017',
      value: 17,
    },
  ];
  var config = {
    data: dummyData,
    xField: 'value',
    yField: 'year',
    seriesField: 'year',
    legend: { position: 'top-left' },
  };
  return <Bar {...config} />;
};

export default DemoBar;