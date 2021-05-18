import './App.css';
import Pie from './components/pie-chart'

const data = [
  {item: 'Redmi', count: 490},
  {item: 'Huawei', count: 291},
  {item: 'IPhone', count: 348},
  {item: 'Samsung', count: 245},
  {item: 'Pixel', count: 56}
];



function App() {
  return (
    <>
    <h1>D3 demo</h1>
    <Pie data={data}/>
    </>
  );
}

export default App;
