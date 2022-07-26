import { useContext, useState } from "react";
import { memoCardsContext } from "../context/MemoCardsProvider";
import { CARDS } from "../utils/cards";

export const useMemoCards = () => {
    const { setCards } = useContext(memoCardsContext);

    const shuffleCards = () => {

        const shuffleCards = [...CARDS, ...CARDS]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({
                ...card, id: Math.random()
            }));
        setCards(shuffleCards);
    }
    return { shuffleCards }
}

export default useMemoCards