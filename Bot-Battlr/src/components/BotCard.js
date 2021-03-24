import React from "react";

//import needed Components from elsewhere
import BotSpecs from "./BotSpecs";

const BotCard = ({ botTypeClasses, clickAction }) => {
  const botTypeClasses = {
    Assault: "icon military",
    Defender: "icon shield",
    Support: "icon plus circle",
    Medic: "icon ambulance",
    Witch: "icon magic",
    Captain: "icon star",
    id: "bot id",
  };

  return (
    <div className="ui column">
      <div
        onClick={() => clickAction(botTypeClasses.id)}
        className="ui card"
        key={botTypeClasses.bot.id}
      >
        <div className="image">
          <img alt="oh no!" src={botTypeClasses.bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {botTypeClasses.bot.name}
            <i className={botTypeClasses[botTypeClasses.bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{botTypeClasses.bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {botTypeClasses.bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {botTypeClasses.bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {botTypeClasses.bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() =>
                  console.log("add code to connect event listener")
                }
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
