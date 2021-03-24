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
      alert("The Bot is in your service already 🦾. Click 'Go Back' to see the list of all bots")
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

  specsOn = id => {
    // console.log(id);
    this.setState({specId: id})
  }

  specsOff = () => {
    this.setState({specId: ""})
  }

  getSpecBot() {
    return this.state.bots.find(bot => bot.id === this.state.specId)
  }

  render() {
    return (<div>
    <YourBotArmy bots={this.getMyBots()} events={[this.removeFromMyBots, this.deleteABot]}/> 
    {
    this.state.specId === "" ? 
    <BotCollection bots={this.state.bots} events={[this.specsOn, this.deleteABot]}/>
    :
    <BotSpecs bot={this.getSpecBot()} events={[this.specsOff, this.addToMyBots]} /> 
    }
    </div>);
  }
}

export default BotsPage;
