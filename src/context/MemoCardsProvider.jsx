import { createContext, useEffect, useState } from "react"

export const memoCardsContext = createContext();
const MemoCardsProvider = ({ children }) => {
    const [cards, setCards] = useState([])
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [turns, setTurns] = useState(0);

    const handleClick = (card) => {
        console.log(choiceOne);
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            //Si las  cartas coinciden
            if (choiceOne.emoji === choiceTwo.emoji) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.emoji === choiceOne.emoji) {
                            return { ...card, matched: true };
                        } else {
                            return card;
                        }
                    })
                })
                resetTurn();
            } else {
                console.log('no match');
                resetTurn();
            }
        }
    }, [choiceOne, choiceTwo,turns])

    /* reiniciar los cambios e incrementar el turno */
    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(prevTurns => prevTurns + 1);
    }
    return (
        <memoCardsContext.Provider value={{
            setCards,
            cards,
            handleClick,
            choiceOne,
            choiceTwo
        }}>
            {children}
        </memoCardsContext.Provider>
    )
}

export default MemoCardsProvider