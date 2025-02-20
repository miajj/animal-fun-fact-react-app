import './App.css'
import { animals } from './animals';

function App() {

  const getRandomNumber = (max) => {
    return Math.floor(Math.random()*max);
  }

  const displayFact = (event) => {
    const facts = animals[event.target.alt].facts;
    const fact = facts[getRandomNumber(facts.length)];
    document.getElementById("fact").innerHTML=fact;
  }
  const FunFacts = () => {
    return Object.entries(animals).map(([name, animal]) => {
      return <img src={animal.image} className='animal' key={name} alt={name} onClick={displayFact} />
    });
  }

  return (
    <>
      <div>
        <h1>Click an animal for a fun fact!</h1>
        <img src='images/ocean.jpg' className='background' />
        <p id="fact"></p>
        <div className='animals'>
          <FunFacts />
        </div>
      </div>
    </>
  )
}

export default App
