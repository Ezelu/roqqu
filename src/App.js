import './App.module.css';
import Home from "./pages/Home/Home";
import Exchange from "./pages/Exchange/Exchange";
import { Routes, Route } from 'react-router-dom'



export default function App () {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/exchange' element={<Exchange />} />
      </Routes>
    </div>
  )
}