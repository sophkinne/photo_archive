const listItem = document.querySelectorAll('#image-hover');
let screenshot_container = document.querySelector('.screenshot-container');
let imgList = ['./assets/screenshots/qbg.png','./assets/screenshots/showsiveseen.png','./assets/screenshots/cats.png','./assets/screenshots/selfies.png','./assets/screenshots/landandsea.png', './assets/screenshots/friends.png','./assets/screenshots/lauren.png','./assets/screenshots/samandkq.png','./assets/screenshots/cecilia.png','./assets/screenshots/me.png']
let screenshot;

/*Replace images on hover*/
imgList.forEach((item, index) => {

    /*Replace image with feature*/
    mouseOn(index)

    
    /*Return to landing image*/
    mouseOff(index)
})

function mouseOn(index) {
        listItem[index].addEventListener("mouseover", function(){
            screenshot = imgList[index]	
            screenshot_container.appendChild = screenshot
            console.log(screenshot)
            listItem[index].style.cursor = 'pointer'
            listItem[index].style.opacity = "0.5"
    })
}

function mouseOff(index) {
        listItem[index].addEventListener("mouseout", function(){
        listItem[index].style.cursor = 'none'
        listItem[index].style.opacity = "1"
    })
}