import './App.css';
import BarChart from './components/bar-chart';
import React from 'react';

const data = [490, 291, 348, 245, 50]

const datas = [
  { item: 'Redmi', count: 490 },
  { item: 'Huawei', count: 291 },
  { item: 'IPhone', count: 348 },
  { item: 'Samsung', count: 245 },
  { item: 'Pixel', count: 50 },
];

function App() {

  
  return (
    <>
      <h1>D3 demo</h1>
      <BarChart width={600} height={400} data={data} />
    </>
  );
}

export default App;
