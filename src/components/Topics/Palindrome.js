import React, {Component} from 'react';

export default class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: "",
            palindrome: ""
        }
    }
    handleChange(e){
        this.setState({userInput: e});
    }
    isPalindrome(userInput){
        let forwards = userInput;
        let backwards = userInput;
        backwards = userInput.split("");
        backwards = backwards.reverse();
        backwards = backwards.join("");
        if (forwards === backwards){
            this.setState({palindrome: "True"});
        }
        else{
            this.setState({palindrome:"False"});
        }

    }
    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick ={ () => this.isPalindrome(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}