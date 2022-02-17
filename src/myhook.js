import React, {useState, createContext} from "react";

/* eslint-disable */
const defaultState = {firstDisplay:"",staticSecond:"", boolValForSecond:true,secondDisplay:"0", boolValForFirst:true, boolEqual:true,staticFirst:""}

function useProvider(){

 const [state, setState] = useState(defaultState);


 const clickNumber = (event)=>{
     const pattern = /\.$/;
     const pat2 = /\./;
     const result = pattern.test(state.secondDisplay);
     const result2 = pat2.test(state.secondDisplay);
     if(state.secondDisplay.length>15){

     }else{

     if(result2 && event.target.dataset.id==="."){

     }else{

     if(state.secondDisplay==="" && event.target.dataset.id==="."){

        setState((prevState)=>{return{...prevState, secondDisplay: "0" + event.target.dataset.id, boolValForSecond:true, boolValForFirst:true, boolEqual:true}} );

     }else{
     
     if(result && event.target.dataset.id==="."){

     }else{

     if(state.secondDisplay ==="0"){

      if(event.target.dataset.id==="."){

        setState((prevState)=>{return{...prevState, secondDisplay: prevState.secondDisplay + event.target.dataset.id, boolValForSecond:true, boolValForFirst:true, boolEqual:true}} );

      }else{

        setState((prevState)=>{return{...prevState, secondDisplay: event.target.dataset.id, boolValForSecond:true, boolValForFirst:true, boolEqual:true}} );
      }// for the inner else

    }else{
    

     setState((prevState)=>{return{...prevState, secondDisplay: prevState.secondDisplay + event.target.dataset.id, boolValForSecond:true, boolValForFirst:true, boolEqual:true}} );

     }

    }

    }//the else bracket for (state.secondDisplay==="" && event.target.dataset.id===".")
    }// the else bracket for (result2 && event.target.dataset.id===".")
}
    }// the bracket for the function


const arithmeticOperations = (event)=>{

    

    

    if(state.boolValForSecond){
        
        setState(prev=>{return{...prev,staticSecond:prev.secondDisplay}});
    }
    
    const firstDisplayValue = `${(state.secondDisplay)?state.secondDisplay:state.staticSecond}` + ` ` + `${(event.target.dataset.id==="*")?"X":event.target.dataset.id}`;

    if(state.boolValForFirst && state.firstDisplay===""){
        console.log("i dey here")
        setState((prevState)=>{return{...prevState, firstDisplay: firstDisplayValue, secondDisplay:"" ,boolValForSecond:false, boolValForFirst:false, boolEqual:true}} );
    }else if(state.boolValForFirst===false && state.secondDisplay===""){
        setState((prevState)=>{return{...prevState, firstDisplay: firstDisplayValue, secondDisplay:"" ,boolValForSecond:false, boolValForFirst:false, boolEqual:true}} );
    }else if(state.boolValForFirst && state.secondDisplay!=="" && state.firstDisplay!==""){
    //     let newDisplayFirst;
    //    if(/X$/.test(state.firstDisplay)){
    //         newDisplayFirst = state.firstDisplay.replace("X","*");
    //    }
    let result;
       switch (event.target.dataset.id) {
           case "/":
               result = parseFloat(state.firstDisplay)/parseFloat(state.secondDisplay);
               break;
           case "*":
            result = parseFloat(state.firstDisplay) * parseFloat(state.secondDisplay);
               break;
            case "+":
            result = parseFloat(state.firstDisplay) + parseFloat(state.secondDisplay);
               break;
            case "-":
            result = parseFloat(state.firstDisplay) - parseFloat(state.secondDisplay);
               break;
           default:
               break;
       }

        // let value = (/X$/.test(state.firstDisplay))? newDisplayFirst: state.firstDisplay;
        // let newValue = value + state.secondDisplay;
        // let  result = eval(newValue);
        let symbol = (event.target.dataset.id==="*")?" X":event.target.dataset.id
        
        setState((prevState)=>{return{...prevState, firstDisplay: result + symbol, secondDisplay:"" ,staticSecond:result,boolValForSecond:false, boolValForFirst:false, boolEqual:true}} );
    }
}



const reset = ()=>{
    console.log("na resetr be this");
    setState((prevState)=>{return{...prevState, firstDisplay: "", secondDisplay:"0" ,boolValForSecond:true, boolEqual:true,boolValForFirst:true}} );

}


const erase= ()=>{
   
    if(state.secondDisplay ==="0" || state.secondDisplay===""){
        setState((prevState)=>{return{...prevState, secondDisplay:"0",boolValForSecond:true, boolEqual:true,boolValForFirst:true}} );

    }else{
    let number = state.secondDisplay.split("");
    

    number.splice(number.length-1,1);
    number = number.join("")
    

    if(number.length === 0){
        setState((prevState)=>{return{...prevState, secondDisplay:"0",boolValForSecond:true, boolEqual:true,boolValForFirst:true}} );

    }else{
        setState((prevState)=>{return{...prevState, secondDisplay:number,boolValForSecond:true, boolEqual:true,boolValForFirst:true}} );
    }
    } // the else bracket for (state.secondDisplay ==="0" || state.secondDisplay==="")
}

const equalHandler = (event)=>{
       
    //    let newDisplayFirst;
    // if(/X$/.test(state.firstDisplay)){
    //      newDisplayFirst = state.firstDisplay.replace("X","*");
    // }
    let result;
    
    if(state.firstDisplay !=""){
        let symbol = state.firstDisplay.match(/[\+\-\X\/]$/ig)[0];
    console.log(symbol);
    switch (symbol) {
        case "/":
            result = parseFloat(state.firstDisplay)/parseFloat(state.secondDisplay);
            break;
        case "X":
         result = parseFloat(state.firstDisplay) * parseFloat(state.secondDisplay);
            break;
         case "+":
         result = parseFloat(state.firstDisplay) + parseFloat(state.secondDisplay);
            break;
         case "-":
         result = parseFloat(state.firstDisplay) - parseFloat(state.secondDisplay);
            break;
        default:
            break;
    }
   }else{
       result = state.secondDisplay;
   }
    //   let newValue = (/X$/.test(state.firstDisplay))? newDisplayFirst: state.firstDisplay;
    //  let value = newValue  + " "  + state.secondDisplay;
     // console.log(value);
     let valueDisplay = state.firstDisplay + " "  + state.secondDisplay;
     // let result = eval(value);

     // console.log(result);
      

      setState((prevState)=>{return{...prevState, firstDisplay:"",staticFirst: valueDisplay + " " + event.target.dataset.id , secondDisplay:"" ,staticSecond:result, boolValForSecond:false, boolValForFirst:false, boolEqual:false}} )


}



 return {state, clickNumber, arithmeticOperations,reset,erase,equalHandler};
}



const provider = createContext(); 


function InfoProvider(props){

    const value = useProvider()

    return (<provider.Provider value={value}>
       {props.children}
    </provider.Provider>)
}



export {provider, InfoProvider}