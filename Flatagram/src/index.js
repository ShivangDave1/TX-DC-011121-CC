// See the image received from the server, including its title, likes and comments when the page loads

const imageUrl = 'http://localhost:3000/images'
console.log(imageUrl)
const commentUrl = 'http://localhost:3000/comments'
console.log(commentUrl)

document.addEventListener('DOMContentLoaded', () => {

    fetch(imageUrl)
        .then(res => res.json())
        .then(imageData => imageData.forEach(recentPost))
        // .then(imageData => console.log(imageData))

    fetch(commentUrl)
        .then(res => res.json())
        .then(commentData => commentData.forEach(recentComment))
        // .then(commentData => console.log(commentData))
    })
    
    
function recentPost(post){
    console.log(post)
    
    let postTitle = document.querySelector('.title')
        postTitle.innerText = post.title
        // postTitle.innerText = 'hello'
        
    let postImage = document.querySelector('.image')
        postImage.src = post.image

    let postLikes = document.querySelector('.likes')
        postLikes.src = post.likes
}

function recentComment(comment){
    console.log(comment)
    
    // let postComment = document.querySelector('li')
    // let postComment = document.querySelector('.comments')
    let postCommentFirst = document.querySelector('.first-comment')
        postCommentFirst.innerText = comment.content
    let postCommentSec = document.querySelector('.sec-comment')
        postCommentSec.innerText = comment.content
    let postCommentThird = document.querySelector('.third-comment')
        postCommentThird.innerText = comment.content

}

// Click on the heart icon to increase image likes, and still see them when I reload the page

document.getElementById("like-button").addEventListener("click", function() {
    console.log('OMG you really like me!')
  });

function updateLikes() {

}

// Add a comment (no persistance needed)

function submitComment(){
    let commentForm = document.getElementsByClassName('comment-form')
    // let commentForm = document.getElementsByClassName('comment-input').value

    let commentBtn = document.getElementsByClassName('comment-button')
    
    commentBtn.addEventListener('submit', (event) => {
        let commentForm = document.getElementsByClassName('comment-input').value
        event.preventDefault();
        // console.log('hello')
    })
}