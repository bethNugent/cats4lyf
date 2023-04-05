import { Link } from 'react-router-dom';
import './HeaderBar.css';

export default function HeaderBar() {

    return(<header className="header-container">
        <section className="logo-section">
            <Link to="/">Home</Link>

        </section>
        <section className="title-section">
            <span className="title">Catz 4 Lyf</span>
        </section>
        <nav className="nav-section">
            <Link to="/checkout">Checkout</Link>
            <Link to="/about">About</Link>
        </nav>
    </header>);
}