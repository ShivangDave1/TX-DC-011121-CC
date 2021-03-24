import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
import SortBar from '../components/SortBar'

let BASE_URL = 'http://localhost:6001/bots/'

class BotsPage extends Component {
  //start here with your code for step one

  // did all deliverables except adding ONLY ONE of each class
  // but i think i didnt do filter by class as intended I only allowed on 
  // class option to be selected but i think it says to give the option to be multiple classes selected


  state = {
     bots: [],
     army: [],
     selected: '',
     sortBy: '',
     filter: 'All'
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

  setSort = (sortBy) => {
    this.setState({ sortBy })
  }

  setFilter = (filter) => {
    this.setState({ filter })
  }

  // sorts from greatest to least
  sortBots = () => {
    switch (this.state.sortBy) {
      case 'health':
        return this.state.bots.sort((a,b) => b.health-a.health)
      case 'damage':
        return this.state.bots.sort((a,b) => b.damage-a.damage) 
      case 'armor':
        return this.state.bots.sort((a,b) => b.armor-a.health) 
      default:
        return this.state.bots
    }
  }

  render() {
    let botsList = this.state.filter==='All' ? this.sortBots() : this.sortBots().filter(bot => bot.bot_class === this.state.filter)
    let filterOptions = ['All', 'Medic', 'Assault', 'Defender', 'Witch', 'Captain', 'Support']
    return <div>
      <YourBotArmy bots={this.state.army} action={this.removeFromArmy} deleteBot={this.deleteBot}/>
      {this.state.selected==='' ? <SortBar setSort={this.setSort} setFilter={this.setFilter} options={filterOptions}/> : null}
      {this.state.selected==='' ? <BotCollection bots={botsList} action={this.showSpecs} deleteBot={this.deleteBot}/> : <BotSpecs bot={this.state.selected} action={this.addToArmy} deSelect={this.deSelect} />}
    </div>;
  }
}

export default BotsPage;
