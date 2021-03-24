import React, { Component } from "react";
import BotCard from "../components/BotCard"

class BotCollection extends Component {
  
  

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          Collection of all bots
          {this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} clickAction={this.props.addBot} destroyBot={this.props.destroyBot}/>)}
        </div>
      </div>
    );
  }
}

export default BotCollection;
