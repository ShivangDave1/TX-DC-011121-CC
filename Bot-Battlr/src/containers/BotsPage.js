import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
class BotsPage extends Component {
  //start here with your code for step one
  state = {
    bots: [], 
    myBotIds: [], 
    collection: true, 
    currentBot: null
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
        myBotIds: newIds, 
        collection: true
      })
    }
  }
  releaseBot = id => {
    let newBotIds = this.state.myBotIds.filter(currentId => currentId != id)
    this.setState({
      myBotIds: newBotIds
    })
  }
  viewSingleBot = id => {
    let bot = this.state.bots.find(bot => bot.id === id)
    this.setState({
      collection: !this.state.collection, 
      currentBot: bot
    })
  }
  renderBots = () => {
    if (this.state.collection){
      return <div>       
      <YourBotArmy deleteBot={this.deleteBot} releaseBot={this.releaseBot} bots={this.state.bots} botIds={this.state.myBotIds} />
      <BotCollection viewSingleBot={this.viewSingleBot} deleteBot={this.deleteBot} addBot={this.addBot} bots={this.state.bots}/>
      </div>
    }
    else if (!this.state.collection) {
      return <div>       
        <YourBotArmy deleteBot={this.deleteBot} releaseBot={this.releaseBot} bots={this.state.bots} botIds={this.state.myBotIds} />
        <BotSpecs addBot={this.addBot} viewSingleBot={this.viewSingleBot} bot={this.state.currentBot} key={this.state.currentBot.id} />
      </div>
    }
  }
  

  render() {
    
    return this.renderBots()
    
    // <div>       
    //   <YourBotArmy deleteBot={this.deleteBot} releaseBot={this.releaseBot} bots={this.state.bots} botIds={this.state.myBotIds} />
    //   <BotCollection viewSingleBot={this.viewSingleBot} deleteBot={this.deleteBot} addBot={this.addBot} bots={this.state.bots}/>
    //   </div>;
  }
}

export default BotsPage;
