import { Link } from 'react-router-dom';
import './HeaderBar.css';

export default function HeaderBar() {

    return(<header className="header-container">
        <section className="logo-section">
            <Link to="/"><i className="fa-solid fa-cat"></i></Link>

        </section>
        <section className="title-section">
            <span className="title">Catz 4 Lyf</span>
        </section>
        <nav className="nav-section">
            <Link to="/about"><i className="fa-solid fa-question"></i></Link>
            <Link to="/checkout"><i className="fa-solid fa-basket-shopping"></i></Link>
        </nav>
    </header>);
}