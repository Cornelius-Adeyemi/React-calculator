import React, { useContext, useEffect, useRef } from 'react';

import "./App.css";
import { InfoProvider, provider } from './myhook';

/* eslint-disable */

function Button(props){

  const info = useContext(provider);

  const keyDownHandler = (event)=>{
    
     const arrayOfElement = document.getElementsByName(event.key);

     if(arrayOfElement.length !==0){
     const element = arrayOfElement[0]  
     element.click();
     element.style.backgroundColor = "rgb(214, 214, 72)";

     setTimeout(()=>{
      element.style.backgroundColor = "yellow";
     },200)

     }
  }


  useEffect( ()=>{
    document.addEventListener("keydown", keyDownHandler);
    return ()=>{
      document.removeEventListener("keydown", keyDownHandler);
    }
  })


  return (
    <div className="buttonPad" >
      
      <div data-id="reset" id='clear' onClick={info.reset} className="button">AC</div>
      <div data-id="back" name="BackSpace" id="Backspace" onClick={info.erase}  className="button">{"<--"}</div>
      <div data-id="/" name="/" id="divide" onClick={info.arithmeticOperations} className="button">/</div>
      <div data-id="*" name="*" id="multiply" onClick={info.arithmeticOperations} className="button">X</div>

      <div data-id="1" name="1" id='one' onClick={info.clickNumber} className="button">1</div>
      <div data-id="2" name="2" id="two" onClick={info.clickNumber} className="button">2</div>
      <div data-id="3" name="3" id="three" onClick={info.clickNumber} className="button">3</div>
      <div data-id="-" name="-" id="substract" onClick={info.arithmeticOperations}  className="button">-</div>

      <div data-id="4" name="4" id="four" onClick={info.clickNumber}  className="button">4</div>
      <div data-id="5" name="5" id="five" onClick={info.clickNumber} className="button">5</div>
      <div data-id="6" name="6" id="six" onClick={info.clickNumber} className="button">6</div>
      <div data-id="+" name="+" id="add" onClick={info.arithmeticOperations} className="button">+</div>

      <div data-id="7" name="7" id="seven" onClick={info.clickNumber} className="button">7</div>
      <div data-id="8" name="8" id="eight" onClick={info.clickNumber} className="button">8</div>
      <div data-id="9" name="9" id="nine" onClick={info.clickNumber} className="button">9</div>

      <div data-id="=" name="=" id="equals" onClick={info.equalHandler} className="button zero">=</div>
      <div data-id="0" name="0" id="zero" onClick={info.clickNumber} className="button dot">0</div>
      <div data-id="." name="." id="decimal" onClick={info.clickNumber} className="button equal">.</div>
      
      
      </div>
    
  )
}


function Display(props){

  const info = useContext(provider);
  

  const secondRef = useRef(null);
  const firstRef = useRef(null);

 
 // eslint-disable-next-line
useEffect(()=>{
 secondRef.current.innerText =(info.state.boolValForSecond)?info.state.secondDisplay:info.state.staticSecond; 
 firstRef.current.innerText = (info.state.boolEqual)?info.state.firstDisplay:info.state.staticFirst;

 

},[info.state.secondDisplay,  info.state.firstDisplay,info.state.boolValForSecond,info.state.boolEqual ])
  
 
  return (<>
    <div ref={firstRef}  className="display-1" ></div>
    <div ref={secondRef} className="display-2" id='display'>555</div>
  </>)
}







export default function App (props) {
  return(<div className="app-div">
    <InfoProvider>
     <Display/>
     <Button/>
     </InfoProvider>
      By --- Adebisi Adeyemi
   

    

  </div>)
}