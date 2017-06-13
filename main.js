var movies = [
{
	title: "Fight Club",
	hasWatched: true,
	rating: " - 4 Stars"

},
{
	title: "Trumps United",
	hasWatched: false,
	rating: " - 5 stars",
}
]

movies.forEach(function(masdf){
	console.log(buildString(masdf));
});

function buildString (movie) {
	var result = "You have ";
	if (movie.hasWatched) {
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\"";
	result +=  movie.rating;
	return result;
}

