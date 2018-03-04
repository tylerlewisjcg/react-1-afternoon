import React, {Component} from 'react';

export default class Sum extends Component {
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    setNum1(e){
        this.setState({number1: Number(e)});
}
    setNum2(e){
        this.setState({number2:parseInt(e)});
    }
    addNums(num1, num2){
        this.setState({sum: num1 + num2});
    }


    render (){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e)=>this.setNum1(e.target.value)} />
                <input className="inputLine" onChange={(e)=>this.setNum2(e.target.value)} />
                <button className="confirmationButton" onClick={()=>this.addNums(this.state.number1, this.state.number2)}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}