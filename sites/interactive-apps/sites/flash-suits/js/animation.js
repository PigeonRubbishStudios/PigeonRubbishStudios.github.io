const etl = gsap.timeline();

etl.fromTo('.animated-div', {scale: 0.25, rotation: 359, opacity: 0}, {scale: 1, rotation: 0, opacity: 1, duration: 0.75, ease: "power2.in"}, "+=0.25");
etl.to('.animated-div', {y: "-=100px", duration: 1.5, ease: "power2.inOut"}, "+=0.25");
etl.to('#title', {y: "-=75px", opacity: 1, duration: 2, ease: "power2.inOut"});

var s2Active = false;
var s3Active = false;
var s4Active = false;
var s5Active = false;
var s6Active = false;
var s7Active = false;
var s8Active = false;

window.addEventListener("scroll", (event) => 
{
    let sec1active = document.getElementById("s1");
    var sec2active = document.getElementById("s2");
    var sec3active = document.getElementById("s3");
    var sec4active = document.getElementById("s4");
    var sec5active = document.getElementById("s5");
    var sec6active = document.getElementById("s6");
    var sec7active = document.getElementById("s7");

    let scroll = this.scrollY;
    if (scroll <= 285)
    {
        sec1active.className = "active";
        sec2active.className = "";
        sec3active.className = "";
        sec4active.className = "";
        sec5active.className = "";
        sec6active.className = "";
        sec7active.className = "";
    }
    else if (scroll <= 855)
    {
        sec1active.className = "";
        sec2active.className = "active";
        sec3active.className = "";
        sec4active.className = "";
        sec5active.className = "";
        sec6active.className = "";
        sec7active.className = "";
    }
    else if (scroll <= 1425)
    {
        sec1active.className = "";
        sec2active.className = "";
        sec3active.className = "active";
        sec4active.className = "";
        sec5active.className = "";
        sec6active.className = "";
        sec7active.className = "";
    }
    else if (scroll <= 1995)
    {
        sec1active.className = "";
        sec2active.className = "";
        sec3active.className = "";
        sec4active.className = "active";
        sec5active.className = "";
        sec6active.className = "";
        sec7active.className = "";
    }
    else if (scroll <= 2565)
    {
        sec1active.className = "";
        sec2active.className = "";
        sec3active.className = "";
        sec4active.className = "";
        sec5active.className = "active";
        sec6active.className = "";
        sec7active.className = "";
    }
    else if (scroll <= 3135)
    {
        sec1active.className = "";
        sec2active.className = "";
        sec3active.className = "";
        sec4active.className = "";
        sec5active.className = "";
        sec6active.className = "active";
        sec7active.className = "";
    }
    else if (scroll <= 3710)
    {
        sec1active.className = "";
        sec2active.className = "";
        sec3active.className = "";
        sec4active.className = "";
        sec5active.className = "";
        sec6active.className = "";
        sec7active.className = "active";
    }
    else
    {
        sec1active.className = "";
        sec2active.className = "";
        sec3active.className = "";
        sec4active.className = "";
        sec5active.className = "";
        sec6active.className = "";
        sec7active.className = "";
    }
});

function sec1()
{
    const s1tl = gsap.timeline();

    s1tl.to("#sec1", {"clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 0%)", duration: 100});

    s1tl.to("#sec1", {"clip-path": "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%)", duration: 100, onComplete: function ()
        {
            if(s2Active == false)
            {
                function lightningFlicker()
                {
                    const ltl = gsap.timeline({repeat: -1, yoyo: true});
                    ltl.fromTo('.s2', {opacity: 0.5}, {opacity: () => Math.random() * 1 + 0.5, duration: 0.0009});
                }

                gsap.fromTo('.s2', {opacity: 0.5}, {opacity: 1, duration: 0.5, onComplete: lightningFlicker()});

                const tdtl = gsap.timeline();

                tdtl.to('#s2-title', {y: "+=38px", opacity: 1, duration: 2, ease: "power2.inOut"});
                tdtl.to('#s2-description', {y: "-=38px", opacity: 1, duration: 2, ease: "power2.inOut"});

                s2Active = true;
                console.log("s2 = " + s2Active);
            }
        }});

    return s1tl
}

