import './App.css';
import CardsContainer from './components/CardsContainer';
import useMemoCards from './hooks/useMemoCards';

function App() {
  const { shuffleCards } = useMemoCards();
  return (
    <div className="App">
      <h1>Memo Cards</h1>
      <button onClick={shuffleCards} >New Game</button>
      <CardsContainer />
    </div>
  );
}

export default App;
