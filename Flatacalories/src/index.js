const BASE_URL = "http://localhost:3000/characters/"

document.addEventListener("DOMContentLoaded", () => {

    fetch(BASE_URL)
    .then(res => res.json())
    .then(animalData => animalData.forEach(renderAnimalCard));    

})


function renderAnimalCard(animal){

    let card = document.createElement('span')
        card.addEventListener('click', () => renderAnimal(animal))
    
    let cardTitle = document.createElement('h5')
        cardTitle.innerText = animal.name


    card.append(cardTitle)
    document.getElementById("character-bar").append(card)

}

function renderAnimal(animal){

    let card = document.getElementById("detailed-info")

    let cardName = document.getElementById("name")
        cardName.innerText = animal.name

    let cardImg = document.getElementById("image")
        cardImg.src = animal.image

    let animalCal = document.getElementById("totalCal")
    
    let animalCalSpan = document.getElementById("calorieSpan")
    
    animalCalSpan.innerText = animal.calories

    let resetBtn = document.getElementById("reset-btn")
        resetBtn.addEventListener('click', (event) => restCals(event, animal))

    animalCal.append(animalCalSpan)
    card.append(cardName, cardImg, animalCal, renderForm(animal), resetBtn)

    // document.getElementById("detailed-info").append(card)


}

function renderForm(animal){

    let form = document.getElementById("calories-form")

    let calInput = document.getElementById("calories")
        calInput.type = "number"
        calInput.name = "calorie"

    let submitBtn = document.getElementById("submit")
        submitBtn.type = "submit"

        form.addEventListener("submit", (event) => addcal(event, animal))
        form.append(calInput, submitBtn)
        return form

}


function addcal(event, animal){
    event.preventDefault()
    
    let moreCals = {
        
        calories: animal.calories + +event.target.calorie.value
        
    }
    
    let reqObj = {
        headers: {"Content-Type": "application/json"},
        method: "PATCH",
        body: JSON.stringify(moreCals) 
    }

    fetch(BASE_URL+animal.id, reqObj)
        .then(res => res.json())
        .then((updatedCals) => renderAnimal(updatedCals))

}

function restCals(event, animal) {


let looseCals = {
        
    calories: 0
    
}

let reqObj = {
    headers: {"Content-Type": "application/json"},
    method: "PATCH",
    body: JSON.stringify(looseCals) 
}

fetch(BASE_URL+animal.id, reqObj)
    .then(res => res.json())
    .then((updatedCals) => renderAnimal(updatedCals))

}






