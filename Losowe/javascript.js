
randomNumber = Math.floor(Math.random()*8+1);

window.onload = function() {
	if (randomNumber == 1) {
		document.getElementById("news1").style.display = "inline"; 
		document.getElementById("news2").style.display = "none"; 
		document.getElementById("news3").style.display = "none"; 
		document.getElementById("news4").style.display = "none";
		document.getElementById("news5").style.display = "inline";
		document.getElementById("news6").style.display = "none";
		document.getElementById("news7").style.display = "none";
		document.getElementById("news8").style.display = "none";  
	}	
	if (randomNumber == 2) {
		document.getElementById("news1").style.display = "none"; 
		document.getElementById("news2").style.display = "inline"; 
		document.getElementById("news3").style.display = "none"; 
		document.getElementById("news4").style.display = "none"; 
		document.getElementById("news5").style.display = "none";
		document.getElementById("news6").style.display = "inline";
		document.getElementById("news7").style.display = "none";
		document.getElementById("news8").style.display = "none";
		
	}
	if (randomNumber == 3) {
		document.getElementById("news1").style.display = "none"; 
		document.getElementById("news2").style.display = "none"; 
		document.getElementById("news3").style.display = "inline"; 
		document.getElementById("news4").style.display = "none"; 
		document.getElementById("news5").style.display = "none";
		document.getElementById("news6").style.display = "none";
		document.getElementById("news7").style.display = "none";
		document.getElementById("news8").style.display = "none";
	}
	if (randomNumber == 4) {
		document.getElementById("news1").style.display = "none"; 
		document.getElementById("news2").style.display = "none"; 
		document.getElementById("news3").style.display = "none"; 
		document.getElementById("news4").style.display = "inline"; 
		document.getElementById("news5").style.display = "none";
		document.getElementById("news6").style.display = "none";
		document.getElementById("news7").style.display = "inline";
		document.getElementById("news8").style.display = "none";
	}
	if (randomNumber == 5) {
		document.getElementById("news1").style.display = "inline";
		document.getElementById("news2").style.display = "none";
		document.getElementById("news3").style.display = "none";
		document.getElementById("news4").style.display = "none";
		document.getElementById("news5").style.display = "inline";
		document.getElementById("news6").style.display = "none";
		document.getElementById("news7").style.display = "none";
		document.getElementById("news8").style.display = "none";
	}
	if (randomNumber == 6) {
		document.getElementById("news1").style.display = "none";
		document.getElementById("news2").style.display = "inline";
		document.getElementById("news3").style.display = "none";
		document.getElementById("news4").style.display = "none";
		document.getElementById("news5").style.display = "none";
		document.getElementById("news6").style.display = "inline";
		document.getElementById("news7").style.display = "none";
		document.getElementById("news8").style.display = "none";
	}
	if (randomNumber == 7) {
		document.getElementById("news1").style.display = "none";
		document.getElementById("news2").style.display = "none";
		document.getElementById("news3").style.display = "inline";
		document.getElementById("news4").style.display = "none";
		document.getElementById("news5").style.display = "none";
		document.getElementById("news6").style.display = "none";
		document.getElementById("news7").style.display = "inline";
		document.getElementById("news8").style.display = "none";
	}
	if (randomNumber == 8) {
		document.getElementById("news1").style.display = "none";
		document.getElementById("news2").style.display = "none";
		document.getElementById("news3").style.display = "none";
		document.getElementById("news4").style.display = "none";
		document.getElementById("news5").style.display = "none";
		document.getElementById("news6").style.display = "none";
		document.getElementById("news7").style.display = "none";
		document.getElementById("news8").style.display = "inline";
	}
}
var url = 'https://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');
var button = document.getElementById('get-joke2');
var button = document.getElementById('get-joke3');
var button = document.getElementById('get-joke4');
var button = document.getElementById('get-joke5');
var button = document.getElementById('get-joke6');
var button = document.getElementById('get-joke7');
var button = document.getElementById('get-joke8');
var paragraph = document.getElementById('joke');
var paragraph = document.getElementById('joke2');
var paragraph = document.getElementById('joke3');
var paragraph = document.getElementById('joke4');
var paragraph = document.getElementById('joke5');
var paragraph = document.getElementById('joke6');
var paragraph = document.getElementById('joke7');
var paragraph = document.getElementById('joke8');
button.addEventListener('click', function () {
	getJoke();
});

(function () {
	getJoke();
})();

function getJoke() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.addEventListener('load', function () {
		var response = JSON.parse(xhr.response);
		paragraph.innerHTML = response.value.joke;
	});
	xhr.send();
};