function sec2()
{
    const s2tl = gsap.timeline();

    s2tl.to("#sec2", {"clip-path": "polygon(0% 100%, 0% 0%, 0% 0%, 100% 0%, 100% 0%, 0% 100%)", duration: 100});

    s2tl.to("#sec2", {"clip-path": "polygon(0% 0%, 0% 0%, 0% 0%, 100% 0%, 0% 0%, 0% 0%)", duration: 100, onComplete: function ()
    {
        if(s3Active == false)
        {
            function lightningFlicker()
            {
                const ltl = gsap.timeline({repeat: -1, yoyo: true});
                ltl.fromTo('.s3', {opacity: 0.5}, {opacity: () => Math.random() * 1 + 0.5, duration: 0.0009});
            }

            gsap.fromTo('.s3', {opacity: 0.5}, {opacity: 1, duration: 0.5, onComplete: lightningFlicker()});

            const tdtl = gsap.timeline();

            tdtl.to('#s3-title', {y: "+=38px", opacity: 1, duration: 2, ease: "power2.inOut"});
            tdtl.to('#s3-description', {y: "-=38px", opacity: 1, duration: 2, ease: "power2.inOut"});

            s3Active = true;
            console.log("s3 = " + s3Active);
        }
    }});

    return s2tl
}

function sec3()
{
    const s3tl = gsap.timeline();

    s3tl.to("#sec3", {"clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 0%)", duration: 100});

    s3tl.to("#sec3", {"clip-path": "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%)", duration: 100, onComplete: function ()
    {
        if(s4Active == false)
        {
            function lightningFlicker()
            {
                const ltl = gsap.timeline({repeat: -1, yoyo: true});
                ltl.fromTo('.s4', {opacity: 0.5}, {opacity: () => Math.random() * 1 + 0.5, duration: 0.0009});
            }

            gsap.fromTo('.s4', {opacity: 0.5}, {opacity: 1, duration: 0.5, onComplete: lightningFlicker()});

            const tdtl = gsap.timeline();

            tdtl.to('#s4-title', {y: "+=38px", opacity: 1, duration: 2, ease: "power2.inOut"});
            tdtl.to('#s4-description', {y: "-=38px", opacity: 1, duration: 2, ease: "power2.inOut"});

            s4Active = true;
            console.log("s4 = " + s4Active);
        }
    }});

    return s3tl
}

function sec4()
{
    const s4tl = gsap.timeline();

    s4tl.to("#sec4", {"clip-path": "polygon(0% 100%, 0% 0%, 0% 0%, 100% 0%, 100% 0%, 0% 100%)", duration: 100});

    s4tl.to("#sec4", {"clip-path": "polygon(0% 0%, 0% 0%, 0% 0%, 100% 0%, 0% 0%, 0% 0%)", duration: 100, onComplete: function ()
    {
        if(s5Active == false)
        {
            function lightningFlicker()
            {
                const ltl = gsap.timeline({repeat: -1, yoyo: true});
                ltl.fromTo('.s5', {opacity: 0.5}, {opacity: () => Math.random() * 1 + 0.5, duration: 0.0009});
            }

            gsap.fromTo('.s5', {opacity: 0.5}, {opacity: 1, duration: 0.5, onComplete: lightningFlicker()});

            const tdtl = gsap.timeline();

            tdtl.to('#s5-title', {y: "+=38px", opacity: 1, duration: 2, ease: "power2.inOut"});
            tdtl.to('#s5-description', {y: "-=38px", opacity: 1, duration: 2, ease: "power2.inOut"});

            s5Active = true;
            console.log("s5 = " + s5Active);
        }
    }});

    return s4tl
}

function sec5()
{
    const s5tl = gsap.timeline();

    s5tl.to("#sec5", {"clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 0%)", duration: 100});

    s5tl.to("#sec5", {"clip-path": "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%)", duration: 100, onComplete: function ()
    {
        if(s6Active == false)
        {
            function lightningFlicker()
            {
                const ltl = gsap.timeline({repeat: -1, yoyo: true});
                ltl.fromTo('.s6', {opacity: 0.5}, {opacity: () => Math.random() * 1 + 0.5, duration: 0.0009});
            }
    
            gsap.fromTo('.s6', {opacity: 0.5}, {opacity: 1, duration: 0.5, onComplete: lightningFlicker()});

            const tdtl = gsap.timeline();

            tdtl.to('#s6-title', {y: "+=38px", opacity: 1, duration: 2, ease: "power2.inOut"});
            tdtl.to('#s6-description', {y: "-=38px", opacity: 1, duration: 2, ease: "power2.inOut"});

            s6Active = true;
            console.log("s6 = " + s6Active);
        }
    }});

    return s5tl
}

