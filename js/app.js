function scrollToSection(event){
  var section=document.getElementById(event.target.getAttribute("data-section"))
  var targetY=section.getBoundingClientRect().top+window.pageYOffset
  window.scroll(0,targetY)
}
var links=Array.from(document.querySelectorAll("nav .scroller"))
links.forEach(function(element,index){
    element.addEventListener("click",scrollToSection)
})
