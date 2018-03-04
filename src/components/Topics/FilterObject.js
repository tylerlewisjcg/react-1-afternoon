import React, {Component} from 'react';

export default class FilterObject extends Component {
    constructor(){
        super()
        this.state = {
            unFilteredArray: [ { "name": "Big Bird", "title": "The Great Bird of Sesame Street", "age": 40 }, { "name": "Butch Cassidy", "age": 180, "partner": "The Sundance Kid" }, { "name": "Tupac", "title": "OG" } ],
            userInput: "",
            filteredArray: [],
        }
    }

    updateUserInput(event){
        this.setState({userInput:event})
    }


    updateArray(userInput) {
        var employees = this.state.unFilteredArray;
        var filteredEmployees = [];
        
        for ( var i = 0; i < employees.length; i++ ) {
          if ( employees[i].hasOwnProperty(userInput) ) {
            filteredEmployees.push(employees[i]);
          }
        }
    
        this.setState({ filteredArray: filteredEmployees });
      }
    render(){
        return (
           <div className ="puzzleBox filterObjectPB">
               <h4>Filter Object</h4>
               <span className ="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
               <input className ="inputLine" onChange={(e)=> this.updateUserInput(e.target.value)}/>
               <button className = "confirmationButton" onClick={()=>this.updateArray(this.state.userInput)}>Filter</button>
               <span className ="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
           </div>
        )
    }
}

