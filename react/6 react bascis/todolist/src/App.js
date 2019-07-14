import React from 'react';
import logo from './logo.svg';
import './App.css';


const Card = props => {
  return (
    <div style={{ margin: '1em' }}>
      <img alt="avatar" style={{ width: '70px' }} src={props.avatar_url} />
      <div>
        <div style={{ fontWeight: 'bold' }}>{props.name}</div>
        <div>{props.blog}</div>
      </div>
    </div>
  )
}

const CardList = props => (
  <div>
    {props.cards.map(card => (
      <Card {...card} />
    ))}
  </div>
)

const App = () => {
  const [cards, setCards] = useState([])

  return (
    <div>
      <CardList cards={cards} />
    </div>
  )
}

export default App;
