import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Checkout from './pages/Checkout';
import About from './pages/About';

import HeaderBar from './components/HeaderBar';

import './App.css';

export default function App()
{
    return (
        <div className="App">
            <BrowserRouter basename={ (process.env.NODE_ENV === 'development') ? "/" : "/cats4lyf" }>
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