const navlink = document.querySelector(".navbar-links")
const bars = document.querySelector("#bars")
const times = document.querySelector("#times")

bars.addEventListener("click", showmenu)
times.addEventListener("click", hidemenu)

function showmenu(){
    navlink.style.right = "0"
}

function hidemenu(){
    navlink.style.right = "-200px"
}


let slideIndex = 0;
showSlides();

function showSlides(){
    const slides = document.getElementsByClassName("mySlides");
    const slides2 = document.getElementsByClassName("mySlides2");
    const slides3 = document.getElementsByClassName("mySlides3");
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none"
        slides2[i].style.display = "none"
        slides3[i].style.display = "none"
    }
    slideIndex++;
    const max_slides = Math.max(slides.length,slides2.length,slides3.length)
    console.log(max_slides)

    if(slideIndex > max_slides){
        slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "block";
    slides2[slideIndex - 1].style.display = "block";
    slides3[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000)
}


// showSlidess();

// function showSlidess(){
//     const slides = document.querySelectorAll(".school_images");
//     console.log(slides.length)

    // for(i=0; i<slides.length; i++){
    //     slides[i].style.display = "none"
    // }
    // slideIndexx++;

    // if(slideIndexx > slides.length){
    //     slideIndexx = 1
    // }
    
    // slides[slideIndexx - 1].style.display = "block";
    
    // setTimeout(showSlidess, 4000)
// }


// let slideIndex;
// showSlides(slideIndex);

// function plusSlides(n){
//     showSlides(slideIndex += n);
// }

// function showSlides(n){
//     // let i;
//     const slides = document.getElementsByClassName("mySlides");
//     if(n > slides.length){slideIndex = 1}

//     if(n < 1){slideIndex = slideIndex.length}
    
//     for(i=0; i< slides.length; i++){
//         slides[i].getElementsByClassName.display = "none"
//     }
//     slides[slideIndex - 1].style.display = "block"
// }

// let slideIndexx = [1,1];
// let slideId = ["mySlides", "mySlides2"]

// showSlidess(1,0);
// showSlidess(1,1);

// function plusSlides(n,n1){
//     showSlidess(slideIndexx[n1] += n, n1);
// }

// function showSlidess(n,n1){

//     const slides = document.getElementsByClassName(slideId[n1]);
    
//     if(n > slides.length){
//         slideIndexx[n1] = 1
//     }
//     if(n < 1){
//         slideIndexx[n1] = slides.length
//     }
//     for(i=0; i<slides.length; i++){
//         slides[i].style.display = "none";
//     }
    
//     slides[slideIndexx[n1] - 1].style.display = "block";
//     console.log(slideIndexx)
//     setTimeout(showSlidess, 2000)
// }