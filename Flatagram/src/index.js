// write your code here
let BASE_URL = "http://localhost:3000"
let GETS = `${BASE_URL}/images/1`
let POSTS = `${BASE_URL}/comments`
let likes = document.querySelector('span')
let commentsContainer = document.getElementById('comments')


//initializes the app 
function init() {
    fetch(GETS).then(res => res.json())
    .then(parseImage)
    .catch(error => alert(error.message))
}

//parses the image and creates a DOM object
const parseImage = image => {
    let title = document.getElementById('title')
        title.innerHTML = image.title
    let imageDOM = document.getElementById('image')
        imageDOM.src = image.image
    // let likes = document.querySelector('span')
        likes.innerHTML = `${image.likes} likes`
    commentsParser(image.comments)
    //events() calls the events related to the image
    let button = document.getElementsByClassName('like-button')[0]
        //button.dataset.ownerId = image.id UNNEEDED SINCE THERE'S ONLY ONE IMAGE
        button.onclick = increaseLike
    let commentForm = document.getElementsByTagName('form')[0]
        commentForm.dataset.ownerId = image.id
    commentForm.onsubmit = createNewComment
}

//appends a new comment to the page
const createNewComment = e => {
    e.preventDefault()
    let form = e.target
    let newComment = form.comment.value
    appendComment(newComment)
    form.reset()
    addNewComment(newComment, +form.dataset.ownerId)
}

//updates the backend with the new comment
const addNewComment = (comment, ownerId) => {
    let update = {
        content: comment,
        imageId: ownerId //could have been hardcoded since there's only one image :)
    }

    let request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(update)
    }

    fetch(POSTS, request).then(res => res.json())
    .then(res => {debugger})
    .catch(error => alert(`${error.message} Therefore, comment isn't saved :(`))
}

//increases the like count
const increaseLike = e => {
    previousLikeCount = +likes.innerHTML.split(' ')[0]
    newLikeCount = previousLikeCount + 1
    likes.innerHTML = `${newLikeCount} likes`
    incrementLike(newLikeCount)
}

//increments likes on the backend
const incrementLike = (newLikeCount) => {
    let update = {
        likes: newLikeCount
    }

    let request = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(update)
    }

    fetch(GETS, request).then(res => res.json())
    .catch(error => {
        alert(error.message)
        likes.innerHTML = `${previousLikeCount} likes`
    })
}

//parses the comments and puts them into the DOM
const commentsParser = (comments) => {
        commentsContainer.innerHTML = ""
    //commentAppend appends each comment  to the screen
    comments.forEach(appendComment)
    return commentsContainer
}

//creates a comment and puts it in commentsContainer
const appendComment = comment => {
    let li = document.createElement('li')
        li.innerHTML = comment.content ? comment.content : comment
        li.id = comment.content ? comment.id : "tbd"
    let delButton = document.createElement('button')
        delButton.innerHTML = "DELETE"
        delButton.onclick = removeComment
    li.appendChild(delButton)
    commentsContainer.appendChild(li)
}

//removes a comment from the page
const removeComment = e => {
    let unwantedComment = e.target.parentElement
    unwantedComment.hidden = true

    let request = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }

    // fetch()
    debugger
}

init() //needed to be down here to run const-defined funcitons
