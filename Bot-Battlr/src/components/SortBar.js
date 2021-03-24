import React, { useState } from "react";

const SortBar = ({ setSort, setFilter, options }) => {
    return(
        <div className='ui segment inverted red sort-bar'>
            <b>Sort By: </b>
            <button onClick={() => setSort('health')}>Health</button>
            <button onClick={() => setSort('damage')}>Damage</button>
            <button onClick={() => setSort('armor')}>Armor</button>
            <b>Filter By Class: </b>
            <select onChange={(event) => setFilter(event.target.value)}>
                {options.map(op => <option value={op}>{op}</option>)}
            </select>
        </div>
    )
}

export default SortBar