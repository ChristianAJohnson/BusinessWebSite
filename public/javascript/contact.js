var submitName = document.getElementById("submitName")
var comment = document.getElementById("comment")
var submitButton = document.getElementById("submitButton")
var commentText = document.getElementById("commentText")

function CommentData()
{
  
  	var hintText = document.createElement("div")
	// hintText.style.width = "auto"
	// hintText.style.border = "2px solid blue"
	// hintText.className = "hintText"
	// hintText.innerHTML = name.value
	hintText.innerHTML = "<br>" +"Name: " + submitName.value + "<br>" + "Comment: " + comment.value

	commentText.appendChild(hintText)
}

submitButton.addEventListener("click",function()
{
	CommentData()

});