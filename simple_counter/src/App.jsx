import { SecoundsCounter } from './SecondsCounter';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

function App() {

  let counterState = 0;


  return (
    <>
      <div className="app__container">
      <div id="counter"></div>
      {window.onload =  () => {
        setInterval(() => {
          ReactDOM.createRoot(document.querySelector('#counter')).render(
            <SecoundsCounter seconds={counterState} />
            
          )
          {counterState = counterState + 1}
        },1000);
      }}

      </div>
        
    </>
  )
}

export default App
