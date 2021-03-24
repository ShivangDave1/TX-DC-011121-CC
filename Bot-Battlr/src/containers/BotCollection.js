import React, { Component } from "react";
import BotCard from '../components/BotCard'


class BotCollection extends Component {
  //your code here

  renderAllBots = () => {
    return this.props.bots.map(bot => <BotCard deleteBot={this.props.deleteBot} addBot={this.props.addBot} bot={bot} key={bot.id} /> )
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {/*...and here..*/
            this.renderAllBots()
          }
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
