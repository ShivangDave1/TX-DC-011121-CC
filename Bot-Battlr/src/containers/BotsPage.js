import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
class BotsPage extends Component {
  //start here with your code for step one
  state = {
    bots: [], 
    myBotIds: []
  }

  fetchBots = () => {
    fetch('http://localhost:6001/bots')
    .then(r => r.json())
    .then(botData => this.setState({bots: botData}))
  }
  componentDidMount(){
    this.fetchBots()
  }
  deleteBot = id => {
    fetch('http://localhost:6001/bots/' + id, { method: 'DELETE' })
    .then(r => r.json())
    .then(botData => {
      if (this.state.myBotIds.includes(id)){
        this.releaseBot(id)
        this.fetchBots()
      }

  })
  }
  addBot = id => {
    if (!this.state.myBotIds.includes(id)){
      let newIds = this.state.myBotIds
      newIds.push(id)
      this.setState({
        myBotIds: newIds
      })
    }
  }
  releaseBot = id => {
    let newBotIds = this.state.myBotIds.filter(currentId => currentId != id)
    this.setState({
      myBotIds: newBotIds
    })
  }
  

  render() {
    return <div>       
      <YourBotArmy deleteBot={this.deleteBot} releaseBot={this.releaseBot} bots={this.state.bots} botIds={this.state.myBotIds} />
      <BotCollection deleteBot={this.deleteBot} addBot={this.addBot} bots={this.state.bots}/>
      </div>;
  }
}

export default BotsPage;
