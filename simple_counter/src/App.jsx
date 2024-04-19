import { SecoundsCounter } from './SecondsCounter';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

function App() {

  let counterState = 0;
  
  {window.onload =  () => {
    let counterContainer = ReactDOM.createRoot(document.querySelector('#counter'));
    setInterval(() => {
      counterContainer.render(
        <SecoundsCounter seconds={counterState} />
        
      )
      {counterState = counterState + 1}
    },1000);
  }}
 

  return (
    <>
      <div className="app__container">
      <div id="counter"></div>
      

      </div>
        
    </>
  )
}

export default App
