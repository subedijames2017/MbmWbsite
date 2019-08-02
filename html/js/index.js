var myIndex = 0;
var testimonialslideIndex = 1;
showDivs(testimonialslideIndex);

function plusDivs(n) {
  showDivs(testimonialslideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("testimonial_Slides");
  if (n > x.length) {testimonialslideIndex = 1}    
  if (n < 1) {testimonialslideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[testimonialslideIndex-1].style.display = "block";  
}