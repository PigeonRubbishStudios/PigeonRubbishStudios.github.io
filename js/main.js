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
function showGame(n)
{
  if (n == 1)
  {
    $("#game-thumbnails").fadeOut("slow");

    setTimeout(() => 
    {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

      document.getElementById("game-thumbnails").style.display = "none";

      $("#fpdo-info").fadeIn("slow");
  
      document.getElementById("fpdo-info").style.display = "block";
    }, 250);
  }
  
  if (n == 2)
  {
    $("#game-thumbnails").fadeOut("slow");

    setTimeout(() => 
    {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

      document.getElementById("game-thumbnails").style.display = "none";

      $("#sr-info").fadeIn("slow");
  
      document.getElementById("sr-info").style.display = "block";
    }, 250);
  }
  
  if (n == 3)
  {
    $("#game-thumbnails").fadeOut("slow");

    setTimeout(() => 
    {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
       
      document.getElementById("game-thumbnails").style.display = "none";

      $("#ttt-info").fadeIn("slow");
  
      document.getElementById("ttt-info").style.display = "block";
    }, 250);
  } 

  if (n == 4)
  {
    $("#game-thumbnails").fadeOut("slow");

    setTimeout(() => 
    {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
       
      document.getElementById("game-thumbnails").style.display = "none";

      $("#cc-info").fadeIn("slow");
  
      document.getElementById("cc-info").style.display = "block";
      document.getElementById("itch-container").style.height = "fit-content";
    }, 250);
  } 
}

// Hide Game
function hideGame(n)
{
  if (n == 1)
  {
    $("#fpdo-info").fadeOut("slow");

    setTimeout(() => 
    { 
      document.getElementById("fpdo-info").style.display = "none";

      $("#game-thumbnails").fadeIn("slow");
  
      document.getElementById("game-thumbnails").style.display = "block";
    }, 250);
  }
  
  if (n == 2)
  {
    $("#sr-info").fadeOut("slow");

    setTimeout(() => 
    { 
      document.getElementById("sr-info").style.display = "none";

      $("#game-thumbnails").fadeIn("slow");
  
      document.getElementById("game-thumbnails").style.display = "block";
    }, 250);
  } 

  if (n == 3)
  {
    $("#ttt-info").fadeOut("slow");

    setTimeout(() => 
    { 
      document.getElementById("ttt-info").style.display = "none";

      $("#game-thumbnails").fadeIn("slow");
  
      document.getElementById("game-thumbnails").style.display = "block";
    }, 250);
  } 

  if (n == 4)
  {
    $("#cc-info").fadeOut("slow");

    setTimeout(() => 
    { 
      document.getElementById("cc-info").style.display = "none";

      $("#game-thumbnails").fadeIn("slow");
  
      document.getElementById("game-thumbnails").style.display = "block";
      document.getElementById("itch-container").style.height = "0";
    }, 250);
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


