import { Link } from 'react-router-dom';
import '../layout.css';
import './Header.css';

/**
 * The global header for the website.
 * 
 * @returns {JSX.Element} - The rendered component.
 */
export default function Header()
{
    return(<header className='header-container'>
        <section className='logo-section'>
            <p className='title'>Catz-4-Lyf</p>
            <p className='subtitle'>Feral Cat Adoption Agency</p>
        </section>
        <nav className='nav-section'>
            <ul>
                <li><Link className="navLink" to="/">HOME</Link></li>
                <li><Link className="navLink" to="/catalogue">CATALOGUE</Link></li>
                <li><Link className="navLink" to="/about">ABOUT</Link></li>
                <li><Link className="navLink" to="/checkout">CHECKOUT</Link></li>
            </ul>
        </nav>
    </header>);
}