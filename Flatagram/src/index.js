// write your code here
const IMG_URL = 'http://localhost:3000/images/1'

document.addEventListener('DOMContentLoaded', function(){
    fetch(IMG_URL)
        .then(resp => resp.json())
        .then(postData => renderPost(postData))
})


function renderPost(postData){

    for(images in postData){
        console.log(`${title}: ${image.title}`)
    }

    // postData.images.forEach( images => {
    //     let imageTitle = document.getElementsByClassName('title')
    //         imageTitle.innerText = images.title
    // }); *NOT AN ARRAY*
    
    // const imageTitle = document.getElementsByClassName('title')
    //     imageTitle.innerHTML = `${images.title}`

}   
    