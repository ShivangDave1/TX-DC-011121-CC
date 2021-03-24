import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

let BASE_URL = 'http://localhost:6001/bots/'

class BotsPage extends Component {
  //start here with your code for step one

  state = {
     bots: [],
     army: [],
     selected: ''
  }

  componentDidMount = async () => {
    const res = await fetch(BASE_URL)
    const bots = await res.json()
    this.setState({ bots })
  }

  addToArmy = (bot) => {
    if(!this.state.army.includes(bot)){
      this.setState({
        army: [... this.state.army, bot],
        selected: ''
      })
    }
  }

  removeFromArmy = (bot) => {
    this.setState({
      army: this.state.army.filter(b => b.id !== bot.id)
    })
  }

  deleteBot = (bot) => {
    
    let reqObj = {
      headers: {"Content-Type": "application/json"},
      method: "DELETE",
    }

    fetch(BASE_URL+bot.id, reqObj)
      .then(r => r.json())
      .then(() => {
        this.setState({
          bots: this.state.bots.filter(b => b.id !== bot.id),
          army: this.state.army.filter(b => b.id !== bot.id)
        })
      })

  }

  showSpecs = (bot) => {
    this.setState({
      selected: bot
    })
  }

  deSelect = () => {
    this.setState({
      selected: ''
    })
  }

  render() {
    return <div>
      <YourBotArmy bots={this.state.army} action={this.removeFromArmy} deleteBot={this.deleteBot}/>
      {this.state.selected==='' ? <BotCollection bots={this.state.bots} action={this.showSpecs} deleteBot={this.deleteBot}/> : <BotSpecs bot={this.state.selected} action={this.addToArmy} deSelect={this.deSelect} />}
    </div>;
  }
}

export default BotsPage;
