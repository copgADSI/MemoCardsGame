import { useContext } from 'react';
import { memoCardsContext } from '../context/MemoCardsProvider';
import './Styles.css';

const SingleCard = ({ card }) => {
    const { handleClick, choiceOne, choiceTwo } = useContext(memoCardsContext);
    return (
        <div className="card">
            <div>
                <button
                    className={
                        card.matched ||  choiceOne === card  ? 'known_card' : ''
                    }
                    onClick={() => handleClick(card)}
                >
                    {  card.matched || choiceOne === card  ? card.emoji : '?'}
                </button>
            </div>
        </div>
    )
}

export default SingleCard