const BASE_URL = 'http://localhost:3000/characters/'

document.addEventListener("DOMContentLoaded",  () => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(character => character.forEach(renderCharacter))

})

function renderCharacter(character){
    // console.log(character)

    let div = document.getElementById("character-bar")

    let span = document.createElement("span")
        span.innerText = character.name 
        // span.id = character.id
        span.addEventListener("click", (e) =>{
             infoDetails(e, character)})

        div.append(span)
}

function infoDetails(e, character){
   
    let newDiv = document.getElementById("detailed-info")


    let characterName = document.getElementById("name")
        characterName.innerText = character.name

    let characterImg = document.getElementById("image")
        characterImg.src = character.image  

    let totalCalories = document.getElementById("calorieSpan")

        totalCalories.innerText = `Total Calories: ${character.calories}`  
        
    let form = document.getElementById("calories-form")
    
        form.addEventListener("submit", addCalories)
    
        document.getElementById("characterId").value = character.id
    let resetBtn = document.getElementById("reset-btn")


    newDiv.append(characterName, characterImg, totalCalories, form, resetBtn)

}

function addCalories(e){
    e.preventDefault()
    
 
    let newCalories = {
        calories: +document.getElementById("calorieSpan").innerText.split(" ")[2] + +e.target.calories.value
    }
    
    
    let reqObj = {
        headers:{"Content-Type": "application/json"},
        method: "PATCH",
        body: JSON.stringify(newCalories)
    }

    fetch(BASE_URL+e.target[0].value, reqObj)
    .then(res => res.json())
    .then(updatedCharacter => {
       e.target.calories = updatedCharacter.newCalories
        document.getElementById("calorieSpan").innerText = `Total Calories: ${updatedCharacter.calories}`
    })
    e.target.reset()
}

