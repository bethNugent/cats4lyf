import CatCard from '../CatCard/CatCard';
import './CatList.css';

export default function CatList({cats, onClick})
{
    return (
       <section className='cat-box'>
            {cats.map((cat, index) => <CatCard key={index} cat={cat} onClick={() => onClick(cat)} />)}
       </section>
    );
}