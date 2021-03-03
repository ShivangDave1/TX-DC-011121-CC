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
                    commentListItem.style.padding = '3px'
                    commentListItem.dataset.commentId = `comment${comment.id}`

                let deleteButton = document.createElement('button')
                    deleteButton.classList.add('comment-button')
                    deleteButton.innerText = "Delete"
                    deleteButton.style.float = 'right'
                    deleteButton.dataset.delId = `delete${comment.id}`
                    deleteButton.addEventListener('click', (e) => {
                        
                        let delBtnData = e.target.dataset.delId
                        let delBtnId = delBtnData.substring(6, delBtnData.length)
                        
                        let delUrl = `comments/${delBtnId}`

                        let delObj = {
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json"
                            },
                            method: "DELETE"
                        }

                        fetch(BASE_URL+delUrl, delObj)
                            .then(res => res.json())
                            .then(() => {
                                e.target.parentElement.remove()
                            })
                    })

                    commentListItem.appendChild(deleteButton)

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
                        imageLikes.innerText = `${parsRes.likes} likes`
                    })
                
            })

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
                    imageLikes.innerText = `${parsRes.likes} likes`
                })

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
                    .then((parsRes) => {
                        
                        let newComment = document.createElement('li')
                            newComment.innerText = parsRes.content
                            newComment.style.padding = '3px'
                            newComment.dataset.commentId = `comment${parsRes.id}`

                        let deleteButton = document.createElement('button')
                            deleteButton.classList.add('comment-button')
                            deleteButton.innerText = "Delete"
                            deleteButton.style.float = 'right'
                            deleteButton.dataset.delId = `delete${parsRes.id}`
                            deleteButton.addEventListener('click', (e) => {
                                
                                let delBtnData = e.target.dataset.delId
                                let delBtnId = delBtnData.substring(6, delBtnData.length)
                                
                                let delUrl = `comments/${delBtnId}`
        
                                let delObj = {
                                    headers: {
                                        "Content-Type": "application/json",
                                        Accept: "application/json"
                                    },
                                    method: "DELETE"
                                }
        
                                fetch(BASE_URL+delUrl, delObj)
                                    .then(res => res.json())
                                    .then(() => {
                                        e.target.parentElement.remove()
                                    })
                            })
        
                        newComment.appendChild(deleteButton)
        
                        imageCommentsList.appendChild(newComment)

                        commentForm.reset()
                    })
            })
    
    }

    fetchImage()
})