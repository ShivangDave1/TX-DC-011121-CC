import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const URL = 'http://localhost:6001/bots'

class BotsPage extends Component {
  //start here with your code for step one

  state = {
    bots: [],
    botArmy: []
  }

  addBot = (bot) => {
    if(!this.state.botArmy.includes(bot)){
    this.setState({botArmy: [...this.state.botArmy, bot]})
    }
  }

  removeBot = (bot) => {
    let updatedArmy = this.state.botArmy.filter(card => card !== bot)
    this.setState({botArmy: updatedArmy})
  }

  deleteCard = (bot) => {
    this.setState({
      bots: this.state.bots.filter(card => card !== bot)
    })
  }

  componentDidMount(){
    fetch(URL)
      .then(r => r.json())
      .then(bots => this.setState({bots}))
      // .then(bots => console.log(bots))
  }

  render() {
    return <div>
      <YourBotArmy deleteCard={this.deleteCard} removeBot={this.removeBot} bots={this.state.botArmy}/>
      <BotCollection addBot={this.addBot} bots={this.state.bots}/>
    </div>;
  }
}

export default BotsPage;
