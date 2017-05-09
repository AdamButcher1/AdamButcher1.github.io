$(document).ready(function() {


$(".speech").hide().fadeIn(2000);
$(".speech-author").hide().fadeIn(2000);
});

function showDesc(num) {
	switch(num) {
		case 1:
			document.getElementById("oneDesc").innerHTML = "This is where I learned how to use responsive layouts. I learned how to use a mobile first approach to allow the webpage to be resized for different devices.";
		break;
		case 2:
			document.getElementById("twoDesc").innerHTML = "This is where I learned how to create a registration form. I learned how to create various inputs, menus, labels, fieldsets, legends, and different buttons by forms.";
		break;
		case 3:
			document.getElementById("threeDesc").innerHTML = "This is where I learned how to create a media player using JavaScript. I learned how to create captions when the media player is running, along with implementing buttons such as play and pause along with fullscreen.";
		break;
		case 4:
			document.getElementById("fourDesc").innerHTML = "This is where I learned how to change colors to make the website more accessible. I learned how to change colors to make the text easier to read for people with disabilities.";
		break;
	}

}

function hideDesc(num) {
	switch(num) {
		case 1:
			document.getElementById("oneDesc").innerHTML = "";
		break;
		case 2:
			document.getElementById("twoDesc").innerHTML = "";
		break;
		case 3:
			document.getElementById("threeDesc").innerHTML = "";
		break;
		case 4:
			document.getElementById("fourDesc").innerHTML = "";
		break;
	}

}


