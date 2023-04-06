import '../layout.css';
import './Footer.css';

import logoWwf from '../../../styles/branding/wwf.png';
import logoRspca from '../../../styles/branding/rspca.png';
import logoAdch from '../../../styles/branding/adch.jpg';
import logoCatsProtection from '../../../styles/branding/cats-protection.jpg';

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
        <section className='partnership-container'>
            <ul>
                <li>
                    <a className="navLink" href="https://www.wwf.org.uk" target="_blank">
                        <img src={logoWwf} alt="WWF" title="World Wrestling Federation" />
                    </a>
                </li>
                <li>
                    <a className="navLink" href="https://www.rspca.org.uk" target="_blank">
                        <img src={logoRspca} alt="RSPCA" title="Royal Society for the Protection of Animals" />
                    </a>
                </li>
                <li>
                    <a className="navLink" href="https://adch.org.uk" target="_blank">
                        <img src={logoAdch} alt="ADCH" title="Association of Dog and Cat Homes" />
                    </a>
                </li>
                <li>
                    <a className="navLink" href="https://www.cats.org.uk" target="_blank">
                        <img src={logoCatsProtection} alt="Cats Protection" title="Cats Protection" />
                    </a>
                </li>
            </ul>
        </section>
    </footer>);
}