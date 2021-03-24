import React from "react";
function SortBar({sortBots}) {
    return (
        <div>
            <select onChange={e => sortBots(e.target.value)}>
                {/* <option value="None">None</option> */}
                <option value="health">Health</option>
                <option value="damage">Damage</option>
                <option value="armor">Armor</option>
            </select>
        </div>
    );
}

export default SortBar