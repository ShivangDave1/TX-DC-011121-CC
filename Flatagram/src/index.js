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
        likeImage(e, image)
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

    fetch(COMMENTS_URL, reqObj)
        .then(res => res.json())
        .then(resComment => {
            renderComment(resComment)
            document.querySelector('.comment-form').reset()
        })
}
