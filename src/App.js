import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Checkout from './Checkout';
import About from './About';

function App() {
  return (
    <div className="App">

<BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/about">About</Link>
          
        </nav>

        <Routes>
          <Route path="/" element={ <Home catsArray={allCats} />} />
          <Route path="/checkout" element={ <Checkout />} />
          <Route path="/about" element={ <About />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
