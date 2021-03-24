import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {
  //your bot army code here...
  renderMyBots = () => {
    let myBots = this.props.bots.filter(({ id }) => this.props.botIds.includes(id))
    return myBots.map(bot => <BotCard deleteBot={this.props.deleteBot} addBot={this.props.releaseBot} bot={bot} key={bot.id} /> )
  }
  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/
              this.renderMyBots()
            }
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
