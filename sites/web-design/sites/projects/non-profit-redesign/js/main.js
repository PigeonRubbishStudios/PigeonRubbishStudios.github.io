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

        // grabCursor: true,

        centeredSlides: true,

        effect: 'fade',

        mousewheel: false,

	    // If we need pagination
        pagination: 
        {
            el: '.swiper-pagination',

            dynamicBullets: true,

            clickable: true,

            loop: true,
	    },
    })
})



// Scroll Links