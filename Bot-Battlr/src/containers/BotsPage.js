import React, { Component } from "react";

//custom components
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'
import SortBar from '../components/SortBar'

const URL = 'http://localhost:6001/bots'

class BotsPage extends Component {
  //start here with your code for step one
  state ={
    bots: [],
    botCollection: [],
    army: [],
    showCollection: true,
    botSpec: '',
    sort: 'default'
  }
  
  componentDidMount = async () => {
    const fetchBots = await fetch(URL)
    const botsRes = await fetchBots.json()

    this.setState({
      bots: botsRes,
      botCollection: botsRes.map(bot => bot.id)
    })
  }

  addBot = (botId) => {
    const army = this.state.army
    const botCollection = this.state.botCollection

    if (!army.includes(botId)) {
      this.setState({
        army: [...army, botId],
        botCollection: botCollection.filter(bot => bot !== botId)
      })
    }
  }

  releaseBot = (botId) => {
    const army = this.state.army
    const botCollection = this.state.botCollection

    if(army.includes(botId)) {
      this.setState({
        army: army.filter(bot => bot!==botId),
        botCollection: [...botCollection, this.state.bots.find(bot => bot.id === botId).id]
      })
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

  showBotSpecs = (botId) => {
    const showCollection = this.state.showCollection

    this.setState({
      showCollection: !showCollection,
      botSpec: botId
    })
  }

  showBotCollection = () => {
    const showCollection = this.state.showCollection

    this.setState({
      showCollection: !showCollection,
      botSpec: ''
    })
  }

  sortBots = (e) => {
    const currentBots = this.state.bots
    const setSort = e.target.value

    switch (setSort) {
      case "default":
        this.setState({
          sort: setSort,
          bots: currentBots.sort((a,b) => a.id - b.id)
        })
        break
      case "armor":
        this.setState({
          sort: setSort,
          bots: currentBots.sort((a,b) => b.armor - a.armor)
        })
        break
      case "damage":
        this.setState({
          sort: setSort,
          bots: currentBots.sort((a,b) => b.damage - a.damage)
        })
        break
      case "health":
        this.setState({
          sort: setSort,
          bots: currentBots.sort((a,b) => b.health - a.health)
        })
        break
    }
  }

  render() {
    return (
    <div>
      <SortBar sortBots={this.sortBots} />
      <YourBotArmy armyBots={this.state.bots.filter(bot => this.state.army.includes(bot.id))} releaseBot={this.releaseBot} dischargeBot={this.dischargeBot} />
      {this.state.showCollection ? <BotCollection bots={this.state.bots.filter(bot => this.state.botCollection.includes(bot.id))} addBot={this.addBot} dischargeBot={this.dischargeBot} showBotSpecs={this.showBotSpecs} /> : <BotSpecs bot={this.state.bots.find(bot => bot.id === this.state.botSpec)} addBot={this.addBot} showBotCollection={this.showBotCollection} /> }
      
    </div>
    ) 
  }
}

export default BotsPage;
