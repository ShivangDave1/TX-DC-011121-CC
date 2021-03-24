import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {
  //start here with your code for step one
  state = {
    bots: [],
    botArmy: []
  }

  componentDidMount = () => {
    fetch('http://localhost:6001/bots')
      .then(resp => resp.json())
      .then(botsData => {
        this.setState ({
          bots: botsData
        })
      })
  }

  addBot = (bot) => {
    if(!this.state.botArmy.includes(bot)){
      this.setState({botArmy: [...this.state.botArmy,bot]})
    }
  }


  removeBot = (bot) => {
    let remainingBots = this.state.botArmy.filter(armyBot => armyBot !== bot)
    this.setState({botArmy: remainingBots})
  }


  render() {
    
    return (
            <div>
              <YourBotArmy removeBot={this.removeBot} botArmy={this.state.botArmy}/> 
              <BotCollection addBot={this.addBot} botArmy={this.state.botArmy} bots={this.state.bots} />

            </div>
    )}
}

export default BotsPage;
