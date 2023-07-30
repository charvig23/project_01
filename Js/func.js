let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// Automatic slideshow//
let slideIndex2 = 0;
showslides();

function showslides() {
  let i;
  let slide = document.getElementsByClassName("mySlides");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slide.length) {slideIndex2 = 1}
  slide[slideIndex2-1].style.display = "block";
  setTimeout(showslides, 5000); // Change image every 2 seconds
}
const myPopup = document.getElementById("myform");
const myBtn = document.getElementById("logbtn");
const signup = document.getElementById("noaccount")
const form1 = document.getElementById("form1");

myBtn.addEventListener("click", function() {
  form.style.display = "block";
});
signup.addEventListener("click",function(){
  form1.style.display = "block";
  form.style.display = "none";
});
const myPopup1 = document.getElementById("myform1");
const myBtn1 = document.getElementById("signbtn");
const login = document.getElementById("alreadyaccount")
const form = document.getElementById("form");

myBtn1.addEventListener("click", function() {
  form1.style.display = "block";
});
login.addEventListener("click",function(){
  form.style.display = "block";
  form1.style.display = "none";
});
function closeform(){
  form.style.display = "none";
}
function closeform1(){
  form1.style.display = "none";
}
function profile(){
  location.replace("dashboard.html");
}
function myhome(){
  location.replace("index.html");
}
let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });
});
