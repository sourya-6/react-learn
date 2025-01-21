import { useState } from 'react';
import './App.css'

function App() {
    let [counter,souryaCounter]=useState(5);//use state is a hook to update the state
    let addValue = ()=>{
        //counter++;
        if(counter<20){
            counter++;
        }

        souryaCounter(counter);//used to update the state dynamically
        console.log(counter);
    }
    let  decreaseValue = ()=>{
        //counter--;
        if(counter>0){
            counter--;
        }
        souryaCounter(counter);
        console.log(counter);
    }

  return (
    <>
    <h1>Sourya learning area</h1>
    <h2>Counter:{counter}</h2>
    <button onClick={addValue}  >increase:{counter}</button>
    <br />
    <button onClick={decreaseValue}>decrease:{counter}</button>
      <footer>
        <h1>Footer:{counter}</h1>
      </footer>
    </>
  )
}

export default App
