const BASE_URL = 'http://localhost:3000/'
const IMAGE_URL = BASE_URL+'images/1'
const COMMENTS_URL = BASE_URL+'/comments/'

document.addEventListener('DOMContentLoaded', () => {
    fetchPhoto()
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
