import React, { Component } from "react";
import YourBotArmy, {  } from "./YourBotArmy";
import BotCollection, {  } from "./BotCollection";
import BotSpecs from "../components/BotSpecs";

const BASE_URl = "http://localhost:6001/"
const GET_BOTS = `${BASE_URl}bots/`

class BotsPage extends Component {
  //start here with your code for step one

  state = {
    bots: [],
    myBots: [],
    // specs: false,
    specId: ""
  }

  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = async () => {
    const res = await fetch(GET_BOTS)
    const bots = await res.json()
    this.setState({bots})
  }

  getMyBots() {
    return this.state.bots.filter(bot => this.state.myBots.includes(bot.id))
  }

  addToMyBots = id => {
    if (!this.state.myBots.includes(id)) {
      this.setState(state => ({myBots: [...state.myBots, id], specId: ""}))
      // console.log("i ran o");
    }
    else {
      alert("The Bot not available or is in your service already 🦾. Click 'Go Back' to see the list of all bots")
    }
  }

  removeFromMyBots = id => {
    const myBots = this.state.myBots.filter(myId => myId !== id)
    this.setState({myBots})
  }

  deleteABot = id => {
    const request = {
      method: "DELETE",
      headers: {
        "CONTENT-TYPE": "APPLICATION/JSON"
      }
    }
    fetch(GET_BOTS+id, request).then(res => res.json()).then(res => this.fetchData())
  }

  //gets called when you click the bot
  specsOn = id => {
    // console.log(id);
    this.setState({specId: id})
  }

  //gets called when you click "Go back" in botSpecs
  specsOff = () => {
    this.setState({specId: ""})
  }

  //gets the bot to send to the spec view
  getSpecBot() {
    return this.state.bots.find(bot => bot.id === this.state.specId)
  }

  sortBots = value => {
    let bots = [...this.state.bots]
    // console.log(bots[1][value]);
   bots.sort((bot1, bot2) => bot1[value] - bot2[value])
   this.setState({bots})
  }

  render() {
    return (<div>
    <YourBotArmy bots={this.getMyBots()} events={[this.removeFromMyBots, this.deleteABot]}/> 
    {
    this.state.specId === "" ? 
    <BotCollection bots={this.state.bots} events={[this.specsOn, this.deleteABot]} sortBots={this.sortBots}/>
    :
    <BotSpecs bot={this.getSpecBot()} events={[this.specsOff, this.addToMyBots]} /> 
    }
    </div>);
  }
}

export default BotsPage;
