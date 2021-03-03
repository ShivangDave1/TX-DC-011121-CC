const BASE_URL = 'http://localhost:3000/'
const IMAGE_URL = BASE_URL+'images/1'
const COMMENTS_URL = BASE_URL+'comments/'

document.addEventListener('DOMContentLoaded', () => {
    fetchPhoto()
    document.querySelector('.comment-form').addEventListener('submit', newComment)
})

function fetchPhoto() {
    fetch(IMAGE_URL)
        .then(res => res.json())
        .then(photoData => {
            renderPhoto(photoData)
        })
}

function renderPhoto(photo) {
    document.querySelector('#image-title').innerHTML = photo.title
    document.querySelector('#image-picture').src = photo.image
    document.querySelector('.likes').innerText = `${photo.likes} likes`
    document.querySelector('.like-button').addEventListener('click', (e) => {
        // console.log(e.target.parentNode.querySelector('.likes').innerText)
        // console.log(photo.likes)
        likePhoto(e, photo)
    })

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
    
    commentsList.appendChild(commentItem)
}

function likePhoto(e, photo) {
    const likes = e.target.parentNode.querySelector('.likes')
    const likesCount = likes.innerText.split(' ')[0]
    // console.log(likesCount)
    const newLikesCount = parseInt(likesCount) + 1

    const updatedPhoto = {
        likes: newLikesCount
    }

    // console.log(updatedPhoto)

    const reqObj = {
        headers: {"Content-Type": "application/json"},
        method: "PATCH",
        body: JSON.stringify(updatedPhoto)
    }

    // console.log(reqObj);

    fetch(IMAGE_URL, reqObj)
        .then(res => res.json())
        .then(_ => {
            likes.innerText = `${newLikesCount} likes`
        })
}

function newComment(e) {
    e.preventDefault()

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

    fetch(COMMENTS_URL, reqObj)
        .then(res => res.json())
        .then(resComment => {
            renderComment(resComment)
            document.querySelector('.comment-form').reset()
        })
}
