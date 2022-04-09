const hamburger = document.querySelector(".hamburger");

const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const s3 = document.getElementById("s3");

const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const n4 = document.getElementById("n4");
const n5 = document.getElementById("n5");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");

const lineNum = document.querySelectorAll(".lineNum");

const nav = document.getElementsByTagName("nav")[0];
const navCont = document.querySelector(".navCont");

const carousel = document.getElementById("carousel");
var carouselCont = document.querySelector(".carouselCont");

const searchImg = document.getElementById("search-img");
const searchField = document.getElementById("search-field");
const searchCont = document.querySelector(".searchCont");

const detail1 = document.querySelector(".detail1");
const imgdet1 = document.getElementById("imgdet1");
const detail2 = document.querySelector(".detail2");
const imgdet2 = document.getElementById("imgdet2");
const detail3 = document.querySelector(".detail3");
const imgdet3 = document.getElementById("imgdet3");


var on = true;
var searchToggle = true;


hamburger.addEventListener("click", () => {

    if (on == true) {
        on = !on;
        s2.style.opacity = "0";
        s2.style.transform = "translateX(-100%)";
        s1.style.transform = "translateY(7px) rotate(45deg)";
        s3.style.transform = "translateY(-7px) rotate(-45deg)";
    } else if (on == false) {
        on = !on;
        s2.style.opacity = "1";
        s2.style.transform = "translateX(0%)";
        s1.style.transform = "translateY(0px) rotate(0deg)";
        s3.style.transform = "translateY(0px) rotate(0deg)";
    }
});

n1.addEventListener("click", () => {

    img1.style.opacity = "1";
    img2.style.opacity = "0";
    img3.style.opacity = "0";
    img4.style.opacity = "0";
    img5.style.opacity = "0";

    lineNum[0].style.transform = "scaleX(1)"
    lineNum[1].style.transform = "scaleX(0)"
    lineNum[2].style.transform = "scaleX(0)"
    lineNum[3].style.transform = "scaleX(0)"
    lineNum[4].style.transform = "scaleX(0)"

    carousel.style.transform = `translateY(0px)`;

});

n2.addEventListener("click", () => {

    const textH = document.querySelector(".txt1Cont").clientHeight;

    img1.style.opacity = "0";
    img2.style.opacity = "1";
    img3.style.opacity = "0";
    img4.style.opacity = "0";
    img5.style.opacity = "0";

    lineNum[0].style.transform = "scaleX(0)"
    lineNum[1].style.transform = "scaleX(1)"
    lineNum[2].style.transform = "scaleX(0)"
    lineNum[3].style.transform = "scaleX(0)"
    lineNum[4].style.transform = "scaleX(0)"

    carousel.style.transform = `translateY(-${textH + 30}px)`;
});

n3.addEventListener("click", () => {
    const textH = document.querySelector(".txt1Cont").clientHeight;

    img1.style.opacity = "0";
    img2.style.opacity = "0";
    img3.style.opacity = "1";
    img4.style.opacity = "0";
    img5.style.opacity = "0";

    lineNum[0].style.transform = "scaleX(0)"
    lineNum[1].style.transform = "scaleX(0)"
    lineNum[2].style.transform = "scaleX(1)"
    lineNum[3].style.transform = "scaleX(0)"
    lineNum[4].style.transform = "scaleX(0)"

    carousel.style.transform = `translateY(-${(textH + 30) * 2}px)`;
});

n4.addEventListener("click", () => {
    const textH = document.querySelector(".txt1Cont").clientHeight;

    img1.style.opacity = "0";
    img2.style.opacity = "0";
    img3.style.opacity = "0";
    img4.style.opacity = "1";
    img5.style.opacity = "0";

    lineNum[0].style.transform = "scaleX(0)"
    lineNum[1].style.transform = "scaleX(0)"
    lineNum[2].style.transform = "scaleX(0)"
    lineNum[3].style.transform = "scaleX(1)"
    lineNum[4].style.transform = "scaleX(0)"


    carousel.style.transform = `translateY(-${(textH + 30) * 3}px)`;

});

n5.addEventListener("click", () => {
    const textH = document.querySelector(".txt1Cont").clientHeight;

    img1.style.opacity = "0";
    img2.style.opacity = "0";
    img3.style.opacity = "0";
    img4.style.opacity = "0";
    img5.style.opacity = "1";

    lineNum[0].style.transform = "scaleX(0)"
    lineNum[1].style.transform = "scaleX(0)"
    lineNum[2].style.transform = "scaleX(0)"
    lineNum[3].style.transform = "scaleX(0)"
    lineNum[4].style.transform = "scaleX(1)"

    carousel.style.transform = `translateY(-${(textH + 30) * 4}px)`;
});



window.addEventListener("scroll", () => {
    //This value needs to be updated when we scroll so we include it in the function. Otherwise the value will be fixed at what it is when the website initially loads.
    const scrolled = Math.ceil(window.scrollY);

    if (scrolled >= 20) {
        nav.style.height = "75px";
        nav.style.background = "rgba(0, 0, 0, 0.548)";
    } else {
        nav.style.height = "120px";
        nav.style.background = "transparent";

    }
});

// the search icon moves the word search up

//pressing esc moves it back down 
searchImg.addEventListener("click", () => {
    if (searchToggle == true) {
        console.log("hi");
        searchCont.style.transform = "translateY(-12.5px)";
        searchToggle = false;
        searchImg.style.opacity= "0";
        searchField.style.opacity = "1";
    } 
});

window.addEventListener("keyup", function(event) {
    if (event.keyCode === 27 && searchToggle == false) {
        searchCont.style.transform = "translateY(15px)";
        searchToggle = true;
        searchImg.style.opacity= "1";
        searchField.style.opacity = "0";    }
});

detail1.addEventListener("mouseenter", ()=> {
    imgdet1.style.filter = "grayscale(1)";
});

detail1.addEventListener("mouseleave", ()=> {
    imgdet1.style.filter = "grayscale(0)";
});

detail2.addEventListener("mouseenter", ()=> {
    imgdet2.style.filter = "grayscale(1)";
});

detail2.addEventListener("mouseleave", ()=> {
    imgdet2.style.filter = "grayscale(0)";
});

detail3.addEventListener("mouseenter", ()=> {
    imgdet3.style.filter = "grayscale(1)";
});

detail3.addEventListener("mouseleave", ()=> {
    imgdet3.style.filter = "grayscale(0)";
});

function onLoad() {
    const windowW = window.innerWidth;
    const txt1Conth1 = document.querySelector(".txt1Conth1");

    if (windowW <= 789) {
        console.log("mobile");
        txt1Conth1.style.fontSize="40pt";
        
    } else {
        console.log("desktop");
        txt1Conth1.style.
        carouselCont.style.background="green";
        fontSize="70pt";
    }
}

setInterval(function() {
    onLoad();
}, 100);

onLoad();

