var coll = document.getElementsByClassName("collapsible");
var i;
var tl = gsap.timeline();
var active = false;

for (i = 0; i < coll.length; i++) 
{
  coll[i].addEventListener("click", function() 
  {
    this.classList.toggle("active-collapse");
    var content = this.nextElementSibling;
    var contentHeight = content.offsetHeight;
    // if (content.style.display === "block") 
    // {
    //   content.style.display = "none";
    // } 
    // else 
    // {
    //   tl.to(content, {display: "block", duration: 0});
    //   // tl.fromTo(content, {scaleY: 0}, {scaleY: 1, duration: 1.5})
    //   tl.to(content, {"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", height: "100%", duration: 2.5})
    //   // content.style.display = "block";
    // }
    if (active == true) 
    {
      active = false;
      tl.to(content, {height: 0, duration: 0.5});
      tl.to(content, {display: "none", duration: 0});
      tl.to(content, {height: "", duration: 0});
    } 
    else 
    {
      active = true;
      tl.to(content, {display: "block", duration: 0});
      tl.from(content, {height: 0, duration: 1.5});
    }
  });
}