import '../layout.css';
import './Footer.css';

/**
 * The global footer for the website.
 * 
 * @returns {JSX.Element} - The rendered component.
 */
export default function Footer()
{
    return (<footer className='footer-container'>
        <nav className='nav-section'>
            <ul>
                <li><a className="navLink" href="https://www.wwf.org.uk" target="_blank">WWF</a></li>
                <li><a className="navLink" href="https://www.rspca.org.uk" target="_blank">RSPCA</a></li>
                <li><a className="navLink" href="https://adch.org.uk" target="_blank">ADCH</a></li>
                <li><a className="navLink" href="https://www.cats.org.uk" target="_blank">CATS PROTECTION</a></li>
            </ul>
        </nav>
    </footer>);
}