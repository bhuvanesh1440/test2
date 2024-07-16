import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return <>
  <BrowserRouter basename='/test2'>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
}

export default App;
