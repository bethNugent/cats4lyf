import './CatCard.css';

export default function CatCard({cat})
{
    return (
        <div className='cat-card'>
            <img src={cat.image} alt={cat.name} title={cat.name} />
            <p>{cat.name}</p>
        </div>
    );
}