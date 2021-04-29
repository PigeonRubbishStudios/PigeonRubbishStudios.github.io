$anchors = document.querySelectorAll('nav a');

$anchors.forEach(element =>
    {
        element.onclick = function(event)
        {
            event.preventDefault();
            let myHREF = event.currentTarget.getAttribute('href');
            gsap.to(window, {duration: 0.5, scrollTo: myHREF});
        };
    });