import React from 'react'

const Header = () => {
  const {score, highScore} = props;

  return (
    <header>
    <h1>Memory Game</h1>
    <div>
    <p>score = {score}</p>
    <p>HighScore = {highScore}</p>
    </div>
    </header>
  )
}

export default Header;