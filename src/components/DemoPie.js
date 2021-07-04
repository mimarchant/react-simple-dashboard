import React from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie = props => {
  const dummyData = [
    {
      type: '2021',
      value: 337,
    },
    {
      type: '2020',
      value: 128,
    },
    {
      type: '2019',
      value: 68,
    },
    {
      type: '2018',
      value: 37,
    },
    {
      type: '2017',
      value: 10,
    }

  ];
  const config = {
    appendPadding: 10,
    data: dummyData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: function content(_ref) {
        var percent = _ref.percent;
        return ''.concat((percent * 100).toFixed(0), '%');
      },
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-active' }],
  };
  return <Pie {...config} />;
};

export default DemoPie;