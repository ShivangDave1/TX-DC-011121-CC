const BASE_URL = 'http://localhost:3000/characters/'

document.addEventListener('DOMContentLoaded', () => {
    fetch(BASE_URL)
        .then(resp => resp.json())
        .then(charData => charData.forEach(char => {renderChar(char)}))

})

function renderChar(char){
    // console.log(char)
    let charBar = document.getElementById('character-bar')
    let span = document.createElement('span')
        span.innerText = char.name
        span.id = char.id
        span.addEventListener('click', ()=> {renderCharInfo(char)})

    charBar.append(span)
  
}

function renderCharInfo(char){
    // console.log(char)
    let infoDiv = document.getElementById('detailed-info')
    let charName = document.querySelector('p')
        charName.innerText = char.name
    let charImg = document.getElementsByClassName('image')[0]
        charImg.src = char.image
    let charCal = document.getElementsByClassName('calorieSpan')[0]
        charCal.innerHTML = char.calories
    let calForm = document.getElementsByClassName('calories-form')[0]
        // calForm[1].value
        calForm.dataset.calories = char.calories
        calForm.dataset.id = char.id

        calForm.addEventListener('submit',(e) => addCalories(e) )
    // let calReset = document.getElementById('reset-btn')
    //     // calReset.dataset.id = char.id
    //     // calReset.dataset.calories = char.calories
    //     calReset.addEventListener('click', (e) => resetCalories(e))

infoDiv.prepend(charName)
}

function addCalories(e){
    e.preventDefault()
    // console.log(e)

    let x =  parseInt(e.target.dataset.calories) 
    let y =  parseInt(e.target[1].value)

    let newCal = {
        calories: x + y  
    }
    
    let reqObj ={
        method:'PATCH',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(newCal)
    }

    fetch(BASE_URL+e.target.dataset.id, reqObj)
        .then(resp => resp.json())
        .then(updatedCal => {
            e.target.dataset.calories = updatedCal.calories
            document.getElementsByClassName('calorieSpan')[0].innerText = `${updatedCal.calories}`
        })
} 


// function resetCalories(e){
//     console.log(e.target)
// }