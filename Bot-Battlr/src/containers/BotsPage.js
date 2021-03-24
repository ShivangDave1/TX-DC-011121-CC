import React, { Component } from "react";
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection'

class BotsPage extends Component {
  
  constructor() {
    super()

    this.state = {
      allBots: [],
      myBotsIds: []
    }

  }

  componentDidMount() {
    fetch('http://localhost:6001/bots')
      .then(r => r.json())
      .then(botsData => {
        this.setState({
          allBots: botsData
        })
      })
  }

  render() {

    const myBots = this.state.allBots.filter(bot => this.state.myBotsIds.includes(bot.id))

    return (
      <div>

        <YourBotArmy botsList={myBots} />
        <BotCollection botsList={this.state.allBots} />

      </div>
    );
  }

}

export default BotsPage;
