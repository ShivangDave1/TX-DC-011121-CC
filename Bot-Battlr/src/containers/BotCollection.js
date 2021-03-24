import React from "react";

//import needed Components from elsewhere
import BotCard from "../components/BotCard";

const BotCollection = ({ bots, addToArmy }) => {
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard clickAction={addToArmy} bot={bot} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
