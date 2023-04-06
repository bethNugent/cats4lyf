import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Checkout from './pages/Checkout';
import About from './pages/About';
import './App.css';

/**
 * The main entry-point for the application.
 * Controls routing between pages, and sets a consistent site-wide layout.
 * 
 * @returns {JSX.Element} - The rendered component.
 */
export default function App()
{
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}