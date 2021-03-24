import React from 'react'

const SortBar = ({sortBots}) => {
    return(
        <div>
            <label>Sort By: </label>
            <select onChange={(e) => sortBots(e)}>
                <option value="default">Default</option>
                <option value="armor">Armor</option>
                <option value="damage">Damage</option>
                <option value="health">Health</option>
            </select>
        </div>
    )
}

export default SortBar

//stopped short of filtering based on type