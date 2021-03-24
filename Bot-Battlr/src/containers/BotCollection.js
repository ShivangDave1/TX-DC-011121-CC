import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  //your code here

  render() {
    const bots = this.props.bots
    
   
    // console.log(this.props.addBot)
    return (
      <div className="ui four column grid">
        <div className="row">
          {bots.map(bot => <BotCard clickAction={this.props.addBot} botArmy={this.props.botArmy} bot={bot} key={bot.id}/>)}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
