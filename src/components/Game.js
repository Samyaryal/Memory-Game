import React, {useState} from 'react';
import Header from './Header'
import CardContainer from './CardContainer';

const Game = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardsArr, addCard] = useState([]);

  const handleScore = () => {
    setScore( prevScore => prevScore+1);
  }

  const handleHighScore = () =>{
    setHighScore(score);
  }

  const handleCard = () => {
    addCard ((prevArr) => [...prevScore, cardName]); 
  }

  const reset = ()=>{
    setScore(0);
    addCard([]);
  }

  const handleGameLogic = (cardName) => {
    if(!cardsArr.includes(cardName)){
      handleCard(cardName);
      handleScore();
    }else {
      handleHighScore();
      reset();
    }
  }

  return (
    <div>
    <Header score={score} highScore={highScore}/>
    <CardContainer handleGameLogic={handleGameLogic}
    score={score}
    highScore={highScore}
    />
    </div>
    
  )
}
export default Game;