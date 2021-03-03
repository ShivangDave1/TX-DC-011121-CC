const MAIN_URL = "http://localhost:3000/images/1";

// fetch data from server
getInfo = () => {
  fetch(MAIN_URL)
    .then((response) => response.json())
    .then((imageData) => renderData(imageData));
};

// render Data (get image, title, likes and comments - when page loads)
renderData = (imageData) => {
  let photo = document.querySelector(".image");
  photo.src = imageData.image;

  let title = document.querySelector(".title");
  title.innerHTML = imageData.title;

  let likes = document.querySelector(".likes");
  likes.innerHTML = imageData.likes + " likes";
  let likeBtn = document.querySelector(".like-button");
  likeBtn.addEventListener("click", addLikes);
  let disLikeBtn = document.querySelector(".dislike-button");
  disLikeBtn.addEventListener("click", disLikes);

  let commentList = document.querySelector(".comments");
  imageData.comments.forEach((comment) => {
    let existComment = document.createElement("li");
    existComment.innerHTML = comment.content;
    commentList.appendChild(existComment);
    // let postComment = document.querySelector(".comment-button");
    // postComment.addEventListener("submit", addComment);
  });
};

// like button functionality
addLikes = (e) => {
  let newLikes = {
    likes: +document.querySelector(".likes").innerHTML.split(" ")[0] + 1,
  };
  fetch(MAIN_URL, {
    headers: { "Content-Type": "application/json" },
    method: "PATCH",
    body: JSON.stringify(newLikes),
  })
    .then((res) => res.json())
    .then((imageLikes) => {
      document.querySelector(".likes").innerHTML = imageLikes.likes + " likes";
    });
};

// dislike functionality
disLikes = (e) => {
  let newLikes = {
    likes: +document.querySelector(".likes").innerHTML.split(" ")[0] - 1,
  };
  fetch(MAIN_URL, {
    headers: { "Content-Type": "application/json" },
    method: "PATCH",
    body: JSON.stringify(newLikes),
  })
    .then((res) => res.json())
    .then((imageDislikes) => {
      document.querySelector(".likes").innerHTML =
        imageDislikes.likes + " likes";
    });
};

// add a comment
// addComment = (e) => {
//   e.preventDefault();
//   let newComment = {
//     imageId: document.getElementById("inputForm")
//     content: d

// fetch(MAIN_URL, {
//     headers: { "Content-Type": "application/json" },
//     method: "POST",
//     body: JSON.stringify(newComment),
// }
//     .then((res) => res.json())
//     .then(addComment)

//   });
// };

// different way of doing COMContentLoaded
window.onload = getInfo;
