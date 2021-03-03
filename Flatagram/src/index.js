BASE_URL = "http://localhost:3000"
IMAGE_URL = "http://localhost:3000/images/"
COMMENTS_URL = "http://localhost:3000/comments/"

const imgContainer = document.querySelector(".image-container")
const imgCard = imgContainer.querySelector(".image-card")
const likeBtn = imgCard.querySelector(".like-button")
const commentForm = imgCard.querySelector(".comment-form")

likeBtn.addEventListener("click", toggleLike)
commentForm.addEventListener("submit", handleSubmit)

function getImage() {
  return fetch(IMAGE_URL)
    .then((response) => response.json())
    .then((imgData) => imgData.forEach(renderImg))
    .catch((errors) => {
      alert("Oh no!")
    })
}

function getComments() {
  return fetch(COMMENTS_URL)
    .then((response) => response.json())
    .then((commentsData) => commentsData.forEach(renderComments))
    .catch((errors) => {
      alert("Oh no!")
    })
}
getImage()
getComments()

function renderImg(imgData) {
  const imgTitle = imgCard.querySelector(".title")
  const imgSrc = imgCard.querySelector(".image")
  const imgLike = imgCard.querySelector(".likes-section")
  likeBtn.id = imgData.id

  imgTitle.textContent = imgData.title
  imgSrc.src = imgData.image
  imgCard.append(imgTitle, imgSrc)
}

function renderComments(commentsData) {
  const commentList = document.querySelector(".comments")
  const commentItem = document.createElement("li")

  commentItem.textContent = commentsData.content
  commentList.append(commentItem)
}

function toggleLike(event) {
  const likeSpan = document.querySelector(".likes")
  const newLikes = parseInt(likeSpan.textContent) + 1
  likeSpan.textContent = newLikes + " likes"

  likeObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newLikes),
  }

  fetch(IMAGE_URL + event.target.id, likeObj)
    .then((res) => res.json())
    .then((updatedImage) => {
      document.getElementById(
        updatedImage.id
      ).textContent = `likes: ${updatedImage.likes}`
    })
}

function handleSubmit(event) {
  event.preventDefault()

  const commentList = document.querySelector(".comments")
  const commentItem = document.createElement("li")

  const commentInput = document.querySelector(".comment-input")
  commentItem.textContent = commentInput.value

  commentList.append(commentItem)
  event.target.reset()
}
