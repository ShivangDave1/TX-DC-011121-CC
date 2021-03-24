import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.botsList.map(bot => <BotCard bot={bot} />)}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
