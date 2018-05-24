
var toDoList = document.getElementById("toDoList");
var movieBox = document.getElementsByClassName("movieBox");
var listWrapper = document.getElementById("listWrapper");

var movieArray = ["blackmirror","bladerunner","fifthelement","fightclub","ghostbusters","grr","it","jaws","madmax","pulpfiction","romeomustdie","silenceofthelambs","thelastjedi","themartian","titanic"];

var jpegArray = ["blackmirror.jpeg","bladerunner.jpeg","fifthelement.jpeg","fightclub.jpeg","ghostbusters.jpeg","grr.jpeg","it.jpeg","jaws.jpeg","madmax.jpeg","pulpfiction.jpeg","romeomustdie.jpeg","silenceofthelambs.jpeg","thelastjedi.jpeg","themartian.jpeg","titanic.jpeg"]

var movieImageArray = []

var movieListWrapper = document.createElement("div");
movieListWrapper.setAttribute("id","movieListWrapper")


for(let i=0;i<movieArray.length;i++){
	var movieBox = document.createElement("button");
	movieBox.setAttribute("class","movieBox");
	movieBox.style.height = "30px";
	movieBox.style.width = "125px";
	movieBox.style.fontFamily = "courier";
	movieBox.style.backgroundColor = "#42b6f4";
	movieBox.style.margin = "5px";
	movieBox.style.borderRadius = "30px"
	movieBox.style.textAlign = "center";
	movieBox.innerHTML = movieArray[i];
	movieListWrapper.appendChild(movieBox);
	movieBox.addEventListener("click",function(e){
		var imageBox = document.createElement("div");
		toDoList.appendChild(imageBox)
		imageBox.style.height = "150px";
		imageBox.style.width = "248px";
		imageBox.style.backgroundImage = "url('images/" + movieArray[i] + ".jpeg')";
		imageBox.style.backgroundSize = "100%"
		movieImageArray.push(movieArray[i]);
		console.log(movieImageArray)


	})
}





listWrapper.appendChild(movieListWrapper)






