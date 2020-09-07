// $('#form').submit(function(e){

//   e.preventDefault();

//   var input = $('#input').val()
//   var url = 'https://genius.p.rapidapi.com/search?q=' + input + '&rapidapi-key=c56275269fmshd3bc2584975a2eep1e6fd3jsnca648f8db286'
//   console.log(url);

//   $.get(url, function(data){
//     console.log(data);
//   });

// });




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


// Include input on clicking submit to link
$('#form').submit(function(e){
  e.preventDefault();

  var input = $('#search').val()
  var result =  'https://genius.p.rapidapi.com/search?q=' + input + '&rapidapi-key=c56275269fmshd3bc2584975a2eep1e6fd3jsnca648f8db286'
  console.log(result);

  $.get(result, function(data){
    console.log(data);
  });

});









// Let getSearch = "";
// var search = $('#search').val()

// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://genius.p.rapidapi.com/search?q=" + getSearch,
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "genius.p.rapidapi.com",
//     "x-rapidapi-key": "c56275269fmshd3bc2584975a2eep1e6fd3jsnca648f8db286"
//     }}

//   $.getJSON (settings, function(data){
//     console.log(data);
//   }
    




// $('#form').submit(function(e){

//   e.preventDefault();

//   var input = $('#input').val()
//   var url = 'https://genius.p.rapidapi.com/search?q=' + input + '&rapidapi-key=c56275269fmshd3bc2584975a2eep1e6fd3jsnca648f8db286'
//   console.log(url);

//   $.get(url, function(data){
//     console.log(data);
//   });

// });