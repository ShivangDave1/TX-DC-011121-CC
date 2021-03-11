// 1. See all characters names in a `div` with the id of `"character-bar"`. 
// On page load, **request** data from the server to get all of the characters objects. 
// When you have this information, you'll need to add a `span` tag with the character's name to the character bar.

const BASE_URL = 'http://localhost:3000/characters'


    fetch(BASE_URL)
    .then(r => r.json())
    // .then(charData => console.log(charData))
    .then(charData => charData.forEach(renderChar))


function renderChar(char){
    // console.log(char)

    let charNames = document.createElement('span')
        charNames.innerText = char.name
        charNames.addEventListener('click', () => renderDetails(char))

        

    document.getElementById('character-bar').appendChild(charNames)
    
    
}

// 2. Select a character from the character bar and see character's info inside `#detailed-info` div. 

function renderDetails(char){
    // console.log(char.name)

    // <p id="name">Character's Name</p>
    let name = document.getElementById('name')
        name.innerText = char.name

    // <img id="image" src="assets/dummy.gif"><!-- display character image here -->
    let picture = document.getElementById('image')
        picture.src = char.image

    // <h4>Total Calories: <span id="calorieSpan">Character's Calories</span> </h4>
    let totalCalories = document.getElementById('calorieSpan')
        totalCalories.innerText = char.calories

}

// 3. Clicks on "Add Calories" button to add calories to a Character. Persist calories value to the server and update the DOM.

// <form id="calories-form">
document.getElementById('calories-form').addEventListener('submit', addCalories)

console.log(document.getElementById('calories-form'));

function addCalories(e) {
    e.preventDefault()
    
    let newCalories = {
        name: id,
        calories: e.target.calories.value
    }
    console.log(newCalories)
 
}

// let reqObj = {
//     headers: {"Content-Type": "application/json"},
//     method: "PATCH",
//     body: JSON.stringify(newCalories)
// }



