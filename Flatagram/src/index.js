
document.addEventListener("DOMContentLoaded", () => {
    getImage();
})
document.querySelector(".like-button").addEventListener('click', clickLike)
document.querySelector(".comment-form").addEventListener('submit', addComment)
function getImage() {
    fetch('http://localhost:3000/images')
    .then(res => res.json())
    .then(imageData => imageData.forEach(renderImage))
}
function renderImage(e) {
    let imageElement = document.getElementsByClassName("image")[0]
    imageElement.src = e.image
    let title = document.getElementsByClassName("title")[0]
    title.innerText = e.title
    title.dataset.id = e.id
    document.getElementsByClassName("likes")[0].innerText = `${e.likes} likes`
    let commentList = document.getElementsByClassName("comments")[0] 
    while (commentList.hasChildNodes()){
        commentList.removeChild(commentList.firstChild)
    }

    getComments()
    // debugger
}
function getComments() {
    fetch('http://localhost:3000/comments')
    .then(res => res.json())
    .then(commentData => commentData.forEach(renderComments))
}
function renderComments(e) {
    // debugger
    let commentList = document.getElementsByClassName("comments")[0] 
    if (document.getElementsByClassName("title")[0].dataset.id == e.imageId){
        let li = document.createElement("li")
            li.innerText = e.content
        commentList.appendChild(li)
    }

}
function clickLike(e) {
    getSingleImage(document.getElementsByClassName("title")[0].dataset.id)
    .then(addLike)
}
function addLike(image) {
    // debugger
    let newLike = { likes: image.likes + 1}
    let reqObj = {
        headers: {"Content-Type": "application/json", Accept: "application/json"}, 
        method: "PATCH", 
        body: JSON.stringify(newLike)
      }
      fetch('http://localhost:3000/images/' + image.id, reqObj)
      .then(r => r.json())
      .then(updated => {
        document.getElementsByClassName("likes")[0].innerText = `${updated.likes} likes`
      })
}
function addComment(e) {
    e.preventDefault()
    let newComment = {
        imageId: document.getElementsByClassName("title")[0].dataset.id, 
        content: e.target[0].value
    }
    let reqObj = {
        headers: {"Content-Type": "application/json", Accept: "application/json"}, 
        method: "POST", 
        body: JSON.stringify(newComment)
      }
      fetch('http://localhost:3000/comments', reqObj)
      .then(r => r.json())
      .then(renderComments)
      e.target[0].value = ""
}

function getSingleImage(id) {
    return fetch('http://localhost:3000/images/' + id)
    .then(res => res.json())
}