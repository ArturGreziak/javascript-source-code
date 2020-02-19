
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
