function SendToReddit(){
	var title = document.title;
	var title_encoded = encodeURI(title);
	var subreddit = "VirginsDankMusic";
	var subreddit_encoded = encodeURI(subreddit);
    var request_url = "https://www.reddit.com/submit?url=" + document.URL + "&title=" + title_encoded + "&r=" + subreddit_encoded + "&sagan=shit";
    RedditWindow = window.open(request_url);
}

SendToReddit();