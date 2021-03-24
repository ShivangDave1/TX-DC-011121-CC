import React, { Component } from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

const URL = "http://localhost:6001/bots"

class BotsPage extends Component {

  state = {
    bots: [],
    army: [],
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(bots => this.setState({bots}))
  }

  addBot = (bot) => {
    if(!this.state.army.includes(bot)){
      this.setState({army: [...this.state.army, bot]})
    }
  }

  removeBot = (bot) => {
    let newBots = this.state.army.filter(armyBot => armyBot !== bot)
    this.setState({army: newBots})
  }

  killBot = (bot) => {
    const oldBots = this.state.bots
    this.setState({bots: oldBots.filter(deadBot => deadBot.id !== bot.id)})
    fetch(`http://localhost:6001/bots/${bot.id}`, {method: 'Delete'})
  }

  render() {
    return <div>
      <YourBotArmy
        bots={this.state.army}
        removeBot={this.removeBot}
        killBot={this.killBot}
      />

      <BotCollection
        bots={this.state.bots}
        addBot={this.addBot}
        killBot={this.killBot}
        />
      </div>;
  }
}

export default BotsPage;
