import React, { Component } from "react";
import YourBotArmy, {  } from "./YourBotArmy";
import BotCollection, {  } from "./BotCollection";

const BASE_URl = "http://localhost:6001/"
const GET_BOTS = `${BASE_URl}bots/`

class BotsPage extends Component {
  //start here with your code for step one

  state = {
    bots: [],
    myBots: []
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
      this.setState(state => ({myBots: [...state.myBots, id]}))
      // console.log("i ran o");
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
    // console.log(request);
    fetch(GET_BOTS+id, request).then(res => res.json()).then(res => this.fetchData())
  }

  render() {
    return (<div>
    <YourBotArmy bots={this.getMyBots()} events={[this.removeFromMyBots, this.deleteABot]}/> 
    <BotCollection bots={this.state.bots} events={[this.addToMyBots, this.deleteABot]}/>
    </div>);
  }
}

export default BotsPage;
