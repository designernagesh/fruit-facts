import { useState } from "react";
import './App.css';

function App() {
  const fruits = [{name: 'Banana', fact: 'I am yellow in color' },
            { name: 'Peach', fact: 'I have a fuzzy skin' },
            { name: 'Apple', fact: 'I tend to be crunchy' }];
  const [ showFruits, setShowFruits ] = useState(false);
  const btnMessage = 'Show Me Fruit Facts';
  const btnShowMessage = 'Fruit Facts are Boring';

  const factHandler = () => {
    setShowFruits(!showFruits);
    // setButtonMessage('Fruit Facts are Boring');
  }
  const fruitsList = <ul>
  {fruits.map( (fruit, i) => {
    return (
      <li key={i}> 
      <h5>{ fruit.name }</h5>
      <p>{ fruit.fact }</p>
      </li>
    )
  })}
</ul>
  return (
    <>
      <h1>Fruit Facts</h1>
      <button onClick={ factHandler }> { showFruits ? btnShowMessage  : btnMessage } </button>
      { showFruits ? fruitsList : "Click the Button" }
    </>
  );
}

export default App;
