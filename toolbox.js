 // Global Variables //
	   var i = "1";
	   var listItem = "";
	   
	   
	   
	   function processInput() {
		if (i <= 5) {
			listItem = "item" + i;
			
			document.getElementById("toolbox").innerHTML = listItem;
			document.getElementById("toolbox").innerHTML = "";
			
			
			if (i = 5){
			document.getElementById("resultsFin") = "Thanks for your suggestions!"
			} // Nested statement
		i++;
		} // End of if statement
		document.getElementById("button") .addEventListener("click", processInput);
	} // End of function
	
	