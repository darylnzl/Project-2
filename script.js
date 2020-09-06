var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://genius.p.rapidapi.com/artists/16775/songs",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "genius.p.rapidapi.com",
		"x-rapidapi-key": "c56275269fmshd3bc2584975a2eep1e6fd3jsnca648f8db286"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

var 