import React, { Component } from "react";

//import needed Components from elsewhere
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

// set class Name and export
class BotsPage extends Component {
  //start here with your code for step one
  // set initial state for the BotPage
  state = {
    bots: [],
    botArmy: [],
  };

  // fetch call to get information from server (to use).
  componentDidMount() {
    fetch("http://localhost:6001/bots")
      .then((r) => r.json())
      .then((bots) => this.setState({ bots }));
  }

  filteredBots = () =>
    this.state.botArmy.map((botId) =>
      this.state.bots.find((bot) => bot.id === botId)
    );

  // add to YourBotArmy function (see BotCollection)
  addToArmy = (id) => {
    if (!this.state.botArmy.includes(id)) {
      this.setState({ botArmy: [...this.state.botArmy, id] });
    }
  };

  // remove card(s) from YourBotArmy (see YourBotArmy)
  removeFromArmy = (id) => {
    this.setState({
      botArmy: this.state.botArmy.filter((botId) => botId !== id),
    });
  };

  render() {
    return (
      <div>
        <BotCollection
          removeFromArmy={this.removeFromArmy}
          bots={this.filteredBots()}
        />
        <YourBotArmy addToArmy={this.addToArmy} bots={this.state.bots} />
      </div>
    );
  }
}

export default BotsPage;
