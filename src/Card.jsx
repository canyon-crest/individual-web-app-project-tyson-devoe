import './Card.css'
import { useState } from 'react'

function Card({name, description, price}){

    const [count, setCount] = useState(0);

    return (
        <div className='myCard'>
            <h2>{name}</h2>
            <p>{description}</p>
            {price && <p className="card-price">{price}</p>}
            <button onClick={() => setCount(count+1)}>Add to Cart</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <p>In cart: {count}</p>
        </div>
    )
}
export default Card
