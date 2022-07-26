import React, { useContext } from 'react'
import { memoCardsContext } from '../context/MemoCardsProvider';
import SingleCard from './SingleCard';
import './Styles.css';
const CardsContainer = () => {
    const { cards,choiceOne, choiceTwo } = useContext(memoCardsContext);
    console.log(choiceOne, choiceTwo);

    return (
        <div className='cards'>
            {cards.map((card =>
                (
                    <SingleCard key={card.id} card={card} />
                )
            ))}
        </div>
    )
}

export default CardsContainer