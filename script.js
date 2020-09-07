// Fetch API data
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://genius.p.rapidapi.com/search?q=",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "genius.p.rapidapi.com",
    "x-rapidapi-key": "c56275269fmshd3bc2584975a2eep1e6fd3jsnca648f8db286"
    }}

  $.getJSON (settings, function(data){
    console.log(data);
  })


// Include input on clicking submit to the link

$('#form').submit(function(e){
  e.preventDefault();

  var userInput = $('#search').val()
// Replaced the spacing with %20
  var replaceUserInput = userInput.replace(/ /g, '%20');

  let result = ''

  var finalResult =  'https://genius.p.rapidapi.com/search?q=' + replaceUserInput + '&rapidapi-key=c56275269fmshd3bc2584975a2eep1e6fd3jsnca648f8db286'
  console.log(finalResult);

  $.get(finalResult, function(data){
    console.log(data);
    $('#formResults').html('')

    data.response.hits.forEach(res => {
      result = `
        <img src=${res.result.song_art_image_thumbnail_url}></img>
        <p>${res.result.full_title}</p>
      `
      console.log(result);
      $('#formResults').append(result);
 

    });

  });
});







