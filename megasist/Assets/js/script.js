const nokta=document.querySelectorAll(".nokta-ic");
const h1=document.querySelector(".banner>div>h1");
const img=document.querySelectorAll(".banner>div>img");
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    for (i = 0; i < img.length; i++) {
      img[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > img.length) {slideIndex = 1}    
    for (i = 0; i < nokta.length; i++) {
      nokta[i].className = nokta[i].className.replace(" active", "");
    }
    img[slideIndex-1].style.display = "block";  
    nokta[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }