// write your code here
const BASE_URL = 'http://localhost:3000/'

document.addEventListener('DOMContentLoaded', () => {
    let imageId = 'images/1?_embed=comments'
    
    function fetchImage() {
        fetch(BASE_URL+imageId)
            .then(res => res.json())
            .then(parsRes => renderImage(parsRes))
    }
    
    
    function renderImage(image) {
        

        let imageTitle = document.getElementById('image-title')
            imageTitle.innerText = image.title
        
        let imageLocation = document.getElementById('image-loc')
            imageLocation.src = image.image

        let imageLikes = document.getElementById('image-likes')
            imageLikes.innerText = `${image.likes} likes`

        let imageCommentsList = document.getElementById('image-comments')
            imageCommentsList.innerHTML = ''

            image.comments.forEach(comment => {
                let commentListItem = document.createElement('li')
                    commentListItem.innerText = comment.content
                    imageCommentsList.appendChild(commentListItem)
            })

        let likeButton = document.getElementById('like')
            likeButton.dataset.likeId = `like${image.id}`
            likeButton.addEventListener('click', (e) => {
                
                let likeBtnData = e.target.dataset.likeId
                let likeBtnId = likeBtnData.substring(4, likeBtnData.length)

                let likeUrl = `images/${likeBtnId}`
                
                let newLikes = {
                    likes: ++image.likes
                }

                let likeObj = {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    method: "PATCH",
                    body: JSON.stringify(newLikes)
                }

                fetch(BASE_URL+likeUrl, likeObj)
                    .then(res => res.json())
                    .then((parsRes) => {
                        fetchImage(parsRes)
                    })
                
            })

        // found a bug after implementing the unlike button - 
        // if you click like and unlike too fast you wind up starting a new fetch before previous 
        // ones have finished resulting in ERR_CONNECTION_REFUSED 
        // -- please click slowly to see functionality.. lol
        // not sure how to fix this (possibly use optimistic rendering to keep page up to date for next fetch?)
        let unlikeButton = document.getElementById('unlike')
            unlikeButton.dataset.unlikeId = `unlike${image.id}`
            unlikeButton.addEventListener('click', (e)=> {
                let unlikeBtnData = e.target.dataset.unlikeId
                let unlikeBtnId = unlikeBtnData.substring(6, unlikeBtnData.length)

                let unlikeUrl = `images/${unlikeBtnId}`
                
                let newLikes = {
                    likes: --image.likes
                }

                let unlikeObj = {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    method: "PATCH",
                    body: JSON.stringify(newLikes)
                }

                fetch(BASE_URL+unlikeUrl, unlikeObj)
                .then(res => res.json())
                .then((parsRes) => {
                    fetchImage(parsRes)
                })

                // console.log(unlikeObj)
            })
            

        let commentForm = document.getElementById('new-comment')
            commentForm.addEventListener('submit', (e) => {
                e.preventDefault()

                let commentUrl = `comments`
                
                let newComment = {
                    imageId: image.id,
                    content: e.target.comment.value
                }

                let commentObj = {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(newComment)

                }

                fetch(BASE_URL+commentUrl, commentObj)
                    .then(res => res.json())
                    .then(() => {
                        fetchImage()
                        commentForm.reset()
                    })
            })
    
    }

    fetchImage()
})