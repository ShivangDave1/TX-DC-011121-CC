import React, { Component } from "react";
import BotCard, {  } from "../components/BotCard";

class BotCollection extends Component {
  //your code here

  render() {
    const {bots, events} = this.props
    return (
      <div className="ui four column grid">
        <div className="row">
          {bots.map(bot => <BotCard bot={bot} events={events} key={bot.id}/>)}
          {/* Collection of all bots */}
        </div>
      </div>
    );
  }
}

export default BotCollection;