function sec6()
{
    const s6tl = gsap.timeline();

    s6tl.to("#sec6", {"clip-path": "polygon(0% 100%, 0% 0%, 0% 0%, 100% 0%, 100% 0%, 0% 100%)", duration: 100});

    s6tl.to("#sec6", {"clip-path": "polygon(0% 0%, 0% 0%, 0% 0%, 100% 0%, 0% 0%, 0% 0%)", duration: 100, onComplete: function ()
    {
        if(s7Active == false)
        {
            function lightningFlicker()
            {
                const ltl = gsap.timeline({repeat: -1, yoyo: true});
                ltl.fromTo('.s7', {opacity: 0.5}, {opacity: () => Math.random() * 1 + 0.5, duration: 0.0009});
            }

            gsap.fromTo('.s7', {opacity: 0.5}, {opacity: 1, duration: 0.5, onComplete: lightningFlicker()});

            const tdtl = gsap.timeline();

            tdtl.to('#s7-title', {y: "+=38px", opacity: 1, duration: 2, ease: "power2.inOut"});
            tdtl.to('#s7-description', {y: "-=38px", opacity: 1, duration: 2, ease: "power2.inOut"});

            s7Active = true;
            console.log("s7 = " + s7Active);
        }
    }});

    return s6tl
}

function sec7()
{
    const s7tl = gsap.timeline();

    s7tl.to("#sec7", {"clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 0%)", duration: 100});

    s7tl.to("#sec7", {"clip-path": "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%)", duration: 100, onComplete: function ()
    {
        if(s8Active == false)
        {
            const thtl = gsap.timeline();

            thtl.fromTo('#thanks', {x: "-=100px", opacity: 0}, {x: "+=100px", opacity: 1, duration: 2, ease: "power2.inOut"});
            thtl.fromTo('#for', {opacity: 0}, {opacity: 1, duration: 1.25, ease: "power2.inOut"});
            thtl.fromTo('#viewing', {x: "+=100px", opacity: 0}, {x: "-=100px", opacity: 1, duration: 2, ease: "power2.inOut"});

            s8Active = true;
            console.log("s8 = " + s8Active);
        }
    }});

    return s7tl
}

// markers: {startColor: "lime", endColor: "magenta"}

const mtl = gsap.timeline({scrollTrigger: {trigger: 'section', scrub: 0, pin: 'body', start: 'top top', end: "+=4000"}});

document.querySelector("#s1").onclick = () => {gsap.to("html", {scrollTo: {y: 0}, duration: 0.5, ease: Power4.inOut})};
document.querySelector("#s2").onclick = () => {gsap.to("html", {scrollTo: {y: 571.5}, duration: 0.5, ease: Power4.inOut})}; 
document.querySelector("#s3").onclick = () => {gsap.to("html", {scrollTo: {y: 1142.5}, duration: 0.5, ease: Power4.inOut})};
document.querySelector("#s4").onclick = () => {gsap.to("html", {scrollTo: {y: 1714.5}, duration: 0.5, ease: Power4.inOut})};
document.querySelector("#s5").onclick = () => {gsap.to("html", {scrollTo: {y: 2285.5}, duration: 0.5, ease: Power4.inOut})};
document.querySelector("#s6").onclick = () => {gsap.to("html", {scrollTo: {y: 2857.5}, duration: 0.5, ease: Power4.inOut})};
document.querySelector("#s7").onclick = () => {gsap.to("html", {scrollTo: {y: 3428.5}, duration: 0.5, ease: Power4.inOut})};

mtl.add(sec1()), mtl.add(sec2()), mtl.add(sec3()), mtl.add(sec4()), mtl.add(sec5()), mtl.add(sec6()), mtl.add(sec7());
