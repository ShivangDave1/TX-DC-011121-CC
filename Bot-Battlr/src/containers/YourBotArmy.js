import React, { Component } from "react";

//custom components
import BotCard from '../components/BotCard'
// import BotCollection from "./BotCollection";

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.armyBots.map(bot => <BotCard key={bot.id} bot={bot} clickAction={this.props.releaseBot} dischargeBot={this.props.dischargeBot} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
