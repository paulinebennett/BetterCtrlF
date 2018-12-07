//content =  document.documentElement.innerHTML;
//content = document.body.innerText;
//console.log(content);

/*

content = document.body.textContent;
alert(content);

var allText = getPageText()

getPageText(docE){
	while 
}
*/

// Add listeners after popup opened
document.addEventListener("DOMContentLoaded", function(event) { 
	// Listener for text input changes
	var boxElement = document.getElementById("textBox");
	if(boxElement){ 
	  boxElement.addEventListener("input", function startSearch(){
		var searchStr = boxElement.value;
	    console.log("You wrote: " + searchStr);
	    document.getElementById("demo").innerHTML = "You wrote: " + searchStr;
	    
	    //call function to perform regex search with boxElement value
	    //on content script
	    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    		chrome.tabs.sendMessage(tabs[0].id, {text:searchStr}, function(response){
	        	//alert(response);
	        	//console.log(response.matches.toString());
	        	//document.getElementById("matches").innerHTML = response.matches.toString() + " results";
	    	});
		});

	  });

	}
});