import React, {Component} from 'react';

export default class FilterString extends Component {

constructor(){
    super()
    this.state = {
        homies: ["Escobar", "Guzman", "Putin", "Trump", "The Notorious BIG"],
        userInput: "",
        filteredHomies: []
    }
}
updateUserInput(event){
    this.setState({userInput: event});
}

capHomies(userInput){
     let names = this.state.homies;
     let filtered = [];
     filtered = names.filter(key => key.indexOf(userInput) > -1);
     this.setState({filteredHomies: filtered});
}

    render (){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.homies)}</span>
                <input className="inputLine" onChange={(e)=>this.updateUserInput(e.target.value)}/>
                <button className="confirmationButton" onClick={()=>this.capHomies(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredHomies)}</span>
            </div>
        )
    }
}
