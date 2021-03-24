import React, {Component} from "react"
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

const BOTS_URL = "http://localhost:6001/bots/"

class BotsPage extends Component {
  //start here with your code for step one
  state = {
    bots: [],
    botarmy: [],
  }

  componentDidMount() {
    fetch(BOTS_URL)
      .then((res) => res.json())
      .then((bots) => this.setState({bots}))
  }

  addBot = (bot) => {
    if (!this.state.botarmy.includes(bot)) {
      this.setState({botarmy: [...this.state.botarmy, bot]})
    }
  }

  removeBot = (bot) => {
    let newBotArmy = this.state.botarmy.filter(
      (prevBotArmy) => prevBotArmy !== bot
    )
    this.setState({botarmy: newBotArmy})
  }

  // deleteBotForever = (bot) => {
  //   let newBots = this.state.bots.filter(
  //     (prevBots) => prevBots !== bot
  //   )
  //   fetch(`BOTS_URL${bot.id}`, {
  //     method: 'DELETE',
  //     headers: { 'Content-Type': 'application/json'},
  //     body: JSON.stringify(bot)})
  //     .then((res) => res.json())
  //     .then((bot) => this.setState({
  //       bots: newBots
  //     }))

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.botarmy} removeBot={this.removeBot} />
        <BotCollection bots={this.state.bots} addBot={this.addBot} />
      </div>
    )
  }
}

export default BotsPage
