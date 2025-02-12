import { useState } from 'react';
import './App.css'

function App() {
    let [counter,souryaCounter]=useState(5);//use state is a hook to update the state returns 2 parameters 1st is the current state and 2nd is the function to update the state 
    let addValue = ()=>{
        //counter++;
        // if(counter<20){
        //   souryaCounter(counter+1);
        //   souryaCounter(counter+1);
        //   souryaCounter(counter+1);
            
        // }
//as we know that in fibre it takes a group of bunches and updates it similarly here we are updating it only for single time(same value increased)
        // souryaCounter(counter+1);//used to update the state dynamically
        // souryaCounter(counter+1);
        // souryaCounter(counter+1);
        // souryaCounter(counter+1);
        //so we are using a previous state(just like promise) to take previous value after updating it only it goes for next
       if (counter<30) {
         souryaCounter((prevcounter)=>prevcounter+1);//used to update the state dynamically
         souryaCounter((prevcounter)=>prevcounter+1);
         souryaCounter((prevcounter)=>prevcounter+1);
         souryaCounter((prevcounter)=>prevcounter+1);
         console.log(counter);
       }
    }
    let  decreaseValue = ()=>{
        //counter--;
        // if(counter>0){
        //     counter--;
        // }
        // souryaCounter(counter-1);
        // souryaCounter(counter-1);
        // souryaCounter(counter-1);
        // souryaCounter(counter-1);
        if (counter>0) {
          souryaCounter((e)=>e-1);
          souryaCounter((e)=>e-1);
          souryaCounter((e)=>e-1);
          souryaCounter((e)=>e-1);
          console.log(counter);
        }
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
