import React, { Component } from 'react';

class Clicker extends Component {
    constructor(props){
        super(props);
        this.state = {num: 1};
        this.getRandom = this.getRandom.bind(this);
    }
    getRandom(){
        let rand = Math.floor(Math.random() * 10) + 1;
        //update state with new radom number
        this.setState({num: rand});
    }



    render(){
        return(
            <div>
                <p>This is from the clicker</p>
                <h1>The number is {this.state.num}</h1>
                <button onClick={this.getRandom}>Random Number</button>
            </div>
        )
    }
}



export default Clicker;