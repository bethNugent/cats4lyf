import './LandingPage.css';

import leaderboardImage from './images/leaderboard.png';

export default function LandingPage()
{

    return (<div className="landing-container">
        <section className='leaderboard'>
            <img src={leaderboardImage} alt="Paws For Thought" title="Paws For Thought" />
        </section>
        <hr className='divider' />
        <section className='two-column'>
            <article>
                <header>
                    How can I adopt a cat with Cats-4-Lyf?
                </header>
                <p>Adopting a cat with Cats Protection is a three-step process. First, you'll need to find a cat in your local area using our Catalogue. Then, you'll be contacted by someone from your local branch or centre. They'll take you through the process of meeting the cat and adopting them.</p>
                <p>Alternatively, you can visit one of our centres with no appointment. Our centre staff and volunteers can discuss what you're looking for and help you choose the right cat for you. You can find out more about choosing a cat in our guide.</p>
            </article>
            <article>
                <header>
                    I live in a flat or small building. Can I still adopt a cat?
                </header>
                <p>If you live somewhere with minimal access to the outdoors, you may still be able to adopt a cat. Cats that have to remain indoors for health issues such as poor vision or Feline Immunodeficiency Virus (FIV) still make great companions.</p>
                <p>Some older or more timid cats can often live as an indoor cat very successfully. There are products that can be used to screen windows so that you can safely provide your cat with fresh air. Remember to never let your cat out onto a narrow ledge or balcony, as heights are a risk for all animals.</p>
            </article>
        </section>
        <hr className='divider' />
    </div>);
}