import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const URL = 'http://localhost:3000/bots/'

class BotsPage extends Component {
  
  state = {
    bots: [],
    army: []
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(bots => this.setState({ bots }));
  }

  addBot = (bot) => {
    if(!this.state.army.includes(bot)){
      this.setState({army: [...this.state.army, bot]})
      }
  }

  removeBot = (bot) => {
    let recruits = this.state.army.filter(armyRecruit => armyRecruit !== bot )
    this.setState({army: recruits})

    let botStorage = this.state.bots.filter(storage => storage !== bot )
    this.setState({bots: botStorage})

    
    fetch(URL+bot.id, { method: 'DELETE' })

    
  }

  render() {
    return <div>
      <div>
      <YourBotArmy bots= {this.state.army} removeBot= {this.removeBot}/>
      </div>
      <div>
      <BotCollection bots= {this.state.bots} addBot= {this.addBot}/>
      </div>
      
      
      </div>;
  }
}

export default BotsPage;
