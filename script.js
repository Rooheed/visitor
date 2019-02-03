
 var username = localStorage.getItem("username");
 if(!username) {

	username = prompt("Please enter your name...");

	localStorage.setItem("username", username);
	
	document.getElementById("welcomeText").innerHTML = "Hey" + " " + username + "! " + "Welcome to my page...";

}

 else if (username) {
	 document.getElementById("welcomeText").innerHTML = "Hey" + " " + username + " and " + "Welcome back!";
 }

 
 setTimeout(function(){
	document.getElementById("welcomeText").style.display = "none"; 
   }, 3000);

