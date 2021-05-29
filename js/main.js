// Swiper
$(document).ready(function()
{
    var mySwiper = new Swiper ('.swiper-container',
    {
	      // Optional parameters
	      direction: 'horizontal',

        loop: true,

        speed: 1000,
        
        autoplay: 
        {
            delay: 3500,

            disableOnInteraction: false,
        },

	    // If we need pagination
        pagination: 
        {
            el: '.swiper-pagination',

            type: 'progressbar',
	    },
    })
})

$('img').stopStealPhoto(
  {

  // custom message
  message : 'This image is protected',

  // delay in ms
  delay: 600,

  // additional CSS class
  customClass: undefined,

  // offset of cursor
  cursorOffset: 14
  
});


// Variables
var slideIndex = 1;
var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
var isOpera = typeof window.opr !== "undefined";
var isEdge = winNav.userAgent.indexOf("Edge") > -1;
var isiOSChrome = winNav.userAgent.match("CriOS");
var tl = gsap.timeline();
var gtl = gsap.timeline();
var gameShown = false;


// Function Call-Backs
showSlides(slideIndex);


// Functions
// Mobile Menu
function menuToggle() 
{
    var x = document.getElementById("myTopnav");
    
    if (x.className === "topnav") 
    {
      scrollLock.disablePageScroll();

      tl.to(x.className += " responsive", {duration: 0});
      tl.to('a.nav-list', {display: "block", duration: 0})
      tl.fromTo('.responsive', {height: "0%"}, {height: "100%", duration: 0.5, ease: "none"})
    } 
    else 
    {
      scrollLock.enablePageScroll();

      tl.fromTo('.responsive', {height: "100%"}, {height: "0%", duration: 0.5, ease: "none"})
      tl.to('a.nav-list', {display: "none", duration: 0}, "+=1")
      tl.to(x.className = "topnav", {duration: 0});
    }
}

function reloadCardinals()
{
  var iFrame = document.getElementById('cardinals-map');
  iFrame.src = iFrame.src;
}

function reloadDeer()
{
  var iFrame = document.getElementById('deer-map');
  iFrame.src = iFrame.src;
}

// Open the Modal
function openModal() 
{
  document.getElementById("myModal").style.display = "block";
  
  

  scrollLock.disablePageScroll();

  // if (slideIndex == 3 || slideIndex == 4)
  // {
  //   if (isiOSChrome)
  //   {
  //     null
  //   }
  //   else if
  //   (isChromium !== null && typeof isChromium !== "undefined" && vendorName === "Google Inc." && isOpera === false && isEdge === false)
  //   {
  //     alert("If map symbols do not load, right click on the map and select \"Reload Frame\"");
  //   }
  //   else
  //   {
  //     null
  //   }
  // }
}

// Close the Modal
function closeModal() 
{
  document.getElementById("myModal").style.display = "none";

  scrollLock.enablePageScroll();
}

// Modal Slides
function plusSlides(n) 
{
  showSlides(slideIndex += n);
}

// Modal Current Slide
function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

// Modal Show Slides
function showSlides(n) 
{
  var i;

  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length)
  {
    slideIndex = 1
  }

  if (n < 1)
  {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

// Show Game
function toggleGame(n)
{
  var gameInfo = "#" + n;
  
  if (gameShown == false)
  {
    gameShown = true;
  
    gtl.to(".game-thumbnails", {opacity: 0, duration: 0.75});
    gtl.to(window, {scrollTo: 0, duration: 0.75}, "-=0.75");
    gtl.to(".game-thumbnails", {display: "none", duration: 0});
    gtl.to(gameInfo, {display: "block", duration: 0});
    gtl.fromTo(gameInfo, {opacity: 0}, {opacity: 1, duration: 0.75});

    if(gameInfo == "#cc-info")
    {
      gtl.to("#itch-container", {height: "fit-content", duration: 0.75}, "-=0.75");
    }
  }
  else
  {
    gameShown = false;
  
    gtl.to(gameInfo, {opacity: 0, duration: 0.75});
    if(gameInfo == "#cc-info")
    {
      gtl.to("#itch-container", {height: 0, duration: 0.75}, "-=0.75");
    }
    gtl.to(gameInfo, {display: "none", duration: 0});
    gtl.to(".game-thumbnails", {display: "block", duration: 0});
    gtl.fromTo(".game-thumbnails", {opacity: 0}, {opacity: 1, duration: 0.75});
  }
}

// Autoplay Motion Graphics Videos
function playMenu(n)
{
  if (n == 1)
  {
    document.getElementById('menu-width').currentTime = 0;
    document.getElementById('menu-width').play();
  }

  if (n == 2)
  {
    document.getElementById('kiosk-width').currentTime = 0;
    document.getElementById('kiosk-width').play();
  }

  if (n == 3)
  {
    document.getElementById('perception-width').currentTime = 0;
    document.getElementById('perception-width').play();
  }

}


