
var weekWrapper = document.getElementById("weekWrapper");
var weeklyMovie = document.getElementById("weeklyMovie");
var weeklyMovie2 = document.getElementById("weeklyMovie2");
var weeklyMovie3 = document.getElementById("weeklyMovie3");
var weeklyMovie4 = document.getElementById("weeklyMovie4");
var weeklyMovie5 = document.getElementById("weeklyMovie5");

var movieArray = ["blackmirror","bladerunner","fifthelement","fightclub","ghostbusters","grr","it","jaws","madmax","pulpfiction","romeomustdie","silenceofthelambs","thelastjedi","themartian","titanic","momanddad"];

function movieCheck(){
var randomMovie = movieArray[Math.floor(Math.random() * movieArray.length)];
var randomMovie2 = movieArray[Math.floor(Math.random() * movieArray.length)];
var randomMovie3 = movieArray[Math.floor(Math.random() * movieArray.length)];
var randomMovie4 = movieArray[Math.floor(Math.random() * movieArray.length)];
var randomMovie5 = movieArray[Math.floor(Math.random() * movieArray.length)];

weeklyMovie.setAttribute("src","images/" + randomMovie +".jpeg")
weeklyMovie2.setAttribute("src","images/" + randomMovie2 +".jpeg")
weeklyMovie3.setAttribute("src","images/" + randomMovie3 +".jpeg")
weeklyMovie4.setAttribute("src","images/" + randomMovie4 +".jpeg")
weeklyMovie5.setAttribute("src","images/" + randomMovie5 +".jpeg")
}

movieCheck()
