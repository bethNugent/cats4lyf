import './CatCard.css';

export default function CatCard({cat, onClick})
{
    return (
        <div className='cat-card' onClick={onClick}>
            <img src={cat.url} alt={cat.name} title={cat.name} />
            <p>{cat.name}</p>
        </div>
    );
}