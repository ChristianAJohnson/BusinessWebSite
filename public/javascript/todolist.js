
var toDoList = document.getElementById("toDoList");
var movieBox = document.getElementsByClassName("movieBox");
var listWrapper = document.getElementById("listWrapper");
var slideshowContainer = document.getElementById("slideshowContainer");
var imageSlides = document.getElementsByClassName("imageslide");

var movieArray = ["blackmirror","bladerunner","fifthelement","fightclub","ghostbusters","grr","it","jaws","madmax","pulpfiction","romeomustdie","silenceofthelambs","thelastjedi","themartian","titanic","momanddad"];

var movieImageArray = []

var movieListWrapper = document.createElement("div");
movieListWrapper.setAttribute("id","movieListWrapper")


for(let i=0;i<movieArray.length;i++){
	var movieBox = document.createElement("button");
	movieBox.setAttribute("class","movieBox");
	movieBox.style.height = "30px";
	movieBox.style.width = "125px";
	movieBox.style.fontFamily = "'Lato', sans-serif";
	movieBox.style.backgroundColor = "#A0E838";
	movieBox.style.margin = "5px";
	movieBox.style.outline = "none";
	movieBox.style.borderRadius = "30px"
	movieBox.style.textAlign = "center";
	movieBox.style.textTransform = "capitalize";
	movieBox.style.fontFamily = "'Lato', sans-serif";
	movieBox.innerHTML = movieArray[i];
	movieListWrapper.appendChild(movieBox);
	movieBox.addEventListener("click",function(e){
		movieImageArray.push(movieArray[i]);
		console.log(movieImageArray)
		var n = movieImageArray.indexOf(movieArray[i])
		imageSlides[n].setAttribute("src","images/" + movieImageArray[n]+".jpeg")
	})
}

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}










listWrapper.appendChild(movieListWrapper)






