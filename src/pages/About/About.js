import './About.css';

export default function About()
{
    return (<div className="about-container">
        <hr className='divider' />
        <h3 className='section-title'>
            ABOUT US
        </h3>
        <hr className='divider' />
        <section className='articles'>
            <article>
                <header>
                    Overview
                </header>
                <p>
                    Cats-4-Lyf is a fictional website created as a coursework project, to showcase working with React.
                    It was produced over two days, by a four-person team, for a Master Software Development course, run by CodeNation. 
                </p>
            </article>
            <article>
                <header>
                    The Team
                </header>
                <p>
                    <ul>
                        <li>Elizabeth Nugent</li>
                        <li>Craig Doherty</li>
                        <li>Miguel Acevedo</li>
                        <li>Peter Matthews</li>
                    </ul>
                </p>
            </article>
        </section>
    </div>);
}