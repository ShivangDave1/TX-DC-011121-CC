import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.botsList.map(bot => <BotCard bot={bot} />)}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
