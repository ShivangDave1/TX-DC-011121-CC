import React, { Component } from "react";

//custom components
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} clickAction={this.props.addBot} dischargeBot={this.props.dischargeBot} />)}
        </div>
      </div>
    );
  }
}

export default BotCollection;
