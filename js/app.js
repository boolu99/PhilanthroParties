(function() {
  // CAROUSEL //////////////////////////////////
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

  var links = document.querySelectorAll("nav .scroller")

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
      if (nav.className.indexOf("active")> -1) {
        nav.className = nav.className.replace( /(?:^|\s)active(?!\S)/ , '' )
        return
      }
    })
  }

  // links.forEach(function(element,index){
  //     element.addEventListener("click",scrollToSection)
  // })

})()

// $(function() {
//
//     var $allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], object, embed"),
//     $fluidEl = $("figure");
//
// 	$allVideos.each(function() {
//
// 	  $(this)
// 	    // jQuery .data does not work on object/embed elements
// 	    .attr('data-aspectRatio', this.height / this.width)
// 	    .removeAttr('height')
// 	    .removeAttr('width');
//
// 	});
//
// 	$(window).resize(function() {
//
// 	  var newWidth = $fluidEl.width();
// 	  $allVideos.each(function() {
//
// 	    var $el = $(this);
// 	    $el
// 	        .width(newWidth)
// 	        .height(newWidth * $el.attr('data-aspectRatio'));
//
// 	  });
//
// 	}).resize();
//
// });
