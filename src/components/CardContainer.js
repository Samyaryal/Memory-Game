import React, {useState, useEffect} from 'react';
import Card from './Card';
import burger from '../images/burger';
import catfish from '../images/catfish';
import disneyland from '../images/disneyland'; 
import dragoon from '../images/dragoon';
import dumplings from './images/dumplings';
import eiffeltower  from '../images/eiffeltower';
import Noodles from '../images/Noodles';
import pokemon from '../images/pokemon';
import prawns from '../images/prawns';
import sushi from '../images/sushi;'

const CardContainer = (props) => {
  const {handleGameLogic, score, highScore} = props; 

  let images = [
    {
      src: burger,
      title: 'Burger',
      backgroundColor: 'rgb(255 223 137)',
      borderStyle: '1px solid rgb(255 223 137)',
    },
    {
      src: catfish,
      title: 'Catfish',
      backgroundColor: 'rgb(255 223 137)',
      borderStyle: '1px solid rgb(255 223 137)',
    },
    {
      src: disneyland,
      title: 'Disneyland',
      backgroundColor: 'rgb(255 223 137)',
      borderStyle: '1px solid rgb(255 223 137)',
    },
    {
      src: dragoon,
      title: 'Dragon',
      backgroundColor: 'rgb(255 223 137)',
      borderStyle: '1px solid rgb(255 223 137)',
    },
    {
      src: dumplings,
      title: 'Dumplings',
      backgroundColor: 'rgb(255 223 137)',
      borderStyle: '1px solid rgb(255 223 137)',
    },
    {
      src: eiffeltower,
      title: 'Eiffeltower',
      backgroundColor: 'rgb(255 223 137)',
      borderStyle: '1px solid rgb(255 223 137)',
    },
    {
      src: Noodles,
      title: 'Noodles',
      backgroundColor: 'rgb(255 223 137)',
      borderStyle: '1px solid rgb(255 223 137)',
    },
    {
      src: pokemon,
      title: 'Pokemon',
      backgroundColor: 'rgb(255 223 137)',
      borderStyle: '1px solid rgb(255 223 137)',
    },
    {
      src: prawns,
      title: 'Prawns',
      backgroundColor: 'rgb(255 223 137)',
      borderStyle: '1px solid rgb(255 223 137)',
    },
    {
      src: sushi,
      title: 'Sushi',
      backgroundColor: 'rgb(255 223 137)',
      borderStyle: '1px solid rgb(255 223 137)',
    },
    
  ]

  const [cards, setNewCards] = useState(images);

  const Shuffle =  ( newCards) => {
    for ( let i = newCards.length - 1; i > 0; i--){
      let randomIdx = Math.floor(Math.random() * i);
      [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
    }
  };
  useEffect (() => {
    const newCards  = [...cards];
    shuffle(newCards);
    setNewCards(newCards);
  }, [score, highScore]);

  return (
    <div> 
    {cards.map((card) => (
      <Card card={card} key={card.title} handleGameLogic={handleGameLogic} /> 
    ))}
    </div>
  );

 }


export default CardContainer;