var content = document.body.textContent;
console.log(content);

chrome.runtime.onMessage.addListener(function (request, sender, response) {
	console.log(request.text);
	x = content.match(request.text);
	console.log(x);
	//return number of results
	//chrome.runtime.sendMessage({matches: 1});
	//response = 1;
	//return response;
	//chrome.runtime.sendMessage ...
});