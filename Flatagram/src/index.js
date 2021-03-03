const BASE_URL_IMG = 'http://localhost:3000/images/'
const BASE_URL_COMMENTS = 'http://localhost:3000/comments/'

document.addEventListener("DOMContentLoaded", () =>{

    fetch(BASE_URL_IMG)
        .then((res) => res.json())
        .then(dogData => dogData.forEach(renderDog))

    fetch(BASE_URL_COMMENTS)
        .then((res) => res.json())
        .then(commentData => commentData.forEach(renderComments))


})

function renderDog(dog){
console.log(dog)
    
let cardImg = document.getElementById("dog-img")
    cardImg.src = dog.image

let cardTitle = document.getElementById("image-title")
    cardTitle.innerText = dog.title 

let cardLikes = document.getElementById("likes")
    cardLikes.innerText = `${dog.likes} likes`
    cardLikes.id = dog.id
    cardLikes.addEventListener('click', likeDog)

let likeBtn = document.getElementById("like-btn")


document.getElementById("image-collection").append(cardImg, cardTitle, cardLikes, likeBtn)

}
function renderComments(comment){

    
let cardComment = document.getElementById("comments")
    cardComment.innerText = comment.content

let commentSection = document.getElementById("comment-form")
    commentSection.id = comment.id //Error is here but I dont know what it is.
    // // commentSection.addEventListener('submit', commentSubmit)

document.getElementById("image-collection").append(cardComment, commentSection)

}

// function commentSubmit(event){
// event.preventDefault() 

// let newComment = {
//   imageId: ,
//   content: 
// }

// let reqObj = {
//   headers: {"Content-Type": "application/json"},
//   method: "POST",
//   body: JSON.stringify(newComment)
// }

// fetch(BASE_URL, reqObj)
//     .then(res => res.json())
//     .then(renderComments)
// }


function likeDog(event){

    console.log(+event.target.innerText.split(" ")[0])
    let newLikes = {
      likes: +event.target.innerText.split(" ")[0] + 1
    }

    let reqObj = {
      headers: {"Content-Type": "application/json"},
      method: "PATCH",
      body: JSON.stringify(newLikes) 
    }

    fetch(BASE_URL_IMG+event.target.id, reqObj)
        .then(res => res.json())
        .then(updatedToys => {
          document.getElementById(updatedToys.id).innerText = `${updatedToys.likes} likes`

        })

}





