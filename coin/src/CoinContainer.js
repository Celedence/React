import React, { Component } from 'react';
import { choice } from './helper';
import Coin from './Coin';
 
class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc:'https://tinyurl.com/react-coin-heads-jpg'},
            {side: 'tails', imgSrc:'https://images.unsplash.com/photo-1589038760906-df02d8ca2fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'}
        ]
    };
    constructor(props){
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin : newCoin,
                nFlips : st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
                nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0)
            };
        });
    }

    handleClick(e){
        this.flipCoin();
    }

    render(){
        return(
            <div className="CoinContainer">
                <h2>Lets's flip a coin</h2>
                <button onClick={this.handleClick}>Flip me</button>
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails}</p>
            </div>
        )
    }
}

export default CoinContainer;