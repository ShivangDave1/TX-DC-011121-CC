const BASE_URL = 'http://localhost:3000/'
const IMAGE_URL = BASE_URL+'images/1'
const COMMENTS_URL = BASE_URL+'comments/'

document.addEventListener('DOMContentLoaded', () => {
    fetchImage()
    document.querySelector('.comment-form').addEventListener('submit', newComment)
})

function fetchImage() {
    fetch(IMAGE_URL)
        .then(res => res.json())
        .then(imageData => {
            renderImage(imageData)
        })
}

function renderImage(image) {
    document.querySelector('#image-title').innerHTML = image.title
    document.querySelector('#image-picture').src = image.image
    document.querySelector('.likes').innerText = `${image.likes} likes`
    document.querySelector('.like-button').addEventListener('click', (e) => {
        // console.log(e.target.parentNode.querySelector('.likes').innerText)
        // console.log(photo.likes)
        likeImage(e)
    })

    const downVoteButton = document.createElement('button')
        downVoteButton.innerText = "You really want to downvote a puppy? Also ran out of time to style but this giant button still works."
        downVoteButton.addEventListener('click', (e) => {
            alert("I can't believe you tried to downvote this puppy. Not gonna happen. But see downVoteImage function in index.js for logic if necessary or uncomment the line of code below this alert in index.js to see working.")
            // downVoteImage(e)
        })

    document.querySelector('.image-container').appendChild(downVoteButton);

    fetch(COMMENTS_URL)
        .then(res => res.json())
        .then(commentsData => {
            commentsData.forEach(comment => {
                renderComment(comment)
            })
        })
}

function renderComment(comment) {
    const commentsList = document.querySelector('.comments')
    const commentItem = document.createElement('li')
        commentItem.innerText = comment.content
    
    const deleteBtn = document.createElement('button')
        // deleteBtn.style.border = 'thick solid red'
        // deleteBtn.style.backgroundColor = 'pink'
        deleteBtn.innerText = "Delete"
        // deleteBtn.style.marginLeft = "1rem"
        deleteBtn.classList.add('delete-button')
        deleteBtn.addEventListener('click', () => {
            deleteComment(comment, commentItem)
        })
    
    commentItem.appendChild(deleteBtn)
    
    commentsList.appendChild(commentItem)
}

function likeImage(e) {

    //removed photo param, i.e. likePhoto(e, photo) {...}
    //because there is only one image
    //therefore the IMAGE_URL already utilizes the correct photo.id

    const likes = e.target.parentNode.querySelector('.likes')
    const likesCount = likes.innerText.split(' ')[0]
    
    const newLikesCount = parseInt(likesCount) + 1

    const updatedImage = {
        likes: newLikesCount
    }

    const reqObj = {
        headers: {"Content-Type": "application/json"},
        method: "PATCH",
        body: JSON.stringify(updatedImage)
    }

    fetch(IMAGE_URL, reqObj)
        .then(res => res.json())
        .then(_ => {
            likes.innerText = `${newLikesCount} likes`
        })
}

function newComment(e) {
    e.preventDefault()

    //Using a hard-coded imageId: 1 for all new comments because there's only one image and I wanted to keep the code as readable as possible
    //A way to make this more dynamic...
    //  Move event listener on the '.comment-form' to the renderImage function
    //    This would allow me access to the photo argument used in renderImage(image)
    //      Therefore setting 'imageId: image.id' would give me the correct imageId in the new object

    const newComment = {
        imageId: 1,
        content: e.target.comment.value
    }

    const reqObj = {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(newComment)
    }

    // console.log(reqObj)

    if(newComment.content !== ""){
        fetch(COMMENTS_URL, reqObj)
            .then(res => res.json())
            .then(resComment => {
                renderComment(resComment)
                document.querySelector('.comment-form').reset()
            })
    } else {
        alert("A new comment must contain content")
    }
}

function deleteComment(comment, li){
    // console.log(comment)
    // console.log(li)

    fetch(COMMENTS_URL+comment.id, {method: "DELETE"})
        .then(res => res.json())
        .then(_ => {
            li.remove()
        })
}

function downVoteImage(e) {
    const likes = e.target.parentNode.querySelector('.likes')
    const likesCount = likes.innerText.split(' ')[0]
    
    const newLikesCount = parseInt(likesCount) - 1

    const updatedImage = {
        likes: newLikesCount
    }

    const reqObj = {
        headers: {"Content-Type": "application/json"},
        method: "PATCH",
        body: JSON.stringify(updatedImage)
    }

    fetch(IMAGE_URL, reqObj)
        .then(res => res.json())
        .then(_ => {
            likes.innerText = `${newLikesCount} likes`
        })
}