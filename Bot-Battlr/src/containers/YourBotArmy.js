import React from "react";

//import needed Components from elsewhere
import BotCard from "../components/BotCard";

const YourBotArmy = ({ bots, removeFromArmy }) => {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.map((bot) => (
            <BotCard clickAction={removeFromArmy} bot={bot} />
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
};

export default YourBotArmy;
