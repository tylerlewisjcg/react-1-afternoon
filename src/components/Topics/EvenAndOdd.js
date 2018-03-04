import React, {Component} from 'react';

export default class EvenAndOdd extends Component {
    
    constructor(){
        super()
        this.state ={
            evenArray: [],
            oddArray: [],
            userInput: "",
        } 
    }
    
    updateUserInput(event){
        this.setState({userInput:event})
    }

    solve(userInput){
        console.log(userInput);
        
        var arr = userInput.split(',')
        var evens = [];
        var odds = [];
        for(let i = 0; i<userInput.length; i++){
            if(userInput[i] % 2===0){
                evens.push(userInput[i])
            }
            else {
                odds.push(userInput[i])
            }
        }
        console.log(evens,odds)
        this.setState({evenArray: evens, oddArray: odds});
    }

    render(){
        return (
         <div className = "puzzleBox evenAndOddPB">
         <h4>Evens and Odds</h4>
         <input className="inputLine" onChange={ (e)=> this.updateUserInput(e.target.value)}/>
         <button className="confirmationButton" onClick={ ()=> this.solve(this.state.userInput)}>Split</button>
         <span className="resultsBox">Evens: {this.state.evenArray}</span>
         <span className="resultsBox">Odds:{this.state.oddArray}</span>         
         </div>
        )
    }
}