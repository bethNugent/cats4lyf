import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Checkout from './pages/Checkout';
import About from './pages/About';

import './App.css';
import HeaderBar from './components/HeaderBar';

export default function App()
{
    return (
        <div className="App">
            <BrowserRouter>
                <HeaderBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}