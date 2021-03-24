import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"


const URL = 'http://localhost:6001/bots'
const BOT_URL = 'http://localhost:6001/bots/'
class BotsPage extends Component {
 
  constructor(){
    super()
    this.state = {
      bots: [],
      army: []
    }
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

  destroyBot = (bot) => {
     let newBots = this.state.bots.filter(Bot => Bot !== bot)
    fetch(BOT_URL+bot.id, {method: "DELETE"})
    .then(() => this.setState({bots: newBots}));
    
  }

  render() {
    
    
    return <div>
      <YourBotArmy bots={this.state.army} removeBot={this.removeBot} destroyBot={this.destroyBot}/>
      <BotCollection bots={this.state.bots} addBot={this.addBot} destroyBot={this.destroyBot}/>
      
      
      {/* put your components here */}
    
    
    </div>;
  }
}

export default BotsPage;
