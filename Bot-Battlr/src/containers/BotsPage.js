import React, { Component } from "react";

//custom components
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

const URL = 'http://localhost:6001/bots'

class BotsPage extends Component {
  //start here with your code for step one
  state ={
    bots: [],
    army: []
  }
  
  componentDidMount = async () => {
    const fetchBots = await fetch(URL)
    const botsRes = await fetchBots.json()

    this.setState({bots: botsRes})
  }

  addBot = (botId) => {
    const army = this.state.army

    if (!army.includes(botId)) {
      this.setState({army: [...army, botId]})
    }
  }

  releaseBot = (botId) => {
    const army = this.state.army

    if(army.includes(botId)) {
      this.setState({army: army.filter(bot => bot!==botId)})
    }
  }

  dischargeBot = (botId) => {
    const bots = this.state.bots
    
    if (this.state.army.includes(botId)) {
      this.releaseBot(botId)
    }

    const botObj = {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE",
      body: JSON.stringify({id: botId})
    }

    fetch(URL+`/${botId}`, botObj)
      .then(
        this.setState({bots: bots.filter(bot => bot.id !== botId)})
      )

  }

  render() {
    return (
    <div>
      <YourBotArmy armyBots={this.state.bots.filter(bot => this.state.army.includes(bot.id))} releaseBot={this.releaseBot} dischargeBot={this.dischargeBot} />
      <BotCollection bots={this.state.bots} addBot={this.addBot} dischargeBot={this.dischargeBot} />
    </div>
    ) 
  }
}

export default BotsPage;
