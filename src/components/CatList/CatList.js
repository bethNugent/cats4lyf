import CatCard from '../CatCard/CatCard';
import './CatList.css';

export default function CatList({cats})
{
    return (
       <section className='cat-box'>
            {cats.map(cat => <CatCard cat={cat} />)}
       </section>
    );
}