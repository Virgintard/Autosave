document.onload = identifyWhichWebsite();

function identifyWhichWebsite(){
var RedditSubmitURL = "reddit.com/submit";
if(document.URL.indexOf(RedditSubmitURL) >- 1 && window.location.href.split('?')[0].indexOf(RedditSubmitURL) >- 1){
CheckSaganThenPost();	
} else {
}
}

function CheckSaganThenPost(){
	if(document.URL.indexOf("&sagan=shit") >- 1){
		document.getElementsByClassName("btn")[0].click();
	}	
}
