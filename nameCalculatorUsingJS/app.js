var studentName = "";

document.addEventListener('DOMContentLoaded',contentLoaded);

function contentLoaded(event){
	document.getElementById('name').addEventListener("keyup",calculateAndDisplay);
}

function calculateAndDisplay(event){
	studentName = document.getElementById('name').value;

	var weight = 0;

	for (var i = 0; i<studentName.length; i++){
		weight = weight + studentName.charCodeAt(i);
	}
	if (weight != 0) 
	{
		document.getElementById('output').innerText = "Weight of your name is: "+weight;
	}
	else
	{
		document.getElementById('output').innerText = "";
	}
}