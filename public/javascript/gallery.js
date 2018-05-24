

var movieArray = ["blackmirror","bladerunner","fifthelement","fightclub","ghostbusters","grr","it","jaws","madmax","pulpfiction","romeomustdie","silenceofthelambs","thelastjedi","themartian","titanic"];

var newMovies = document.getElementById("newMovies");
var newMoviesleft = document.getElementById("newMoviesleft")
var newMoviesright = document.getElementById("newMoviesright")
var newMovieNumber = 0


var scifi = document.getElementById("scifi");
var other = document.getElementById("other");





function ShowAllMovies()
{

	for(i=0;i<movieArray.length;i++)
	{
		var picture = document.createElement("div")
		picture.style.width = "200px"
		picture.style.height = "170px	"
		picture.style.border = "2px solid blue"
		// picture.style.marginTop = "10px"
		picture.style.display=  "inline-block"
		picture.style.backgroundImage = "url(../images/"+movieArray[i]+".jpeg)"
		newMovies.appendChild(picture)
	}
}


function ShowNewMovies(image)
{
	var picture = document.createElement("div")
	picture.style.width = "200px"
	picture.style.height = "170px	"
	picture.style.border = "2px solid blue"
	// picture.style.marginTop = "10px"
	picture.style.display=  "inline-block"
	picture.style.backgroundImage = "url(../images/"+image+".jpeg)"
	newMovies.appendChild(picture)
}

function ShowScifiMovies(image)
{
	var picture = document.createElement("div")
	picture.style.width = "200px"
	picture.style.height = "170px"
	picture.style.border = "2px solid blue"
	// picture.style.marginTop = "10px"
	picture.style.display=  "inline-block"
	picture.style.backgroundImage = "url(../images/"+image+".jpeg)"
	scifi.appendChild(picture)
}

function ShowOtherMovies(image)
{
	var picture = document.createElement("div")
	picture.style.width = "200px"
	picture.style.height = "170px	"
	picture.style.border = "2px solid blue"
	// picture.style.marginTop = "10px"
	picture.style.display=  "inline-block"
	picture.style.backgroundImage = "url(../images/"+image+".jpeg)"
	other.appendChild(picture)
}


ShowNewMovies(movieArray[newMovieNumber])
ShowScifiMovies(movieArray[2])
ShowOtherMovies(movieArray[7])

newMoviesleft.addEventListener("click", function(){
	newMovieNumber = newMovieNumber - 1
	ShowNewMovies(movieArray[newMovieNumber])
})

newMoviesright.addEventListener("click", function(){
	newMovieNumber = newMovieNumber + 1
	ShowNewMovies(movieArray[newMovieNumber])
})

// newMoviesright.addEventListener("click", function(){
// 	newMovieNumber = newMovieNumber + 1
// 	newMovies.replaceChild(movieArray[newMovieNumber +1],)
// })







// var picture = document.getElementById("picture");
// picture.style.backgroundColor = "orange"
// picture.style.boxShadow = "4px 5px 5px grey"
// picture.style.color = "yellow"
// picture.style.backgroundImage = "url(../images/"+movieArray[i]+".jpeg)"
// picutre.style.backgroundrepeat = "no-repeat"