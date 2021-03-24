import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star"
};

const BotCard = ({bot, clickAction, deleteAction}) => {
// const BotCard = props => {
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        // key={props.bot.id}
        onClick={() => clickAction(bot)}
        // onClick={() => clickAction(props)}
        // onClick={() => console.log(props)}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
          {/* <img alt="oh no!" src={props.bot.avatar_url} /> */}
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            {/* {props.bot.name} */}
            <i className={botTypeClasses[bot.bot_class]} />
            {/* <i className={botTypeClasses[props.bot.bot_class]} /> */}
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
            {/* <small>{props.bot.catchphrase}</small> */}
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
            {/* {props.bot.health} */}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
            {/* {props.bot.damage} */}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
            {/* {props.bot.armor} */}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() => deleteAction(bot)
                  // console.log("add code to connect event listener")
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
