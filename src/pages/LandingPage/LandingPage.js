import './LandingPage.css';

import leaderboardImage from './images/leaderboard.png';

export default function LandingPage() {

    return(<div className="landing-container">
        <section className='leaderboard'>
            <img src={leaderboardImage} alt="Paws For Thought" title="Paws For Thought" />
        </section>
    </div>);
}