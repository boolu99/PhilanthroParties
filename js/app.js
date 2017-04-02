function scrollToSection(event){
  var section=document.getElementById(event.target.getAttribute("data-section"))
  var targetY=section.getBoundingClientRect().top+window.pageYOffset
  window.scroll(0,targetY)
  if (nav.className.indexOf("active")> -1) {
    nav.className = nav.className.replace( /(?:^|\s)active(?!\S)/ , '' )
    return
  }
}
var links=Array.from(document.querySelectorAll("nav .scroller"))
links.forEach(function(element,index){
    element.addEventListener("click",scrollToSection)
})

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("Slides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4000);
}

var nav = document.querySelector("nav")
var burger = document.getElementById("burger")
burger.addEventListener("click",function(){
  if (nav.className.indexOf("active")> -1) {
    nav.className = nav.className.replace( /(?:^|\s)active(?!\S)/ , '' )
    return
  }
  nav.className += " active"
})
