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

  addBotToArmy = (newBot) => {

    if(!this.state.myBotsIds.includes(newBot.id)){
      this.setState({
        myBotsIds: [...this.state.myBotsIds, newBot.id]
      })
    } 
    
  }

  removeBotFromArmy = (byeBot) => {

    const newArmyIds = this.state.myBotsIds.filter(botID => botID !== byeBot.id)

    this.setState({
      myBotsIds: newArmyIds
    })

  }

  dischargeBot = (byeBot) => {

    fetch(`http://localhost:6001/bots/${byeBot.id}`, {method: "DELETE"})
      .then(r => r.json())
      .then(_ => {
        this.removeBotFromArmy(byeBot)
        fetch('http://localhost:6001/bots')
          .then(r => r.json())
          .then(newBotsData => {
            this.setState({
              allBots: newBotsData
            })
          })
      })
  }

  render() {

    const myBots = this.state.allBots.filter(bot => this.state.myBotsIds.includes(bot.id))

    return (
      <div>

        <YourBotArmy botsList={myBots} clickToRemove={this.removeBotFromArmy} discharge={this.dischargeBot} />
        <BotCollection botsList={this.state.allBots} clickToAdd={this.addBotToArmy} discharge={this.dischargeBot} />

      </div>
    );
  }

}

export default BotsPage;
