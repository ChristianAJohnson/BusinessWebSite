var movieArray = ["blackmirror","bladerunner","fifthelement","fightclub","ghostbusters","grr","it","jaws","madmax","pulpfiction","romeomustdie","silenceofthelambs","thelastjedi","themartian","titanic"];

function ShowMovies(image)
{


	for(i=0;i<movieArray.length;i++)
	{
		var picture = document.createElement("div")
		// var picture = document.getElementById("picture")
		picture.style.width = "300px"
		picture.style.height = "300px"
		picture.style.border = "2px solid blue"
		picture.style.marginTop = "10px"
		// picture.style.backgroundColor = "orange"
		// picture.style.boxShadow = "4px 5px 5px grey"
		// picture.style.color = "yellow"
		picture.style.backgroundImage = "url(../images/"+movieArray[i]+".jpeg)"
		// picture.style.backgroundImage = "url(../images/"+image+".jpeg)"
		// picutre.style.backgroundrepeat = "no-repeat"
		document.body.appendChild(picture)
	}
}


ShowMovies()