import * as React from 'react';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-bootstrap4';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import { Animation } from '@devexpress/dx-react-chart';



const Bar =({pData}) => {

    return (
      <div className="card">
        <Chart
          data={pData}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="count"
            argumentField="item"
            color='red'
          />
          <Title text="World population" />
          <Animation />
        </Chart>
      </div>
    );
  }

  export default Bar;
