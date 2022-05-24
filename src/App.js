import './App.css';
import React from 'react';
import Bar from './components/bar-chart'
import Pie from './components/pie-chart'

const data = [
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
      <Bar pData={data} />;
    </>
  );
}

export default App;
